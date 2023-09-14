from .models import CustomUser
from rest_framework import serializers
from .models import Testimonial, SavedNote


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser(
            username=validated_data['username'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user


class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = '__all__'


class SavedNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = SavedNote
        fields = '__all__'
