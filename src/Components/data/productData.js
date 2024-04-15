import HyperLi from "../images/HyperLi.jpg";
import LiesP from "../images/LiesP.jpg";
import Persona3 from "../images/Persona_3.jpg";
import ScrollsOn from "../images/Scrolls.jpg";
import GuiltyGear from "../images/Guilty_Gear.jpg";
import HellDivers from "../images/HellDivers.jpg";
import MW3 from "../images/MW3.jpg"
import RiskRa from '../images/RiskRain.jpg'

/* Plantilla de productos
 {
   name: 
   price: 
   image: 
   category: 
   seccion: 
   cantidad: 
 },
*/

const products = [
  {
    name: "ㅤHellDivers 2",
    price: "635 MXN",
    image: HellDivers,
    category: "Novedades",
    det:
      "HELLDIVERS™ es un intenso juego de disparos cooperativo y de doble joystick de los creadores de Magicka. Como parte de una unidad selecta llamada HELLDIVERS, los jugadores deben trabajar juntos para proteger SUPER EARTH y derrotar a los enemigos de la humanidad en una intensa guerra intergaláctica.",
      prices: {
        Global: "Precio: $635",
        LATAM: "Precio: 500",
        Turkey: "Precio: 340",
        Argentina: "Precio: 290"
      }
  },
  {
    name: "Guilty Gear Strive",
    price: "867 MXN",
    image: GuiltyGear,
    category: "Novedades",
    det:
      "Después de derrotar la amenaza conocida como Voluntad Universal , Sol Badguy disfrutó de un breve momento de paz... Hasta que escuchó la impactante noticia. Asuka R. Kreutz, conocido como Ese hombre que dejó su huella como el peor criminal de toda la historia al crear Gears e iniciar las Cruzadas , se rindió al gobierno de Estados Unidos.",
      prices: {
        Global: "Precio: $867",
        LATAM: "Precio: $675",
        Turkey: "Precio: $304",
        Argentina: "Precio: $422"
      },
      Fav : "Si",
  },
  {
    name: "Persona 3 Reload",
    price: "1300 MXN",
    image: Persona3,
    category: "Novedades",
    det:
      "Ponte en la piel de un estudiante recién llegado que se ve arrojado a un destino inesperado cuando entra en la hora escondida entre un día y el siguiente. Despierta un increíble poder y persigue los misterios de la Hora Oscura, lucha por tus amigos y deja huella en su memoria. Remake de Persona 3 (2006).",
      prices: {
        Global: "Precio: $1300",
        LATAM: "Precio: $1300",
        Turkey: "Precio: $750",
        Argentina: "Precio: $900"
      },
      Fav : "Si",
  },
  {
    name: "Modern Warfare III",
    price: "1700 MXN",
    image: MW3,
    category: "Novedades",
    det:
      "Call of Duty: Modern Warfare III (abreviado COD: MW III) es un videojuego de disparos en primera persona desarrollado por Infinity Ward y Sledgehammer Games y publicado por Activision",
      prices: {
        Global: "Precio: $1700",
        LATAM: "Precio: $1400",
        Turkey: "Precio: $875",
        Argentina: "Precio: $979"
      },
      Carrito : "Si",
  },

  {
    name: "Hyper Light Drifter",
    price: " ̶1̶7̶9̶ $71.99 MNX",
    image: HyperLi,
    category: "Ofertas",
    det:"Explora un mundo hermoso, amplio y arruinado, plagado de peligros y tecnologías perdidas. Los ecos de un pasado oscuro y violento resuenan en una tierra salvaje repleta de tesoros y sangre. Hyper Light Drifter es un juego de rol de aventuras y acción que emula a los mejores clásicos de 16 bits con mecánicas modernizadas y diseños a mayor escala.",
    prices: {
      Global: "Precio: 1̶7̶9̶ $71.99",
      LATAM: "Precio: $105",
      Turkey: "Precio: $60",
      Argentina: "Precio: $70"
    }
  },
  {
    name: "Lies of P",
    price: "$840 MXN",
    image: LiesP,
    category: "Ofertas",
    det:"Escenario Inspirado en la novela de Carlo Collodi Las aventuras de Pinocho, Lies of P cuenta la historia de Pinocho, un títere robótico que se diferencia de otros títeres en su capacidad de mentir, que juega un papel en las decisiones importantes de la historia.",
    prices: {
      Global: "Precio: 1̶2̶0̶0̶ $840",
      LATAM: "Precio: $500",
      Turkey: "Precio: $300",
      Argentina: "Precio: $400"
    },
    Carrito : "Si",
  },
  
  {
    name: "The Elder Scrolls Online",
    price: "3̶5̶9̶ $89.75 MXN",
    image: ScrollsOn,
    category: "Ofertas",
    det:"Explora un mundo de fantasía online vasto y creciente construido sobre el folclore y los mitos de la serie premiada The Elder Scrolls. Únete a más de 22 millones de jugadores en el premiado RPG online multijugador y experimenta una historia en constante crecimiento en un mundo persistente de Elder Scrolls.",
    prices: {
      Global: "Precio: 3̶5̶9̶ $89.75",
      LATAM: "Precio: $275",
      Turkey: "Precio: $150",
      Argentina: "Precio: $200"
    }
  },

  {
    name: "ㅤㅤRisk of Rainㅤㅤㅤ",
    price: " ̶2̶3̶3̶.̶9̶9̶  $116.99 MXN",
    image: RiskRa,
    category: "Ofertas",
    det:
      "Lucha contra hordas de monstruos enloquecidos junto a tus amigos o en solitario para lograr escapar de un planeta alienígena sumido en el caos. Combina el botín de maneras asombrosas y domina cada personaje hasta encarnar la destrucción que tanto te aterraba tras tu primer aterrizaje forzoso.",
      prices: {
        Global: "Precio: 2̶3̶3̶.̶9̶9̶ $116.99",
        LATAM: "Precio: $150",
        Turkey: "Precio: $80",
        Argentina: "Precio: $90"
      }
  },
  
  
 

];

export default products; 
