from functools import reduce

def suma(a, b):
    return a + b

def main():
    entrada = input("Escribe tu lista de numeros: ")
    lista = entrada.split(',') # convirtiendo el input a lista
    
    # Ordenando la lista para que solo salgan los numeros impares
    lista = list(map(lambda x: int(str(x).strip()), lista))
    lista = list(filter(lambda x: x%2 != 0, lista))

    # Sumando todos los numeros impares de la lista
    resultado = reduce((lambda a, b: a + b), lista)

    print(resultado)

if __name__ == '__main__':
    main()