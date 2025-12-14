import serviceHardening from '../assets/services/service-hardening.png';
import serviceMonitoring from '../assets/services/service-monitoring.png';
import serviceIncidentResponse from '../assets/services/service-incident-response.png';
import serviceTraining from '../assets/services/service-training.png';

import teamDirector from '../assets/team/team-director.png';
import teamSocManager from '../assets/team/team-soc-manager.png';
import teamIncidentResponse from '../assets/team/team-incident-response.png';
import teamSystemAdmin from '../assets/team/team-system-admin.png';

export const navLinks = [
  { label: 'Inicio', href: '#hero-section' },
  { label: 'Nosotros', href: '#identity-section' },
  { label: 'Servicios', href: '#services-section' },
  { label: 'Testimonios', href: '#testimonials-section' },
  { label: 'Contacto', href: '#contact-section' },
];

export const heroMetrics = [
  { label: 'Incidentes bloqueados / mes', value: '1.2K+' },
  { label: 'Tiempo medio de respuesta', value: '12 min' },
  { label: 'Cobertura 24/7', value: '365 días' },
];

export const experts = [
  {
    name: 'Aquiles Celedón',
    role: 'Líder de Estrategia y Clientes',
    credentials: ['CISSP', 'CISM', 'ISO 27001 Lead Auditor'],
    bio: 'Gestiona la relación estratégica con nuestros clientes MiPymes, asegurando seguridad alineada a objetivos de negocio y continuidad operativa.',
    avatar: teamDirector,
  },
  {
    name: 'Evelyn Franco',
    role: 'Analista SOC Nivel 1',
    credentials: ['GIAC GCIH', 'CEH', 'ISO 27001'],
    bio: 'Primera línea de defensa en nuestro SOC, monitorea eventos 24/7 y detecta patrones anómalos que podrían amenazar a nuestros clientes.',
    avatar: teamSocManager,
  },
  {
    name: 'Luis Salas',
    role: 'Especialista en Respuesta a Incidentes',
    credentials: ['GCFA', 'ECIH', 'CHFI'],
    bio: 'Dirige la contención durante crisis, coordina equipos forenses y acelera la recuperación tras incidentes complejos como ransomware.',
    avatar: teamIncidentResponse,
  },
  {
    name: 'Samer Isenia',
    role: 'Administrador de Sistemas y Redes',
    credentials: ['CompTIA Security+', 'CCNA Security', 'ISO 27001'],
    bio: 'Implementa herramientas de seguridad y gestiona infraestructuras híbridas para que cada cliente mantenga una base tecnológica sólida.',
    avatar: teamSystemAdmin,
  },
];

export const clients = [
  'Puerto Nuevo Maicao',
  'Cooperativa WayuuTec',
  'La Guajira Logistics',
  'Senamar Caribe',
  'Banco Costa Norte',
];

export const serviceCards = [
  {
    title: 'Diagnóstico y Fortalecimiento de Sistemas (Hardening)',
    summary: 'Un chequeo inicial para identificar y corregir las vulnerabilidades más críticas.',
    detail:
      'Evaluamos configuraciones, priorizamos brechas y reforzamos tu stack tecnológico para dejarlo listo frente a amenazas de la región.',
    image: serviceHardening,
  },
  {
    title: 'Monitoreo y Detección Gestionada (SOC-as-a-Service)',
    summary: 'Vigilancia continua de los sistemas del cliente para detectar actividades sospechosas en tiempo real.',
    detail:
      'Integramos SIEM, EDR y analítica propia para enviar alertas accionables 24/7, con playbooks diseñados para comercio fronterizo.',
    image: serviceMonitoring,
  },
  {
    title: 'Respuesta a Incidentes y Recuperación',
    summary: 'Equipo táctico listo para contener ataques y restablecer operaciones rápidamente.',
    detail:
      'Coordinamos investigación forense, erradicación del malware y restauración guiada para minimizar tiempo fuera de servicio.',
    image: serviceIncidentResponse,
  },
  {
    title: 'Capacitación y Concientización en Ciberseguridad',
    summary: 'Programas de entrenamiento para que tu talento reconozca y detenga ataques de ingeniería social.',
    detail:
      'Diseñamos simulacros de phishing, talleres y rutas de certificación para crear una cultura de seguridad sostenible.',
    image: serviceTraining,
  },
];

export const threatSignals = [
  { label: 'Intrusiones bloqueadas', value: '98', delta: '+12%' },
  { label: 'Credenciales filtradas', value: '46', delta: '-8%' },
  { label: 'Sitios falsos neutralizados', value: '17', delta: '+3' },
  { label: 'Alertas críticas activas', value: '04', delta: 'Tiempo real' },
];

export const differentiators = [
  {
    title: 'Cobertura Ultra Local',
    detail: 'Playbooks especializados para comercio transfronterizo Maicao–Paraguachón.',
  },
  {
    title: 'Plataforma Conversacional',
    detail: 'Chatbot táctico que acelera la toma de decisiones en crisis.',
  },
  {
    title: 'Equipo Bilingüe Español–Wayuunaiki',
    detail: 'Coordinación directa con equipos comunitarios y fuerzas del orden.',
  },
];

export const steps = [
  {
    title: 'Descubrimiento y hardening inicial',
    detail: 'Mapeamos activos críticos, priorizamos brechas y aplicamos controles base en 14 días.',
  },
  {
    title: 'Implementación SOC híbrido',
    detail: 'Desplegamos sensores, automatizamos triage y habilitamos tablero táctico.',
  },
  {
    title: 'Optimización continua',
    detail: 'Ciclos mensuales de pruebas de intrusión, simulaciones y reporting ejecutivo.',
  },
];

export const testimonials = [
  {
    name: 'María Fernanda Rojas',
    role: 'Directora de Tecnología',
    company: 'La Guajira Logistics',
    quote:
      'CSIRT-MAICAO convirtió nuestros procesos en un esquema resiliente. Su tiempo de contención salvó más de 4 días de operación.',
  },
  {
    name: 'Jorge Iguarán',
    role: 'Gerente General',
    company: 'Cooperativa WayuuTec',
    quote:
      'La inteligencia local que entregan es única. Anticiparon fraudes dirigidos a nuestra base de clientes y evitaron pérdidas millonarias.',
  },
  {
    name: 'Claudia Fuente',
    role: 'COO',
    company: 'Banco Costa Norte',
    quote:
      'Su SOC extendido nos permitió cumplir con la Superfinanciera sin contratar un equipo interno masivo.',
  },
];
