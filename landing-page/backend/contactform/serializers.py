from rest_framework import serializers
from .models import Contact
import bleach
import re

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

    def validate_message(self, value):
        return bleach.clean(value)

    def validate_name(self, value):
        if not re.match(r'^[a-zA-Z\s]+$', value):
            raise serializers.ValidationError("Nome deve conter apenas letras e espaços.")
        return value
