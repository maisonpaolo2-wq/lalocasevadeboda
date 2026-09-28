// PENDIENTE DE CONFIRMAR CON LA CLIENTA: dominio, email y WhatsApp son provisionales.
export const siteConfig = {
  name: 'La Loca Se Va De Boda',
  planner: 'La Loca',
  domain: 'www.lalocasevadeboda.com',
  email: 'hola@lalocasevadeboda.com',
  whatsapp: '34600000000',
  instagram: '@lalocasevadeboda',
  locations: ['Barcelona', 'Maresme', 'Costa Brava', 'Penedès', 'Toda Catalunya'],
  tagline: 'Sal de lo tradicional',
  bio: 'Soy wedding planner en Barcelona, formada en Entre Tonos Wedding Plan Academy, y tengo una manía: que ninguna boda se parezca a otra. Me encantan los protocolos cuando sirven y me encanta saltármelos cuando no. Organizo bodas para parejas que quieren emocionarse, reírse y bailar hasta que cierren, sin renunciar a que todo esté cuidado al milímetro. Detrás de cada locura hay un Excel, una lista de proveedores de confianza y muchas horas de escucha.',
  bioShort:
    'Organización de bodas en Barcelona para parejas que no quieren una boda más. Mucho corazón, mucho detalle y la dosis justa de locura.',
  quote: 'Una boda perfecta se olvida. Una boda vuestra, con su punto de locura, no.',
}

export const services: Array<{
  title: string
  slug: string
  description: string
  longDescription: string
  image: string
  includes: string[]
}> = [
  {
    title: 'Organización integral',
    slug: 'organizacion-integral',
    description:
      'De la primera idea al último baile. Busco el espacio, los proveedores y el concepto, y tú solo decides.',
    longDescription:
      'Empezamos con una charla larga sobre vosotros: cómo os conocisteis, qué os hace reír, qué boda no queréis por nada del mundo. Con eso busco espacio, cierro presupuesto y propongo un equipo de proveedores de confianza. Llevo el calendario de pagos, las reuniones, las pruebas y todo el papeleo que nadie quiere hacer. Os mando un resumen claro cada mes para que siempre sepáis en qué punto estamos, sin agobios ni sorpresas.',
    image: '/photos/pareja-bn-telas.webp',
    includes: [
      'Búsqueda de espacio y visitas acompañadas',
      'Presupuesto y calendario de pagos controlados',
      'Selección y negociación con proveedores',
      'Coordinación completa del día B',
    ],
  },
  {
    title: 'Diseño y styling',
    slug: 'diseno-styling',
    description:
      'Un concepto con carácter, de las flores a la papelería. Nada de plantillas, todo nace de vuestra historia.',
    longDescription:
      'Cada boda tiene un hilo conductor. A veces es una rosa roja, a veces un color, una canción o un viaje. Construyo un moodboard a partir de lo que sois y lo traslado a flores, mantelería, iluminación, papelería y rincones para fotos. Trabajo con floristas y artesanos locales de Barcelona y reviso cada detalle en persona el día del montaje. El resultado es una boda que se reconoce en las fotos sin necesidad de ver vuestras caras.',
    image: '/photos/novia-rostro-rosas.webp',
    includes: [
      'Moodboard y concepto visual propio',
      'Diseño floral y decoración de espacios',
      'Papelería, seating y señalética a juego',
      'Supervisión del montaje en persona',
    ],
  },
  {
    title: 'Coordinación del día B',
    slug: 'coordinacion-dia-b',
    description:
      'Lo habéis organizado vosotros y queréis disfrutarlo. Yo tomo el mando dos meses antes y el día de la boda.',
    longDescription:
      'Si ya tenéis espacio y proveedores, entro unas ocho semanas antes para revisar contratos, horarios y todo lo que puede fallar. Preparo un minuto a minuto, hablo con cada proveedor y hago una visita técnica al espacio. El día de la boda estoy desde el montaje hasta el cierre, resolviendo lo que haga falta para que vosotros y vuestras familias no tengáis que mirar el reloj ni el móvil.',
    image: '/photos/pareja-bn-baile.webp',
    includes: [
      'Revisión de contratos y proveedores',
      'Minuto a minuto y reunión final',
      'Visita técnica al espacio',
      'Presencia del montaje al cierre',
    ],
  },
  {
    title: 'Despedidas locas',
    slug: 'despedidas',
    description:
      'Despedidas de soltera y soltero con juegos, disfraces y mucho baile. Sin tópicos de siempre, prometido.',
    longDescription:
      'Las despedidas también merecen una buena organización. Diseño planes a medida del grupo: una casa decorada con lazos y collares de flores, juegos pensados para la novia o el novio, merienda, fotógrafa y una fiesta que se recuerda por lo bien que lo pasasteis y no por lo que salió mal. Me ocupo de reservas, horarios y sorpresas para que la amiga organizadora también pueda disfrutar.',
    image: '/photos/despedida-lazo-rosa.webp',
    includes: [
      'Plan a medida según el grupo',
      'Decoración, disfraces y atrezo',
      'Juegos y dinámicas personalizadas',
      'Reservas, horarios y sorpresas cerradas',
    ],
  },
]

