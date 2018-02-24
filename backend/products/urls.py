from rest_framework import routers

from .views import ProductViewSet

from django.conf.urls import url

app_name = 'products'

# Создаем router и регистрируем наш ViewSet
router = routers.DefaultRouter()
router.register(r'products', ProductViewSet)

# URLs настраиваются автоматически роутером
urlpatterns = router.urls
