from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = User
        write_only_fields = ('password',)
        fields = ("id", "username", "email","password", )

    extra_kwargs = {'password': {'write_only': True}}