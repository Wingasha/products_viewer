from rest_framework import serializers

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
    image_url = serializers.SerializerMethodField()
    product_type = ProductTypeSerializer()
    category = CategorySerializer()

    class Meta:
        model = Product
        fields = ('id', 'product_type', 'category', 'name', 'description', 'image_url')

    def get_image_url(self, product):
        request = self.context.get('request')
        image_url = product.image.url
        return request.build_absolute_uri(image_url)