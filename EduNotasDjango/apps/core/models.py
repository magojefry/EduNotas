from django.db import models
from django.contrib.auth.models import AbstractUser

class Persona(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    fecha_nacimiento = models.DateField()

class Usuario(AbstractUser):
    ROLES = [
        ('estudiante', 'Estudiante'),
        ('profesor', 'Profesor'),
        ('administrador', 'Administrador'),
    ]
    persona = models.OneToOneField(Persona, on_delete=models.CASCADE, null=True, blank=True)
    rol = models.CharField(max_length=50, choices=ROLES)
    
    def save(self, *args, **kwargs):
        if self.persona:
            self.first_name = self.persona.nombre
            self.last_name = self.persona.apellido
        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.last_name}, {self.first_name}'

class Materia(models.Model):
    nombre = models.CharField(max_length=100)
    codigo = models.CharField(max_length=20)
    creador = models.ForeignKey(Usuario, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre

class Asignacion(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    materias = models.ManyToManyField(Materia, related_name='asignaciones')  # Cambiado a ManyToManyField
    año = models.PositiveIntegerField()

class Evaluacion(models.Model):
    asignacion = models.ForeignKey(Asignacion, on_delete=models.CASCADE)
    tipo = models.CharField(max_length=50)
    fecha = models.DateField()
    valor = models.FloatField(null=True)


