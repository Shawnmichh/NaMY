from rest_framework import serializers
from .models import User, Investment

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class InvestmentSerializer(serializers.ModelSerializer):
    user_name = serializers.CharField(source='user.name', read_only=True)
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = Investment
        fields = ['id', 'user', 'user_name', 'investment_name', 'amount_invested', 'taxes_paid', 'investment_date']