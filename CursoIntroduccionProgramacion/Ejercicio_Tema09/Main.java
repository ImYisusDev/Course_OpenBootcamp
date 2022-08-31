public class Main {

    public static void main(String[] args){
        Cliente cliente = new Cliente();

        cliente.nombre = "Angelica";
        cliente.edad = 18;
        cliente.telefono = 936482734;
        cliente.credito = 1000.00;

        System.out.println("Mi nombre es " + cliente.nombre + " tengo " + cliente.edad + " años y mi número de teléfono es " + cliente.telefono + ". Además realicé un crédito por " + cliente.credito  + " d+olares");

        Trabajador trabajador = new Trabajador();
        trabajador.nombre = "Jesús";
        trabajador.edad = 18;
        trabajador.telefono = 987654321;
        trabajador.salario = 10000.00;

        System.out.println("Mi nombre es " + trabajador.nombre + " tengo " + trabajador.edad + " años y mi número de teléfono es " + trabajador.telefono + ". Cuento con un salario de " + trabajador.salario + " dólares");

    }
}

class Persona {
    int edad;
    String nombre;
    int telefono;
}

final class Cliente extends Persona {
    double credito;
}

final class Trabajador extends Persona {
    double salario;
}
    /*Crea una clase Persona con las siguientes variables:

        La edad

        El nombre

        El teléfono

    Una vez creada la clase, crea una nueva clase Cliente que herede de Persona,
    esta nueva clase tendrá la variable credito solo para esa clase.

    Crea ahora un objeto de la clase Cliente que debe tener como propiedades la edad,
    el telefono, el nombre y el credito, tienes que darles valor y mostrarlas por pantalla.

    Una vez hecho esto, haz lo mismo con la clase Trabajador que herede de Persona,
    y con una variable salario que solo tenga la clase Trabajador.*/