/**
 * ============================================
 *  CONFIGURACION CENTRAL DE LA INVITACION
 * ============================================
 *  Edita este archivo para cambiar colores,
 *  nombres, fechas, ubicaciones, etc.
 */

// --- PALETA DE COLORES ---
// Cambia estos valores para modificar toda la paleta de la invitacion
export const colors = {
  primary: "#B8860B",       // Dorado oscuro - color principal
  primaryLight: "#D4A843",  // Dorado claro - acentos
  primaryDark: "#8B6914",   // Dorado muy oscuro - bordes
  accent: "#C9A84C",        // Ambar dorado - botones y destacados
  bgWarm: "#FDF8EF",        // Fondo crema calido
  bgOverlay: "rgba(139, 105, 20, 0.15)", // Overlay dorado sutil
  textDark: "#2C2416",      // Texto oscuro con tono calido
  textMuted: "#6B5D4D",     // Texto secundario
  white: "#FFFFFF",
  border: "#C9A84C",        // Bordes decorativos
};

// --- DATOS DE LOS NOVIOS ---
export const couple = {
  groomName: "Juan",
  brideName: "Maricruz",
  groomFullName: "Juan Nombre Apellido Apellido",
  brideFullName: "Maricruz Nombre Apellido Apellido",
  initials: "J & M",
};

// --- FECHA DE LA BODA ---
export const weddingDate = {
  date: new Date(2026, 5, 5, 20, 0, 0), // Mes 5 = Junio (0-indexed)
  displayDate: "05 de Junio de 2026",
  displayDay: "Viernes",
  displayTime: "8:00 PM",
  shortDate: "05 \u2022 06 \u2022 2026",
};

// --- PADRES ---
export const parents = {
  bride: {
    label: "Padres de la novia",
    mother: "Nombre Apellido Apellido",
    father: "Nombre Apellido Apellido",
  },
  groom: {
    label: "Padres del novio",
    mother: "Nombre Apellido Apellido",
    father: "Nombre Apellido Apellido",
  },
};

// --- PADRINOS ---
export const godparents = [
  {
    title: "Velacion",
    names: ["Nombre Apellido", "Nombre Apellido"],
  },
  {
    title: "Lazo",
    names: ["Nombre Apellido", "Nombre Apellido"],
  },
  {
    title: "Arras",
    names: ["Nombre Apellido", "Nombre Apellido"],
  },
  {
    title: "Anillos",
    names: ["Nombre Apellido", "Nombre Apellido"],
  },
];

// --- ITINERARIO ---
export const itinerary = [
  {
    title: "Ceremonia Religiosa",
    time: "6:00 PM",
    icon: "https://cdn.lordicon.com/rlngnytn.json",
  },
  {
    title: "Recepcion",
    time: "8:00 PM",
    icon: "https://cdn.lordicon.com/wxnxiano.json",
  },
  {
    title: "Cena",
    time: "9:00 PM",
    icon: "https://cdn.lordicon.com/txqkxliv.json",
  },
  {
    title: "Fiesta",
    time: "10:00 PM",
    icon: "https://cdn.lordicon.com/ohcuigqh.json",
  },
];

// --- UBICACIONES ---
export const locations = {
  ceremony: {
    name: "Iglesia Placeholder",
    address: "Direccion de la iglesia, Ciudad, Estado",
    time: "6:00 PM",
    mapUrl: "#",
    imageUrl: "/img/placeholder-church.jpg",
  },
  reception: {
    name: "Salon Placeholder",
    address: "Direccion del salon, Ciudad, Estado",
    time: "8:00 PM",
    mapUrl: "#",
    imageUrl: "/img/placeholder-salon.jpg",
  },
};

// --- CODIGO DE VESTIMENTA ---
export const dressCode = {
  type: "Formal",
  restrictions: ["Mujeres: No blanco ni beige", "Respetuosamente NO NINOS"],
};

// --- REGALO / TRANSFERENCIA ---
export const giftInfo = {
  title: "Si deseas hacernos un obsequio",
  message:
    "Tu presencia es nuestro mejor regalo, pero si deseas tener un detalle con nosotros, puedes hacerlo mediante transferencia electronica o en efectivo el dia del evento.",
  showTransfer: true,
  bankName: "Banco Placeholder",
  accountHolder: "Nombre del Titular",
  clabe: "0000 0000 0000 000000",
  cardNumber: "0000 0000 0000 0000",
};

// --- META TAGS / SEO ---
export const meta = {
  title: `Nuestra Boda | ${couple.groomName} & ${couple.brideName}`,
  description: `Invitacion de boda de ${couple.groomName} y ${couple.brideName}`,
  ogImage: "/img/IMG_1661.webp",
  siteUrl: "https://invitacion-juan-maricruz.vercel.app",
};
