def main():

    entrada = input("Escribe los paises separados por comas: ")

    lista_paises = entrada.split(',')
    lista_paises = list(map(lambda x: x.strip(), lista_paises))

    lista_paises = list(set(lista_paises))

    print(sorted(lista_paises))

if __name__ == '__main__':
    main()