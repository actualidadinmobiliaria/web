// Función para agregar enlaces con vista previa
function agregarEnlacesConVistaPrevia(idBloque, enlaces) {
  var bloque = document.getElementById(idBloque);
  enlaces.forEach(function (enlace) {
    var contenedorEnlace = document.createElement("div");
    contenedorEnlace.className = "contenedor-enlace";
    var imagen = document.createElement("img");
    imagen.src = enlace.imagen; // La URL de la imagen de vista previa
    imagen.alt = "Vista previa";
    var anchor = document.createElement("a");
    anchor.href = enlace.url;
    anchor.target = "_blank"; // Esto hará que el enlace se abra en una nueva pestaña
    anchor.textContent = enlace.texto;
    contenedorEnlace.appendChild(imagen);
    contenedorEnlace.appendChild(anchor);
    bloque.appendChild(contenedorEnlace);
  });
}


// Función para agregar enlaces con vista previa
function agregarEnlacesConVistaPrevia(idBloque, enlaces) {
  var bloque = document.getElementById(idBloque);
  enlaces.forEach(function (enlace) {
    var contenedorEnlace = document.createElement("div");
    contenedorEnlace.className = "contenedor-enlace";

    // Crear el elemento anchor (enlace)
    var anchor = document.createElement("a");
    anchor.href = enlace.url; // El URL al que debe dirigir el enlace
    anchor.target = "_blank"; // Esto hará que el enlace se abra en una nueva pestaña

    // Crear el elemento imagen y añadirlo como hijo del elemento anchor
    var imagen = document.createElement("img");
    imagen.src = enlace.imagen; // La URL de la imagen de vista previa
    imagen.alt = "Vista previa";
    anchor.appendChild(imagen); // Añadir la imagen al anchor

    // Opcional: Si también quieres que el texto sea clickeable y dirija al mismo URL
    var texto = document.createTextNode(enlace.texto);
    anchor.appendChild(texto); // Añadir el texto al anchor

    contenedorEnlace.appendChild(anchor); // Añadir el anchor al contenedor
    bloque.appendChild(contenedorEnlace); // Añadir el contenedor al bloque
  });
}


// Ejemplo de enlaces con vista previa
var enlacesArriendo = [
  {
    texto:
      "Arrendo apartamento en barrio la sombrilla, cuenta con habitación amplia, baño, lavadero, cocina, espacio para nevera y lavadora, patio para estender ropa, incluye servicios de agua y energía.",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  }, 
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },

  // Más enlaces...
];
// Repetir para enlacesVenta y enlacesAnticresis...

var enlacesVenta = [
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },

  // Más enlaces...
];

var enlacesAnticresis = [
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },
  {
    texto: "Inmueble 1",
    url: "https://web.facebook.com/groups/679651734136035?locale=es_LA",
    imagen: "documentos/Captura1.JPG",
  },

  // Más enlaces...
];

// Inicializar los enlaces en los bloques
agregarEnlacesConVistaPrevia("arriendo", enlacesArriendo);
// Repetir para 'venta' y 'anticresis'...
agregarEnlacesConVistaPrevia("venta", enlacesVenta);
agregarEnlacesConVistaPrevia("anticresis", enlacesAnticresis);

// Obtén el elemento del icono y los enlaces del menú
const menuIcono = document.querySelector(".menu-icono");
const menuEnlaces = document.querySelector(".menu-enlaces");

// Agrega un evento de clic al icono
menuIcono.addEventListener("click", () => {
  menuEnlaces.classList.toggle("active");
});
