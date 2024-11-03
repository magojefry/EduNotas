from django.contrib import admin
from .models import Persona, Usuario, Materia, Asignacion, Evaluacion
from django.contrib.auth.admin import  Group


admin.site.unregister(Group)

@admin.register(Persona)
class PersonaAdmin(admin.ModelAdmin):
    list_display = ('numero_documento', 'nombre', 'apellido', 'tipo_documento', 'fecha_nacimiento', 'sexo')
    search_fields = ('numero_documento', 'nombre', 'apellido')

@admin.register(Usuario)
class UsuarioAdmin(admin.ModelAdmin):
    list_display = ('username', 'rol', 'email', 'fecha_registro')
    search_fields = ('username', 'email')
    list_filter = ('rol',)
    exclude = ('groups',)
    

@admin.register(Materia)
class MateriaAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'creador')
    search_fields = ('nombre',)

@admin.register(Asignacion)
class AsignacionAdmin(admin.ModelAdmin):
    list_display = ('usuario', 'fecha_asignacion')
    search_fields = ('usuario__username',)

@admin.register(Evaluacion)
class EvaluacionAdmin(admin.ModelAdmin):
    list_display = ('asignacion', 'nota_1', 'nota_2', 'nota_3', 'faltas')
    search_fields = ('asignacion__usuario__username',)

    