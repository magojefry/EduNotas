from rest_framework import serializers
from EduNotasDjango.apps.core.models import Materia

class AdminSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Materia
        fields = '__all__'
        
        """fields=(
            'id',
            'nombre',
            'descripcion',
            'creador',
            'habilitable',
            'nivel_educativo',
            'fecha'
            )"""
