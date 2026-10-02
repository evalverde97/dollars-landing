import { questions } from './content/faq.js';
import { FiArrowUpRight, FiPlus } from 'react-icons/fi';
import '@fontsource-variable/manrope';
import '@fontsource/cormorant-garamond/400.css';
import '@fontsource/cormorant-garamond/400-italic.css';
import './index.css';

const CONTACT = 'https://forms.gle/w5V6zVLERszK4U2SA';
const services = [
  ['Gestión de cuenta', 'Una estrategia que lleva tu nombre.', 'Un account manager que acompaña tus decisiones, cuida tu identidad y coordina el día a día de tu cuenta.'],
  ['Dirección de contenido', 'Tu esencia. Una visión más grande.', 'Ideas, formatos y guiones alineados con tu estilo para crear con intención y conectar con tu audiencia.'],
  ['Gestión de chats', 'Cada conversación, una oportunidad.', 'Un equipo dedicado a la atención, las ventas y la fidelización, con una comunicación fiel a tu personalidad.'],
  ['Marketing y promoción', 'El alcance que tu talento merece.', 'Estrategias en redes sociales y plataformas clave para ampliar tu presencia y atraer una audiencia relevante.'],
];


function App() {
  return <>
    <a className="skip-link" href="#contenido">Ir al contenido</a>
    <header className="header wrap">
      <a className="brand" href="#inicio" aria-label="DOLL·ARS — inicio"><span>DOLL<span className="brand-star">✦</span>ARS</span></a>
      <nav aria-label="Navegación principal"><a href="#servicios">Servicios</a><a href="#enfoque">Nuestro enfoque</a></nav>
      <a className="header-contact" href={CONTACT}>Hablemos <FiArrowUpRight aria-hidden="true" /></a>
    </header>
    <main id="contenido">
      <section className="hero wrap" id="inicio" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="eyebrow">CREATORS MANAGEMENT · DOLL·ARS</p>
          <h1 id="hero-title">Tu talento.<br />Nuestro impulso.<br /><em>Otro nivel.</em></h1>
          <p className="hero-description">Management de OnlyFans, Fanvue y creadores de contenido. Estrategia, creatividad y un equipo que cuida cada detalle para que tú te concentres en crear.</p>
          <a className="button" href={CONTACT}>Contactanos <FiArrowUpRight aria-hidden="true" /></a>
          <a className="text-link" href="#servicios">Descubre cómo te acompañamos</a>
        </div>
        <div className="hero-art"><img src="/images/editorial-star.jpg" alt="Escultura de una estrella en champán sobre piedra oscura y seda marfil" fetchPriority="high" width="1024" height="1365" /></div>
      </section>
      <section className="intro wrap" id="enfoque" aria-labelledby="intro-title"><p className="eyebrow">UNA ALIANZA, NO SOLO UNA AGENCIA</p><div><h2 id="intro-title">Detrás de una gran creadora,<br />hay un equipo <em>a su altura.</em></h2><p>DOLL·ARS es una agencia de management de cuentas de OnlyFans, Fanvue y creadores de contenido. Tu personalidad es tu mayor diferencial: construimos una estrategia alrededor de tu estilo, tus objetivos y la forma en que quieres crecer.</p></div></section>
      <section className="services" id="servicios" aria-labelledby="services-title"><div className="wrap"><div className="section-heading"><div><p className="eyebrow">LO QUE HACEMOS POR TI</p><h2 id="services-title">Tú creas.<br /><em>Nosotros lo potenciamos.</em></h2></div><p>Una gestión integral.<br />Una atención personal.</p></div><div className="service-grid">{services.map(([title, subtitle, description], i) => <article className="service" key={title}><span className="service-number" aria-hidden="true">0{i + 1}</span><h3>{title}</h3><p className="service-subtitle">{subtitle}</p><p>{description}</p></article>)}</div></div></section>
      <section className="approach wrap" aria-labelledby="approach-title"><div><p className="eyebrow">TU IDENTIDAD, SIEMPRE PRIMERO</p><h2 id="approach-title">Crecer sin dejar<br />de ser <em>tú.</em></h2></div><div className="principles"><article><h3>Una visión compartida</h3><p>Escuchamos tus objetivos para definir una dirección que tenga sentido para ti.</p></article><article><h3>El cuidado de cada detalle</h3><p>Del contenido a las conversaciones, mantenemos una presencia coherente con tu marca.</p></article><article><h3>Un equipo cerca de ti</h3><p>Trabajamos contigo, con comunicación clara y acompañamiento en cada etapa.</p></article></div></section>
      <section className="faq wrap" aria-labelledby="faq-title"><div><p className="eyebrow">ANTES DE DAR EL PRIMER PASO</p><h2 id="faq-title">Hablemos claro.</h2></div><div>{questions.map(([question, answer]) => <details key={question}><summary>{question}<FiPlus aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>
      <section className="contact wrap" aria-labelledby="contact-title"><p className="eyebrow">TU PRÓXIMO CAPÍTULO</p><h2 id="contact-title">El siguiente nivel<br />empieza <em>contigo.</em></h2><p>Cuéntanos dónde estás y hacia dónde quieres ir.<br />El primer paso es conocernos.</p><a className="button" href={CONTACT}>Hablemos de tu futuro <FiArrowUpRight aria-hidden="true" /></a></section>
    </main>
    <footer className="footer wrap"><a className="footer-brand" href="#inicio">DOLL<span className="brand-star">✦</span>ARS</a><span>Creator management, con visión.</span><a href={CONTACT}>Contacto <FiArrowUpRight aria-hidden="true" /></a><small>© {new Date().getFullYear()} DOLL·ARS</small></footer>
  </>;
}
export default App;
