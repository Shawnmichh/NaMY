from django.urls import path
from .views import investment_list, export_to_excel

urlpatterns = [
    path('investments/', investment_list, name='investment_list'),
    path('export/', export_to_excel, name='export_to_excel'),
]
