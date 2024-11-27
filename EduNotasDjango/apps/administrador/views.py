from django.shortcuts import render
from rest_framework import viewsets
from EduNotasDjango.apps.core.models import Materia
from .serializer import AdminSerializer

class AdminView(viewsets.ModelViewSet):
    queryset = Materia.objects.all()
    serializer_class = AdminSerializer
    