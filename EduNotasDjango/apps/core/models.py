from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone

class Persona(models.Model):
    TIPOS_DOCUMENTOS = [
    ('tarjeta_identidad', 'Tarjeta de Identidad'),
    ('cedula', 'Cedula'),
    ('pasaporte', 'Pasaporte'),
    ('documento_extranjeria', 'Documento de Extranjeria'),
]
    SEXO=[
        ('masculino','Masculino'),
        ('femenino','Femenino'),
        ('lqbt','LQBT'),
        ('prefiero_no_decir', 'Prefiero no decirlo'),
    ]
    RH = [
    ('o+', 'O+'),
    ('o-', 'O-'),
    ('a+', 'A+'),
    ('a-', 'A-'),
    ('b+', 'B+'),
    ('b-', 'B-'),
    ('ab+', 'AB+'),
    ('ab-', 'AB-'),
    ]
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    fecha_nacimiento = models.DateField(null=True)
    tipo_documento = models.CharField(max_length=50, choices=TIPOS_DOCUMENTOS)
    numero_documento = models.CharField(max_length=200, primary_key=True)
    fecha_expedicion = models.DateField(null=True)
    sexo = models.CharField(max_length=50, choices=SEXO)
    grupo_sanguineo = models.CharField(max_length=50, choices=RH)
    eps= models.CharField(max_length=100)
    direccion = models.CharField(max_length=250)
    

class Usuario(AbstractUser):
    ROLES = [
        ('estudiante', 'Estudiante'),
        ('profesor', 'Profesor'),
        ('administrador', 'Administrador'),
    ]
    
    CARRERAS = [
        ('medico', 'Medico'),
        ('enfermero', 'Enfermero'),
        ('odontologo', 'Odontologo'),
        ('farmaceutico', 'Farmaceutico'),
        ('psicologo', 'Psicologo'),
        ('fisioterapeuta', 'Fisioterapeuta'),
        ('nutricionista', 'Nutricionista'),
        ('veterinario', 'Veterinario'),
        ('ingeniero_civil', 'Ingeniero Civil'),
        ('ingeniero_mecanico', 'Ingeniero Mecanico'),
        ('ingeniero_electrico', 'Ingeniero Electrico'),
        ('ingeniero_industrial', 'Ingeniero Industrial'),
        ('ingeniero_informatico', 'Ingeniero Informatico'),
        ('ingeniero_quimico', 'Ingeniero Quimico'),
        ('psicologo_social', 'Psicologo Social'),
        ('sociologo', 'Sociologo'),
        ('trabajador_social', 'Trabajador Social'),
        ('antropologo', 'Antropologo'),
        ('politologo', 'Politologo'),
        ('artista', 'Artista'),
        ('disenador_grafico', 'Disenador Grafico'),
        ('disenador_modas', 'Disenador de Modas'),
        ('arquitecto', 'Arquitecto'),
        ('fotografo', 'Fotografo'),
        ('musico', 'Musico'),
        ('administrador_empresas', 'Administrador de Empresas'),
        ('contador', 'Contador'),
        ('economista', 'Economista'),
        ('mercadologo', 'Mercadologo'),
        ('recursos_humanos', 'Recursos Humanos'),
        ('financiero', 'Financiero'),
        ('cienciado_computacion', 'Cienciado de la Computacion'),
        ('desarrollador_software', 'Desarrollador de Software'),
        ('cibersegurista', 'Cibersegurista'),
        ('inteligencia_artificial', 'Inteligencia Artificial'),
        ('analista_datos', 'Analista de Datos'),
        ('biologo', 'Biologo'),
        ('quimico', 'Quimico'),
        ('fisico', 'Fisico'),
        ('geologo', 'Geologo'),
        ('ecologo', 'Ecologo'),
        ('periodista', 'Periodista'),
        ('relacionista_publico', 'Relacionista Publico'),
        ('publicista', 'Publicista'),
        ('comunicador_audiovisual', 'Comunicador Audiovisual'),
        ('productor_medios', 'Productor de Medios'),
        ('abogado', 'Abogado'),
        ('notario', 'Notario'),
        ('abogado_internacional', 'Abogado Internacional'),
        ('abogado_ambiental', 'Abogado Ambiental'),
    ]


    SEMESTRES = [
        ('semestre_1', 'Primer Semestre'),
        ('semestre_2', 'Segundo Semestre'),
        ('semestre_3', 'Tercer Semestre'),
        ('semestre_4', 'Cuarto Semestre'),
        ('semestre_5', 'Quinto Semestre'),
        ('semestre_6', 'Sexto Semestre'),
        ('semestre_7', 'Septimo Semestre'),
        ('semestre_8', 'Octavo Semestre'),
        ('semestre_9', 'Noveno Semestre'),
        ('semestre_10', 'Decimo Semestre'),
    ]

    NIVELES_ESTUDIO = [
    ('primaria', 'Educacion Primaria'),
    ('secundaria', 'Educacion Secundaria'),
    ('tecnico', 'Tecnico Superior'),
    ('tecnologo', 'Tecnologo'),
    ('pregrado', 'Pregrado'),
    ('posgrado', 'Posgrado'),
    ('maestria', 'Maestria'),
    ('doctorado', 'Doctorado'),
    ]

    #General
    persona = models.OneToOneField(Persona, on_delete=models.CASCADE, null=True, blank=True)
    rol = models.CharField(max_length=50, choices=ROLES, default='estudiante') 
    
    #para estudiantes
    Nivel_estudio = models.CharField(max_length=50, choices=NIVELES_ESTUDIO, default='pregrado')
    fecha_graduacion = models.DateField(null=True)
    carrera = models.CharField(max_length=100, choices=CARRERAS)
    fecha_registro = models.DateField(auto_now_add=True)
    semestre = models.CharField(max_length=50, choices=SEMESTRES)
    
    #para profesores o admin
    tarjeta_profesional= models.CharField(max_length=50)
    titulo = models.CharField(max_length=100, choices=CARRERAS)
    experiencia_laboral = models.PositiveIntegerField(default=0)
    
    def save(self, *args, **kwargs):
        if self.is_superuser:
            self.rol = 'administrador'
        
        else:
            if not self.rol:
                self.rol = 'estudiante'
                
        if self.persona:
            self.first_name = self.persona.nombre
            self.last_name = self.persona.apellido
        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.last_name}, {self.first_name}'
    
    

class Materia(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField(blank=True)
    creador = models.ForeignKey(Usuario, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre

class Asignacion(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    materias = models.ManyToManyField(Materia, related_name='asignaciones')  # Cambiado a ManyToManyField
    fecha_asignacion = models.DateField(auto_now_add=True)

class Evaluacion(models.Model):
    asignacion = models.ForeignKey(Asignacion, on_delete=models.CASCADE)
    nota_1 = models.FloatField(default=0, null=True)
    nota_2 = models.FloatField(default=0, null=True )
    nota_3 = models.FloatField(default=0, null=True )
    faltas = models.PositiveIntegerField(default=0)

    """
    #Fecha de activacion  y fecha de vencimiento 
    fecha_activacion = models.DateField()  
    fecha_vencimiento = models.DateField()  
    
    def puede_ingresar_nota(self):
        #Determina si se puede ingresar alguna nota basada en la fecha de activación y vencimiento.
        now = timezone.now().date()
        return self.fecha_activacion <= now <= self.fecha_vencimiento
    """
    
    def __str__(self):
        return f"Notas: {self.nota_1}, {self.nota_2}, {self.nota_3} | Faltas: {self.faltas}"

