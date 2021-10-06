let sistemaSolar = [
  {
    nombre: "mercurio",
    color: "gris",
    fondo: "grey",
    temperatura: 350,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/1024px-Mercury_in_color_-_Prockter07_centered.jpg",
  },
  {
    nombre: "venus",
    color: "blanco",
    fondo: "white",
    temperatura: 460,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/220px-Venus-real_color.jpg",
  },
  {
    nombre: "tierra",
    color: "morado",
    fondo: "purple",
    temperatura: 14,
    imagen:
      "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5a0ab2a75bafe87f4d3f9a63/acaba-tiempo_0.jpg",
  },
  {
    nombre: "marte",
    color: "rojo",
    fondo: "red",
    temperatura: -46,
    imagen:
      "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365b6b34099b0279c8fb2e/slide-marte.jpg",
  },
  {
    nombre: "jupiter",
    color: "marrón",
    fondo: "brown",
    temperatura: -121,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jupiter_by_Cassini-Huygens.jpg/280px-Jupiter_by_Cassini-Huygens.jpg",
  },
  {
    nombre: "saturno",
    color: "amarillo",
    fondo: "yellow",
    temperatura: -130,
    imagen:
      "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/558d2b15010e26221b57df75/saturno.jpg",
  },
  {
    nombre: "urano",
    color: "azul",
    fondo: "blue",
    temperatura: -205,
    imagen: "http://www.manzanares.es/v2/sites/paseo/img/urano/urano1.jpg",
  },
  {
    nombre: "neptuno",
    color: "azul",
    fondo: "blue",
    temperatura: -220,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/280px-Neptune_Full.jpg",
  },
  {
    nombre: "plutón",
    color: "blanco",
    fondo: "white",
    temperatura: -229,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Nh-pluto-in-true-color_2x_JPEG.jpg/1200px-Nh-pluto-in-true-color_2x_JPEG.jpg",
  },
];



function planetas(){
  let planet1 = document.getElementById("planet1").value;
  let planet2 = document.getElementById("planet2").value;
  let planet3 = document.getElementById("planet3").value;

  if(planet1===planet2||planet2===planet3||planet1===planet3){
    window.alert("Error, alguno de los planetas es igual")
    return
  }else{
    if(existe(planet1)&&existe(planet2)&&existe(planet3)){
      for (let i = 0; i<sistemaSolar.length; i++) {
        if(planet1===sistemaSolar[i].nombre||planet2===sistemaSolar[i].nombre||planet3===sistemaSolar[i].nombre){
          mostrar(sistemaSolar[i],i)
        }
        
      }

    }else{
      window.alert("Error, alguno de los planetas es igual")
      return
    } 
}
}

function existe(planeta){
  for (i = 0; i< sistemaSolar.length; i++) {
    if(planeta===sistemaSolar[i].nombre){
      return true
    }
  }
return false
}

function mostrar(planeta,posicion){
  document.getElementById("main").innerHTML+=`
  <div id="${planeta.nombre}">
  <h2>${planeta.nombre}</h2>
  <img src=${planeta.imagen}  alt=${planeta.nombre}/>
  <p>Color: ${planeta.color}</p>
  <p>Temperatura: ${planeta.temperatura}</p>
  <button onclick="cambiaColor('${planeta.nombre}','${posicion}')">Cambia el color</button>
  </div>`
}

function cambiaColor(planeta,posicion){
  document.getElementById(planeta).style.backgroundColor=sistemaSolar[posicion].fondo
}