from rest_framework import serializers

from drf_extra_fields.fields import Base64ImageField

from .models import Product, ProductType, Category


class ProductTypeSerializer(serializers.ModelSerializer):
    """
    Преобразует объекты базы данных в объекты json.
    """
    class Meta:
        model = ProductType
        fields = ('id', 'name')


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ('id', 'name')


class ProductSerializer(serializers.ModelSerializer):
    image = Base64ImageField(required=False)

    class Meta:
        model = Product
        fields = ('id', 'product_type', 'category', 'name', 'description', 'image')
