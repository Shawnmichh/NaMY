import pandas as pd
from io import BytesIO
from django.shortcuts import get_object_or_404
from django.http import HttpResponse
from openpyxl import Workbook
from openpyxl.utils.dataframe import dataframe_to_rows
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Investment


@api_view(['GET', 'POST', 'DELETE'])
def investment_list(request):
    if request.method == 'GET':
        investments = Investment.objects.all()
        data = [
            {
                "id": i.id,
                "name": i.name,
                "amount": str(i.amount),
                "taxes": str(i.taxes),
                "date": i.date,
            }
            for i in investments
        ]
        return Response(data)

    if request.method == 'POST':
        try:
            data = request.data
            investment = Investment.objects.create(
                name=data["name"],
                amount=data["amount"],
                taxes=data["taxes"],
                date=data["date"]
            )
            return Response({
                "id": investment.id,
                "name": investment.name,
                "amount": str(investment.amount),
                "taxes": str(investment.taxes),
                "date": investment.date,
            }, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'DELETE':
        try:
            investment_id = request.data.get("id")
            investment = get_object_or_404(Investment, id=investment_id)
            investment.delete()
            return Response({"message": "Investment deleted successfully!"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def export_to_excel(request):
    try:
        investments = Investment.objects.all()
        data = [
            {
                "Name": i.name,
                "Amount": float(i.amount),
                "Taxes": float(i.taxes),
                "Date": i.date.strftime("%Y-%m-%d"),
            }
            for i in investments
        ]

        if not data:
            return HttpResponse(
                "No data available to export.",
                content_type="text/plain",
                status=400,
            )

        df = pd.DataFrame(data)

        output = BytesIO()
        wb = Workbook()
        ws = wb.active
        ws.title = "Investments"

        for row in dataframe_to_rows(df, index=False, header=True):
            ws.append(row)

        for column_cells in ws.columns:
            max_length = 0
            column = column_cells[0].column_letter
            for cell in column_cells:
                try:
                    max_length = max(max_length, len(str(cell.value)))
                except Exception:
                    pass
            adjusted_width = max_length + 2
            ws.column_dimensions[column].width = adjusted_width

        wb.save(output)
        output.seek(0)

        response = HttpResponse(
            output,
            content_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        )
        response["Content-Disposition"] = 'attachment; filename="investments.xlsx"'
        return response

    except Exception as e:
        return HttpResponse(
            f"An error occurred while exporting to Excel: {str(e)}",
            content_type="text/plain",
            status=500,
        )
