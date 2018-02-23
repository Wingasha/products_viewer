from django.db import models


class ProductType(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return '%s' % self.name

    class Meta:
        verbose_name = 'Тип продукта'
        verbose_name_plural = 'Типы продуктов'


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return '%s' % self.name

    class Meta:
        verbose_name = 'Категория продукта'
        verbose_name_plural = 'Категории продуктов'


class Product(models.Model):
    product_type = models.ForeignKey(ProductType)
    category = models.ForeignKey(Category)
    name = models.CharField(max_length=100, blank=True, null=True, default=None)
    description = models.TextField(blank=True, null=True, default=None)
    image = models.ImageField(upload_to='products_img')

    def __str__(self):
        return '%s' % self.name

    class Meta:
        verbose_name = 'Продукт'
        verbose_name_plural = 'Продукты'
