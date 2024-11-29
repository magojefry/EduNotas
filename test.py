from selenium import webdriver
from selenium.webdriver.firefox.service import Service
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support.ui import Select
import time 

# Configurar las opciones de Firefox
options = Options()
options.headless = False  # Si no quieres que se ejecute en segundo plano, cambia a True

# Iniciar el servicio con geckodriver
service = Service(executable_path='/usr/bin/geckodriver')

# Crear la instancia del WebDriver de Firefox
driver = webdriver.Firefox(service=service, options=options)

# Cargar la página
driver.get("http://localhost:5173/")

#llenar formulario

nombreMate = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "input[name='nombre']")))
nombreMate.clear()
nombreMate.send_keys("datos")

descripcionMate = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "textarea[name='descripcion']")))
descripcionMate.clear()
descripcionMate.send_keys("unaPrueba")

habilitableMate = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CSS_SELECTOR, "select[name='habilitable']")))
select = Select(habilitableMate)
select.select_by_index(2)

nivelEduMate = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CSS_SELECTOR, "select[name='nivel_educativo']")))
select = Select(nivelEduMate)
select.select_by_index(1)



# guardar
botonGuardar = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "button[name='guardarMate']"))).click()

time.sleep(100)

driver.quit()