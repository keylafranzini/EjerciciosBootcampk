class Persona{
    constructor(name, age){
        this._name = name;
        this.age = age;
    }
}

class Dependiente {
    vender(){
        console.log('Vendido!!');
    }
}

class Vigilante{
    echar(){
        console.log('Estas echado!');
    }

}


class Empleado extends persona {
    constructor(name, age, tipe){
        super(name, age);
        this.establecerTipo(tipo);
    }

    establecerTipo(){
        if (tipo === 'dependiente'){
        this.accion = new Dependiente();
    };
        if (tipo === 'vigilante'){
        this.accion = new Vigilante();
    };

    }

}

class Cliente extends persona {

}

class Tienda {

}