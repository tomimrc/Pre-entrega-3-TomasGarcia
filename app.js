
let cardExistente
let totalProducto
let reducir = 0
let zapatillaEnJson = ""

class Zapatilla{
    constructor(){
        this.listaZapatillas = []
    }

    agregar(){
        listaZapatillas.forEach(element => {
            this.listaZapatillas.push(element)
        });

    }

    mostrarEnDom(){
        this.listaZapatillas.forEach( element =>{
            mainEnDom.innerHTML += `
            <div class="card" id="${element.id}">
            <img src="${element.img}" alt="Zapatilla ${element.id}">
            <h2>${element.nombre}</h2>
            <div class ="textos">
            <p>Precio $${element.precio}</p>
            <button class="boton" id="boton${element.id}">Agregar</button>
            </div>
            </div>`
            
        })
    }


}


class Carrito {
    constructor() {
    this.listaCarrito = [];
}



agregarYMostrarCarrito() {
    const listaZapatillas = zapatillas.listaZapatillas;
    listaZapatillas.forEach((element) => {
    const boton = document.getElementById(`boton${element.id}`);
    boton.addEventListener("click", () => {
        this.listaCarrito.push(element);
        this.pasarAJson()
        this.listaCarrito.forEach((element) => {
            
        cardExistente = document.getElementById(`carrito${element.id}`);
        });
        if (cardExistente) {
            element.k++
        const cantidad = cardExistente.querySelector(".cantidad");
        cantidad.innerText = `Cantidad: ${element.k}`
        } else {
        divCarrito.innerHTML += `
                        
                                <div class="cardCarrito" id="carrito${element.id}">
                                <img src="${element.img}" alt="Zapatilla ${element.id}">
                                <h2>${element.nombre}</h2>
                                <div class ="textos">
                                <p>Precio $${element.precio}</p>
                                <p class ="cantidad" id="pCard${element.id}">Cantidad: ${element.k}</p>
                                </div>
                                </div>
                                `;
        }
    });
    });
    }

    pasarAJson(){
    
        zapatillaEnJson = JSON.stringify(this.listaCarrito) + zapatillaEnJson
            localStorage.setItem("zapatillas",zapatillaEnJson)

    }

    obtenerDeJson(){
        let enParse = []
        let getItem = localStorage.getItem("zapatillas")
        enParse = JSON.parse(getItem)
        if(enParse.length == 0){
            console.log("vacio")
        }else{
            enParse.forEach(element =>{
                divCarrito.innerHTML += `
                        
                        <div class="cardCarrito" id="carrito${element.id}">
                        <img src="${element.img}" alt="Zapatilla ${element.id}">
                        <h2>${element.nombre}</h2>
                        <div class ="textos">
                        <p>Precio $${element.precio}</p>
                        <p class ="cantidad" id="pCard${element.id}">Cantidad: ${element.k}</p>
                        </div>
                        </div>
                        `;
            })
        }
        
            // if (getItem.length == 0){
            //     for (let index = 0; index < getItem.length; index++) {
            //         const element = array[index];
            //         console.log(element)
                    
            //     }
            //     let enParse = JSON.parse(getItem) 
            //     divCarrito.innerHTML = `
                        
            //                     <div class="cardCarrito" id="carrito${enParse.id}">
            //                     <img src="${enParse.img}" alt="Zapatilla ${enParse.id}">
            //                     <h2>${enParse.nombre}</h2>
            //                     <div class ="textos">
            //                     <p>Precio $${enParse.precio}</p>
            //                     <p class ="cantidad" id="pCard${enParse.id}">Cantidad: ${enParse.k}</p>
            //                     </div>
            //                     </div>
            //                     `;
            // }else{console.log("hola")}

    }

totalCarrito(){
    comprar.addEventListener("click",() =>{
        if(this.listaCarrito.length == 0){
            total.innerText = "Total: " + "0. El carrito esta vacio"  
        }else{
                reducir = this.listaCarrito.reduce((acc,item) =>{
                return acc += item.precio
            }, 0)
            console.log(reducir)
            let total = document.getElementById("total")
            total.innerText = "Total: " + reducir 
        } 
    }) 
}

eliminarDeCarrito(){
    vaciar.addEventListener("click",()=>{
        this.listaCarrito.forEach(element =>{
            element.k = 1 
        })
        this.listaCarrito = []
        divCarrito.innerHTML = ""
        total.innerText = "Total: " 
        localStorage.clear()
        
    })
}
}



const listaZapatillas = [
    {id:1,nombre:"Superstar",precio:10000,img:"https://images.pexels.com/photos/10547804/pexels-photo-10547804.jpeg?auto=compress&cs=tinysrgb&w=400",k:1},
    {id:2,nombre:"Oldschool",precio:15000,img:"https://images.pexels.com/photos/8609267/pexels-photo-8609267.jpeg?auto=compress&cs=tinysrgb&w=400",k:1},
    {id:3,nombre:"Superboost",precio:5000,img:"https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg?auto=compress&cs=tinysrgb&w=1600",k:1},
    {id:4,nombre:"Airmax",precio:7500,img:"https://images.pexels.com/photos/6295121/pexels-photo-6295121.jpeg?auto=compress&cs=tinysrgb&w=400",k:1},
    {id:5,nombre:"Airforce1",precio:12500,img:"https://images.pexels.com/photos/3261068/pexels-photo-3261068.jpeg?auto=compress&cs=tinysrgb&w=400",k:1},
    {id:6,nombre:"Yeezy",precio:20000,img:"https://images.pexels.com/photos/5066944/pexels-photo-5066944.jpeg?auto=compress&cs=tinysrgb&w=400",k:1}]

    let mainEnDom = document.getElementById("main")
    let divCarrito = document.getElementById("carrito")
    let divComprar = document.getElementById("divComprar")
    let comprar = document.getElementById("comprar")
    const vaciar = document.getElementById("vaciar")
    
let zapatillas = new Zapatilla()
zapatillas.agregar()
zapatillas.mostrarEnDom()

let carritoController = new Carrito()

carritoController.agregarYMostrarCarrito()
carritoController.totalCarrito()
carritoController.eliminarDeCarrito()
carritoController.obtenerDeJson()