export const processSteps: Array<{
  number: number
  title: string
  description: string
}> = [
  {
    number: 1,
    title: 'Un café y muchas preguntas',
    description:
      'Nos vemos en Barcelona o por videollamada. Me contáis vuestra historia, cómo os imagináis el día y qué no queréis bajo ningún concepto.',
  },
  {
    number: 2,
    title: 'La idea loca',
    description:
      'Os presento un concepto con moodboard, espacios posibles y un presupuesto realista. Lo ajustamos hasta que os brillen los ojos.',
  },
  {
    number: 3,
    title: 'Manos a la obra',
    description:
      'Reservo proveedores, llevo pagos y calendario, y os mando un resumen mensual. Vosotros solo acudís a lo divertido: pruebas, catas y flores.',
  },
  {
    number: 4,
    title: 'El gran día',
    description:
      'Llego la primera y me voy la última. Coordino montaje, horarios y proveedores para que solo tengáis que emocionaros y bailar.',
  },
]

export const testimonials: Array<{
  name: string
  date: string
  location: string
  text: string
}> = [
  {
    name: 'Marta y Pol',
    date: 'Junio 2025',
    location: 'Masía en el Penedès',
    text: 'Le dijimos que queríamos una boda roja y en blanco y negro, sin saber muy bien qué significaba. Nos trajo rosas de tallo largo, telas blancas colgando y un fotógrafo que entendió la idea a la primera. Nuestros amigos todavía hablan de la entrada.',
  },
  {
    name: 'Laia Puig',
    date: 'Marzo 2026',
    location: 'Despedida en Gràcia, Barcelona',
    text: 'Organicé la despedida de mi hermana con doce amigas que no se conocían entre ellas. Lazos rosas, collares hawaianos, juegos con churros de piscina y una merienda preciosa. Por primera vez la organizadora también bailó.',
  },
  {
    name: 'Clara y Andreu',
    date: 'Septiembre 2025',
    location: 'Boda en la costa del Maresme',
    text: 'Vivimos en Londres y lo organizamos todo a distancia. Cada mes recibíamos un resumen con pagos, decisiones pendientes y fotos de las pruebas. Llegamos una semana antes y todo estaba donde tenía que estar.',
  },
  {
    name: 'Nuria y Javi',
    date: 'Octubre 2025',
    location: 'Restaurante en el Born, Barcelona',
    text: 'Solo la contratamos para la coordinación del día. Detectó que el horario del catering chocaba con el de los fuegos artificiales y lo arregló dos semanas antes. El día de la boda ni la vimos, que es justo lo que queríamos.',
  },
  {
    name: 'Sara y Bruno',
    date: 'Mayo 2026',
    location: 'Jardín privado en Sant Cugat',
    text: 'Queríamos una boda pequeña, cuarenta personas, sin protocolo. Acabamos con una sobremesa larguísima, un karaoke improvisado y un photocall de rosas que hizo ella misma la noche anterior.',
  },
]

