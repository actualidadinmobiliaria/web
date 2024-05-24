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
    anchor.textContent = enlace.texto;
    contenedorEnlace.appendChild(imagen);
    contenedorEnlace.appendChild(anchor);
    bloque.appendChild(contenedorEnlace);
  });
}

// Ejemplo de enlaces con vista previa
var enlacesArriendo = [
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
