public class Main {

    public static void main(String[] args){
        Persona persona = new Persona();

        persona.setNombre("Angelica");
        persona.setEdad(18);
        persona.setTelefono(936482734);

        System.out.println("Mi nombre es " + persona.getNombre() + " tengo " + persona.getEdad() + "años y mi número de teléfono es " + persona.getTelefono());
    }
}

class Persona {
    private int edad;
    private String nombre;
    private int telefono;

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public int getEdad() {
        return this.edad;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }

    public void setTelefono(int telefono) {
        this.telefono = telefono;
    }

    public int getTelefono() {
        return telefono;
    }
}
    /*Crear clase Persona.

        Crear variables las privadas edad, nombre y telefono de la clase Persona.

        Crear gets y sets de cada propiedad.

        Crear un objeto persona en el main.

        Utiliza los gets y sets para darle valores a las propiedades edad, nombre y telefono, por último muéstralas por consola. */