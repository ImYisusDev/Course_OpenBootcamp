class Vehiculo:
    _color = "negro"
    _ruedas = 4
    _puertas = 4

class Coche(Vehiculo):
    _velocidad = 120
    _cilindrada = None

coche = Coche()
print(coche)