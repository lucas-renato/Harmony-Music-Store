from rest_framework import serializers
from .models import Review

class ReviewSerializer(serializers.ModelSerializer):
    user_email = serializers.ReadOnlyField(source='user.email')
    product_name = serializers.ReadOnlyField(source='product.name')

    class Meta:
        model = Review
        fields = ['id', 'product', 'product_name', 'user_email', 'rating', 'comment', 'created_at']
        read_only_fields = ['user_email', 'product_name', 'created_at']

    def validate_rating(self, value):
        if value < 1 or value > 5:
            raise serializers.ValidationError("A nota deve estar entre 1 e 5.")
        return value
