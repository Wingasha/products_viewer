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
    # product_type = ProductTypeSerializer() serializers.SerializerMethodField()
    # category = CategorySerializer()

    class Meta:
        model = Product
        fields = ('id', 'product_type', 'category', 'name', 'description', 'image')

    # def get_image_url(self, product):
    #     request = self.context.get('request')
    #     if product.image:
    #         image_url = product.image.url
    #         return request.build_absolute_uri(image_url)
    #     return ''

    # def create(self, validated_data):
    #     image = validated_data.pop('image')
    #     product_type = validated_data.pop('product_type')
    #     category = validated_data.pop('category')
    #     name = validated_data.pop('name')
    #     description = validated_data.pop('description')
    #
    #     return Product.objects.create(product_type=product_type,
    #                                   category=category,
    #                                   name=name,
    #                                   description=description,
    #                                   image=image)
