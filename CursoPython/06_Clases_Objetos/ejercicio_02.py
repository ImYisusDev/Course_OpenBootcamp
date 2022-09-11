class Alumno:
    nombre = None
    nota = 0
    def inicializarAtributos(self):
        self.nombre = input("Escribe tu nombre: ")
        self.nota = int(input("Escribe tu nota: "))

        print(f"Su nombre es {self.nombre} y su nota es {self.nota}")

        if self.nota >= 14:
            return "Está aprobado"
        else: 
            return "Está desaprobado"

alumno = Alumno()

print(alumno.inicializarAtributos())