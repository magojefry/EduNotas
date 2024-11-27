from  django.urls import path, include
from  rest_framework import routers
from EduNotasDjango.apps.administrador import views

router = routers.DefaultRouter()    
router.register(r'mate', views.AdminView, 'materias')


urlpatterns = [
    path('regmat/', include(router.urls))    
]

#http://127.0.0.1:8000/administrador/regmat