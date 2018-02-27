from rest_framework import routers

from .views import ProductViewSet, ProductTypeViewSet, CategoryViewSet

from django.conf.urls import url

app_name = 'products'

# Создаем router и регистрируем наш ViewSet
router = routers.DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'product_types', ProductTypeViewSet)
router.register(r'categories', CategoryViewSet)

# URLs настраиваются автоматически роутером
urlpatterns = router.urls
