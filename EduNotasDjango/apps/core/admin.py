from django.contrib import admin
from .models import Persona, Usuario, Materia, Asignacion, Evaluacion
from django.contrib.auth.admin import  Group


admin.site.unregister(Group)
    
@admin.register(Usuario)
class UsuarioAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'rol', 'is_active')
    list_filter = ('rol', 'is_active')
    search_fields = ('username', 'email')
    exclude = ('groups',)

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        qs.model._meta.verbose_name = "Usuario"
        qs.model._meta.verbose_name_plural = "Usuarios"
        return qs

    def save_model(self, request, obj, form, change):
        obj.save()

@admin.register(Persona)
class PersonaAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'apellido', 'fecha_nacimiento')
    search_fields = ('nombre', 'apellido') 
    
@admin.register(Materia)
class MateriaAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'codigo', 'creador')
    search_fields = ('nombre', 'codigo')

@admin.register(Asignacion)
class AsignacionAdmin(admin.ModelAdmin):
    list_display = ('usuario', 'año')
    search_fields = ('usuario__username',)
    list_filter = ('año',) 

@admin.register(Evaluacion)
class EvaluacionAdmin(admin.ModelAdmin):
    list_display = ('tipo', 'fecha', 'valor', 'asignacion')
    list_filter = ('tipo',)
    search_fields = ('tipo',)
    
    