export const photos: Array<{
  src: string
  alt: string
  featured: boolean
  orientation: 'landscape' | 'portrait'
}> = [
  { src: '/photos/novia-jardin-rosa.webp', alt: 'Novia con traje de chaqueta blanco caminando por un patio con una rosa roja de tallo largo en la mano', featured: true, orientation: 'portrait' },
  { src: '/photos/rosa-roja-detalle.webp', alt: 'Detalle de una rosa roja abierta con los pétalos iluminados por luz cálida', featured: true, orientation: 'portrait' },
  { src: '/photos/rosas-rojas-espigas.webp', alt: 'Tres rosas rojas de tallo largo entre espigas doradas', featured: true, orientation: 'portrait' },
  { src: '/photos/pareja-bn-telas.webp', alt: 'Pareja en blanco y negro ante telas blancas drapeadas, ella sentada con una rosa y él de pie con traje oscuro', featured: true, orientation: 'portrait' },
  { src: '/photos/sonrisa-gafas.webp', alt: 'Chica con gafas y jersey azul claro sonriendo durante una celebración', featured: true, orientation: 'portrait' },
  { src: '/photos/novia-rostro-rosas.webp', alt: 'Novia con la mano en la mejilla y dos rosas rojas oscuras junto a su rostro', featured: false, orientation: 'portrait' },
  { src: '/photos/pareja-bn-caricia.webp', alt: 'Retrato en blanco y negro de una pareja abrazada, él con traje oscuro y ella con chaqueta blanca', featured: false, orientation: 'portrait' },
  { src: '/photos/mano-ramo-rosas.webp', alt: 'Mano de la novia sujetando boca abajo un ramo de rosas rojas sobre su traje blanco', featured: false, orientation: 'portrait' },
  { src: '/photos/pareja-bn-baile.webp', alt: 'Novios bailando abrazados en blanco y negro, ella sonríe con una rosa en la mano', featured: false, orientation: 'portrait' },
  { src: '/photos/despedida-lazo-rosa.webp', alt: 'Novia de despedida con gran lazo rosa en el pelo y collar de flores bailando con sus amigas', featured: false, orientation: 'portrait' },
  { src: '/photos/despedida-juego-arco.webp', alt: 'Amigas jugando en una despedida, la novia pasa agachada bajo un arco de churros de piscina', featured: false, orientation: 'portrait' },
]

export const values = [
  {
    title: 'Nada de copiar y pegar',
    text: 'No tengo un paquete cerrado. Cada boda empieza desde cero, con vuestra historia sobre la mesa.',
  },
  {
    title: 'Locura con Excel',
    text: 'Las ideas atrevidas funcionan cuando detrás hay presupuesto, horarios y un plan B para la lluvia.',
  },
  {
    title: 'Proveedores de confianza',
    text: 'Trabajo con floristas, fotógrafos y espacios de Barcelona que conozco en persona y a los que he visto trabajar.',
  },
  {
    title: 'Que lo disfrutéis',
    text: 'Mi trabajo termina bien cuando vosotros no habéis tenido que preocuparos de nada el día de la boda.',
  },
]

export const faqs = [
  {
    q: '¿Con cuánta antelación debemos contactarte?',
    a: 'Para una organización integral lo ideal es entre 10 y 14 meses. Para coordinación del día B, al menos 3 meses antes de la boda.',
  },
  {
    q: '¿Organizas bodas fuera de Barcelona?',
    a: 'Sí. Trabajo en toda Catalunya, sobre todo Maresme, Penedès y Costa Brava. Para otros destinos lo hablamos sin compromiso.',
  },
  {
    q: '¿Una boda diferente es más cara?',
    a: 'No necesariamente. Salir de lo tradicional muchas veces significa quitar cosas que no os importan y poner el dinero donde sí.',
  },
  {
    q: '¿Podéis organizar solo la despedida?',
    a: 'Claro. Las despedidas son un servicio independiente, aunque no vayas a casarte conmigo como planner.',
  },
]

export const coverage = [
  { place: 'Barcelona ciudad', note: 'Sin desplazamiento' },
  { place: 'Maresme y Vallès', note: 'Sin desplazamiento' },
  { place: 'Penedès y Garraf', note: 'Visitas incluidas' },
  { place: 'Costa Brava y Girona', note: 'Visitas incluidas' },
  { place: 'Tarragona y Lleida', note: 'Consultar' },
  { place: 'Bodas destino', note: 'Consultar' },
]


export const navLinks = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/despedidas', label: 'Despedidas' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/sobre-mi', label: 'Sobre mí' },
  { href: '/contacto', label: 'Contacto' },
]

export const photoBySrc = (src: string) => photos.find((p) => p.src === src)
