from django.db.models import fields
from rest_framework import serializers
from .models import *
from rest_framework.authtoken.models import Token


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=68,min_length=6,write_only=True)

    class Meta:
        model = Patient
        fields =  ['email', 'username', 'password','age','gender','mobile']
    
    def validate(self, attrs):
        email = attrs.get('email')
        username = attrs.get('username')
        age = attrs.get('age')
        gender = attrs.get('gender')

        if not username.isalnum():
            raise serializers.ValidationError('Username must be alphanumeric')

        return attrs



    def create(self, validated_data):
        user = Patient.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user

class PatientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Patient
        fields = '__all__'
    
    