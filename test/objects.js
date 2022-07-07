function createObject() {
    let casa = {
      secondFloor: false,
      doors: 4,
      roomsQuantity: 2,
      bathQuantity: 1,
      parking_lot: 1,  // se puede escribir como parkingLot igualmente
      cellars: 1,  //bodega
      windows: 2,
    };
    casa.name = "Casa";
    casa.address = "Av. Brasil";
    casa.number = 123;
    casa.neighborhood = "Centro";
    casa.city = "Santiago";
    casa.state = "Santiago";
    casa.zip = "12345";
    casa.country = "Chile";
    casa.phone = "123456789";
    casa.rooms = [
        {
            name: "Cuarto 1",
            area: 20,
        },
        {
            name: "Cuarto 2",
            area: 30,
        },
        {
            name: "Baño",
            area: 10,
        },
        {
            name: "Cocina",
            area: 15,
        }
    ];

    /* 
      assignValuesToObject(casa);
    */
    /* console.log(casa.rooms); */
    /* 
    iterateforKeysObject(casa); 
    */
   /* 
    iterateforValuesObject(casa); 
    */
   /* 
    destructuringObjects(casa); 
    */
/*     
*/    
    destructuringArrays([casa.name, casa.address, casa.number, casa.neighborhood, casa.city, casa.state, casa.zip, casa.country, casa.phone, casa.rooms]);
    return;    
}

function iterateforKeysObject(obj){
    /* for (let key in obj) {
        console.log("usando for: ", key, obj[key]);
    } */
    // otra forma de iterar sobre keys
    /* Object.keys(obj).forEach((value) => {
        console.log("usando object keys: ",value, obj[value]);
    }); */
}

function iterateforValuesObject(obj){

    Object.values(obj).forEach((value) => {
        console.log("usando values: ",value);
    }
    );
}

function destructuringObjects (obj) {
    let { name, address, number, neighborhood, city, state, zip, country, phone, rooms } = obj;
    console.log(name, address, number, neighborhood, city, state, zip, country, phone, rooms);
}

let assignValuesToObject = (obj) => {
    obj.name = "Casa vieja";
    obj.address = "Av. independencia";
    obj.number = "222";
    obj.neighborhood = "Conchali";
    obj.zip = "133333";
    obj.phone = "12349";
    let namePropperty = obj.name; // namePropperty tiene el valor de casa vieja
    let addressPropperty = obj.address;
    let numberPropperty = obj.number;
    let neighborhoodPropperty = obj.neighborhood;
    let zipPropperty = obj.zip;
    let phonePropperty = obj.phone;

    console.log(namePropperty, addressPropperty, numberPropperty, neighborhoodPropperty, zipPropperty, phonePropperty);
}

let destructuringArrays = (arr) => {
    let [ name, address, number, neighborhood, city, state, zip, country, phone, rooms ] = arr;

    console.log(name, address, number, neighborhood, city, state, zip, country, phone, rooms);
}

/* let agregarValor = (key, value, obj) => {
  obj[key] = value;
  return obj;
}

let objeto = {
  saludo: "Hola",
  contenido: "como estás"
}

console.log(objeto);

agregarValor("contenido", "adios", objeto);

console.log(objeto); */

class Structure {
    constructor(name, address, number, neighborhood, city, state, zip, country, phone, rooms) {
        this.name = name;
        this.address = address;
        this.number = number;
        this.neighborhood = neighborhood;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.country = country;
        this.phone = phone;
        this.rooms = rooms;
    }

    get parameters () {
        return {
            name: this.name,
            address: this.address,
            number: this.number,
            neighborhood: this.neighborhood,
            city: this.city,
            state: this.state,
            zip: this.zip,
            country: this.country,
            phone: this.phone,
            rooms: this.rooms
        }
    }

    set parameters (parameters) {

        for (let parameter in parameters) {
            this[parameter] = parameters[parameter];
        }
    }

    calculateTotalArea () {
        let totalArea = 0;
        for (let room of this.rooms) {
            totalArea += room.area;
        }

        return `totalArea: ${totalArea} m2`;
    }

    verifyPhoneNumber () {
      if (this.phone.length === 8) {
        return true;
      } else {
        return false;
      }
    }
}

class Building extends Structure {
    constructor(name, address, number, neighborhood, city, state, zip, country, phone, rooms, population, floors, areaCommonSpaces) {
        super(name, address, number, neighborhood, city, state, zip, country, phone, rooms);
        this.population = population;
        this.floors = floors;
        this.areaCommonSpaces = areaCommonSpaces;
    }

    get parameters () {
      return {
        ...super.parameters,
        population: this.population,
        floors: this.floors,
        areaCommonSpaces: this.areaCommonSpaces,
      }
    }

    calculateTotalArea () {
        let totalArea = 0;
        for (let room of this.rooms) {
            totalArea += room.area;
        }
        return `totalArea: ${totalArea + this.areaCommonSpaces} m2`;
    }

    calculateTotalPopulation () {
        return this.population * this.floors;
    }
}

/* 
let Estructura = new Structure("Casa", "Av. Brasil", "123", "Centro", "Santiago", "Santiago", "12345", "Chile", "12345678", [
    {
        name: "Cuarto 1",
        area: 20,
    },
    {
        name: "Cuarto 2",
        area: 30,
    },
    {
        name: "Baño",
        area: 10,
    },
    {
        name: "Cocina",
        area: 15,
    }
]);

console.log(Estructura.parameters)

console.log(Estructura.parameters);

Estructura.parameters = {
    name: "Casa Cambiada",
    address: "Av. Irarrazaval",
    number: "999",
    neighborhood: "Ñuñoa",
}

console.log(Estructura.parameters);
console.log(Estructura.calculateTotalArea());
console.log(Estructura.verifyPhoneNumber());
 */
/* 
*/
/* createObject(); 
*/
/* let Edificio = new Building("Edificio", "Av. Irarrazaval", "999", "Ñuñoa", "Santiago", "Santiago", "12345", "Chile", "123456789", [
    {
        name: "piso 1",
        area: 2000,
    },
    {
        name: "piso 2",
        area: 3000,
    },
    {
        name: "piso 3",
        area: 1000,
    }
  ], 100, 10, 250);

//console.log(Edificio.parameters);

Edificio.parameters = {
    name: "Edificio Cambiado",
} 

console.log(Edificio.parameters);

console.log(Edificio.calculateTotalArea()); */
