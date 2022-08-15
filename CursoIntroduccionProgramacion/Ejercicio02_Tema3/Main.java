public class Main {

    public static void main(String[] args){

        Coches miCoche = new Coches();
        miCoche.AumentarPuertas();
        System.out.println(miCoche.puertas);
    }

}
class Coches {
    public int puertas = 4;

    public int AumentarPuertas() {
        puertas += 1;
        return puertas;
    }
}
    /*Segunda parte:

        Crear una clase coche.

        Dentro de la clase coche, una variable numérica que almacene el número de puertas que tiene.

        Una función que incremente el número de puertas que tiene el coche.

        Crear un objeto miCoche en el main y añadirle una puerta.

        Mostrar el número de puertas que tiene el objeto. */