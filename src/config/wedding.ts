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
  primary: "#B8860B", // Dorado oscuro - color principal
  primaryLight: "#D4A843", // Dorado claro - acentos
  primaryDark: "#8B6914", // Dorado muy oscuro - bordes
  accent: "#C9A84C", // Ambar dorado - botones y destacados
  bgWarm: "#FDF8EF", // Fondo crema calido
  bgOverlay: "rgba(139, 105, 20, 0.15)", // Overlay dorado sutil
  textDark: "#2C2416", // Texto oscuro con tono calido
  textMuted: "#6B5D4D", // Texto secundario
  white: "#FFFFFF",
  border: "#C9A84C", // Bordes decorativos
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
    mother: "Maria Adela Cota Leyva",
    father: "Moises Gutierrez Valdez",
  },
  groom: {
    label: "Padres del novio",
    mother: "Luz Maria Sarmiento Luna",
    father: "Roberto Galaviz Pacheco",
  },
};

// --- PADRINOS ---
// El campo `icon` es un SVG inline que se renderiza en el carrusel.
export const godparents = [
  {
    title: "Honor",
    names: ["Griselda Medina", "Moises Cossio"],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8l4 4 5-7 5 7 4-4-2 12H5z"/><path d="M5 20h14"/><circle cx="12" cy="6" r="0.6" fill="currentColor"/><circle cx="3" cy="8" r="0.6" fill="currentColor"/><circle cx="21" cy="8" r="0.6" fill="currentColor"/></svg>`,
  },
  {
    title: "Anillos",
    names: ["Juan Carlos Apodaca", "Lizeth Toala"],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="9" cy="15" r="5.5"/><circle cx="15" cy="15" r="5.5"/><path d="M9 4l1.5 2h3L15 4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
  {
    title: "Biblia",
    names: ["Luis Karim Malvais", "Georgina de Malvais"],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h12a2 2 0 0 1 2 2v14H7a2 2 0 0 0-2 2V4z"/><path d="M5 20a2 2 0 0 1 2-2h12"/><path d="M12 8v6M9.5 11h5"/></svg>`,
  },
  {
    title: "Lazo",
    names: ["Vladimir Ilich", "Tanehi Rodriguez"],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12c0-2.5 1.8-5 4.5-5S12 9.5 12 12s-1.8 5-4.5 5S3 14.5 3 12z"/><path d="M21 12c0-2.5-1.8-5-4.5-5S12 9.5 12 12s1.8 5 4.5 5S21 14.5 21 12z"/></svg>`,
  },
  {
    title: "Arras",
    names: ["Adrian Valdez", "Isaura Soto"],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="10" r="5"/><circle cx="15" cy="15" r="5"/><path d="M7.5 10h3M9 8.5v3"/><path d="M13.5 15h3M15 13.5v3"/></svg>`,
  },
  {
    title: "Primicias",
    names: ["Juan Contreras", "Karina Malvais"],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V5"/><path d="M12 9c-1.6-1.6-3.2-1.6-3.2-3.2 1.6 0 3.2 0 3.2 3.2z"/><path d="M12 9c1.6-1.6 3.2-1.6 3.2-3.2-1.6 0-3.2 0-3.2 3.2z"/><path d="M12 13c-1.6-1.6-3.2-1.6-3.2-3.2 1.6 0 3.2 0 3.2 3.2z"/><path d="M12 13c1.6-1.6 3.2-1.6 3.2-3.2-1.6 0-3.2 0-3.2 3.2z"/><path d="M12 17c-1.6-1.6-3.2-1.6-3.2-3.2 1.6 0 3.2 0 3.2 3.2z"/><path d="M12 17c1.6-1.6 3.2-1.6 3.2-3.2-1.6 0-3.2 0-3.2 3.2z"/></svg>`,
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
  ogImage:
    "https://invitacion-jaun-maricruz-git-main-kevinaclus-projects.vercel.app/img/og-image.png",
  siteUrl: "https://invitacion-jaun-maricruz.vercel.app",
};
