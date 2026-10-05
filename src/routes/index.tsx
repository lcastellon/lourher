import { createFileRoute } from "@tanstack/react-router";
import retrato from "@/assets/retrato-lourdes.jpeg.asset.json";
import logoColtlax from "@/assets/logo-coltlax.png";
import logoCedrae from "@/assets/logo-cedrae.png";
import { ContactForm, PublicationBanner } from "@/components/home-experience";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Dra. María de Lourdes Hernández Rodríguez — Desarrollo Regional, Tlaxcala",
      },
      {
        name: "description",
        content:
          "Profesora-Investigadora en El Colegio de Tlaxcala, A.C. Gestión del agua, conflictos ambientales y ordenamiento territorial en Tlaxcala, México.",
      },
      {
        property: "og:title",
        content:
          "Dra. María de Lourdes Hernández Rodríguez — Desarrollo Regional, Tlaxcala",
      },
      {
        property: "og:description",
        content:
          "Investigación transdisciplinaria sobre sustentabilidad hídrica, conflictos ambientales y ordenamiento territorial en Tlaxcala, México.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { href: "#lineas", label: "Líneas" },
  { href: "#trayectoria", label: "Trayectoria" },
  { href: "#publicaciones", label: "Publicaciones" },
  { href: "#contacto", label: "Contacto" },
];

const researchLines = [
  {
    number: "01",
    color: "text-cobalt",
    title: "Gobernanza ambiental y gestión hídrica territorial",
    body: "El agua como Recurso de Uso Común: sustentabilidad hídrica, manejo de cuencas y política pública en Tlaxcala y la región.",
    delay: "60ms",
  },
  {
    number: "02",
    color: "text-terra",
    title: "Conflictos socioambientales y desigualdades territoriales",
    body: "Contaminación de los ríos Atoyac y Zahuapan, disputas por el territorio y rutas hacia la sustentabilidad.",
    delay: "120ms",
  },
  {
    number: "03",
    color: "text-sage",
    title: "Acción colectiva y gestión comunitaria del territorio",
    body: "Participación social, metodologías participativas y ordenamiento territorial frente al cambio climático.",
    delay: "180ms",
  },
];

const trajectory = [
  {
    label: "Formación",
    text: "Doctora en Ciencias en Estrategias para el Desarrollo Agrícola Regional, Colegio de Postgraduados, Campus Puebla. Maestra en Ciencias de la Educación, Universidad Autónoma de Tlaxcala.",
  },
  {
    label: "Adscripción",
    text: "Profesora-Investigadora \u201cB\u201d en El Colegio de Tlaxcala, A.C., adscrita al Centro de Estudios en Desarrollo Regional y Análisis Económico (CEDRAE).",
  },
  {
    label: "Experiencia",
    text: "23 años de docencia e investigación a nivel posgrado. Coordinadora del Doctorado en Desarrollo Regional (2024–2025).",
  },
  {
    label: "Reconocimiento",
    text: "Sistema Nacional de Investigadoras e Investigadores (SNII), nivel II.",
  },
  {
    label: "Docencia",
    text: "Desarrollo Regional, Turismo y Sustentabilidad (Doctorado en Desarrollo Regional) y Medio Ambiente y Sustentabilidad (Maestría en Desarrollo Regional). Dirección de tesis en usos del agua, desarrollo regional, turismo alternativo y metodologías participativas.",
  },
  {
    label: "Liderazgo",
    text: "Líder y representante institucional del GATTACA, grupo técnico transdisciplinario para la restauración integral de la cuenca del Atoyac. Mentora STEAM para mujeres y niñas en la ciencia.",
  },
  {
    label: "Redes",
    text: "Red de Investigadores Sociales sobre Agua; Red Temática Conacyt Gestión e Investigación del Agua; Red Mexicana de Investigadores para el Agua; Red de Conflictos Ambientales de América Latina; Red Expertos ODS 21; Red Latinoamericana por la Defensa del Patrimonio Biocultural; Asociación Mexicana de Turismo Rural.",
  },
];

const projects = [
  {
    year: "Vigente · colectivo",
    title:
      "Filtros de colorantes en lavanderías de mezclilla a base de piedra pómez y tela no-tejida de nylon-6: estrategia sustentable para mitigar la contaminación del río Atoyac (CIQA–UPTx–Coltlax)",
  },
  {
    year: "2023–2024",
    title:
      "Programa Municipal de Ordenamiento Territorial y Desarrollo Urbano, Santa Cruz Tlaxcala",
  },
  {
    year: "2022–2023",
    title:
      "Programa Municipal de Ordenamiento Territorial y Desarrollo Urbano, Tepetitla de Lardizábal",
  },
  {
    year: "2011",
    title: "Programa Estatal de Acciones ante el Cambio Climático",
  },
];

const publications = [
  {
    title:
      "Hernández Rodríguez, M. de L., & Gutiérrez Castro, A. I. (2026). Del despotismo hidráulico a la gestión comunitaria: Un modelo explicativo para el río Atoyac en Tlaxcala. En J. D. Quiroz Jiménez & P. Badillo Flores (Coords.), El panorama de los problemas hídricos en México: Estudios de caso (pp. 37–59). El Colegio del Estado de Hidalgo.",
    type: "Capítulo · 2026",
    url: "https://www.researchgate.net/publication/414964004_Del_Despotismo_Hidraulico_a_la_gestion_comunitaria_Un_modelo_explicativo_para_el_rio_Atoyac_en_Tlaxcala",
  },
  {
    title:
      "Hernández-Rodríguez, M. de L. (2026). Turismo alternativo como estrategia de atención al patrimonio biocultural en una ANP del altiplano mexicano. En N. Campos Vera (Ed. gral.), Patrimonio cultural y diversidad: Integrando culturas en Iberoamérica (pp. 267–276). Fundación Visión Cultural de Bolivia.",
    type: "Capítulo · 2026",
    url: "https://www.researchgate.net/publication/403960170_Turismo_alternativo_como_estrategia_de_atencion_al_patrimonio_biocultural_en_una_ANP_del_altiplano_mexicano",
  },
  {
    title:
      "Hernández-Rodríguez, M. de L. (2026, enero-marzo). Derecho humano al agua y régimen de concesiones: Desigualdades territoriales y gobernanza comunitaria ante la Ley General de Aguas en México. Impluvium, 14(34), 103–111.",
    type: "Artículo · 2026",
    url: "http://www.agua.unam.mx/impluvium.html",
  },
  {
    title:
      "Ávila-Orta, C. A., Alvarado-Tenorio, G., Ramírez-López, E. R., Cadenas-Pliego, G., Cruz-Delgado, V. J., Hernández-Rodríguez, M. de L., Cano-Salazar, L. F., Pérez-García, Y., Pérez-Flores, F., Sevilla-Vargas, K. I., & Soria-Argüello, G. (2025). Hybrid Nylon-6/Pumice Nonwoven Composites as Nature-Based Adsorbents for Methylene Blue Dye-Contaminated Wastewater: Insights into Monolayer and Multilayer Adsorption Mechanisms. Water, 17(23), 3382.",
    type: "Artículo · 2025",
    url: "https://doi.org/10.3390/w17233382",
  },
  {
    title:
      "Hernández-Rodríguez, M. de L., Ocampo-Fletes, I., & Flores-Domínguez, A. D. (Coords. generales). (2024). Las crisis del agua del siglo XXI: perspectivas y soluciones (versión digital, 673 pp.). El Colegio de Tlaxcala, A.C.",
    type: "Libro · 2024",
    url: "https://doi.org/10.63042/Coltlax.108",
  },
  {
    title:
      "Ávila, C. A., Hernández-Rodríguez, M. de L., & Lozano, S. A. (2022). Río Atoyac: Hacia una gestión integral de una problemática multifactorial (1.ª reimpresión, 328 pp.). Gobierno del Estado de Tlaxcala, CONACyT, CIQA, El Colegio de Tlaxcala, SEPE, CITLAX.",
    type: "Libro · 2022",
    url: "https://revistacoltlax.mx/omp/index.php/repositoriocoltlax/catalog/book/8",
  },
];

const scholarUrl =
  "https://scholar.google.com.mx/citations?user=m9wmIhoAAAAJ&hl=es";
function Index() {
  return (
    <div className="min-h-screen bg-paper font-body text-ink antialiased selection:bg-terra/20">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-line bg-paper/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-lg font-semibold tracking-tight">
              M. L. Hernández
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:inline">
              El Colegio de Tlaxcala, A.C.
            </span>

          </div>
          <nav className="hidden items-center gap-6 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground sm:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
        <div className="max-w-3xl md:col-span-8">
          <div className="animate-[rise_0.8s_cubic-bezier(0.32,0.72,0,1)_both]">
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-terra">
              Investigadora · Desarrollo Regional · SNI II
            </p>
            <h1 className="font-display text-[clamp(2.4rem,6vw,4.8rem)] leading-[0.95] font-semibold tracking-tight text-balance">
              María de Lourdes{" "}
              <span className="italic text-terra">Hernández</span> Rodríguez
            </h1>
            <p className="mt-6 max-w-[42ch] font-display text-xl text-pretty italic text-muted-foreground">
              "El agua es un Recurso de Uso Común: se gestiona con la cuenca
              entera y con quienes la habitan."
            </p>
            <p className="mt-6 max-w-[52ch] text-sm leading-relaxed text-pretty text-muted-foreground">
              Profesora-Investigadora en El Colegio de Tlaxcala, A.C., con 23
              años de docencia e investigación en posgrado. Trabajo la gestión
              del agua, la planificación participativa y el turismo alternativo
              desde un enfoque crítico y transdisciplinario.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#lineas"
                className="rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-terra"
              >
                Ver líneas de investigación
              </a>
              <a
                href="#contacto"
                className="rounded-full border border-line px-5 py-3 text-sm font-medium transition-colors hover:border-ink"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>
        <div className="md:col-span-4">
          <div className="animate-[rise_0.8s_cubic-bezier(0.32,0.72,0,1)_both]" style={{ animationDelay: "120ms" }}>
            <img
              src={retrato.url}
              alt="Dra. María de Lourdes Hernández Rodríguez"
              className="mx-auto aspect-square w-full max-w-xs rounded-full border border-line object-cover shadow-sm"
            />
            <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              El Colegio de Tlaxcala, A.C. · CEDRAE
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* Research lines */}
      <section id="lineas" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
        <div className="mb-10 flex items-baseline justify-between border-b border-line pb-4">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Líneas de investigación
          </h2>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            (a)
          </span>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {researchLines.map((line) => (
            <div
              key={line.number}
              className="prism animate-[rise_0.8s_cubic-bezier(0.32,0.72,0,1)_both] rounded-2xl p-6 transition-colors hover:bg-card/60"
              style={{ animationDelay: line.delay }}
            >
              <span
                className={`font-mono text-[10px] uppercase tracking-[0.2em] ${line.color}`}
              >
                {line.number}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
                {line.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-pretty text-muted-foreground">
                {line.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Trajectory */}
      <section
        id="trayectoria"
        className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16"
      >
        <div className="mb-10 flex items-baseline justify-between border-b border-line pb-4">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Trayectoria
          </h2>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            (b)
          </span>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <dl className="space-y-6 md:col-span-7">
            {trajectory.map((item) => (
              <div key={item.label} className="grid grid-cols-1 gap-1">
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-cobalt">
                  {item.label}
                </dt>
                <dd className="text-sm leading-relaxed text-pretty text-muted-foreground">
                  {item.text}
                </dd>
              </div>
            ))}
          </dl>
          <div className="prism rounded-2xl p-6 md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-terra">
              Proyectos estratégicos
            </p>
            <ul className="mt-5 divide-y divide-line">
              {projects.map((project) => (
                <li key={project.title} className="py-4 first:pt-0 last:pb-0">
                  <span className="font-mono text-xs text-muted-foreground">
                    {project.year}
                  </span>
                  <p className="mt-1 font-display text-base leading-snug tracking-tight text-pretty">
                    {project.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section
        id="publicaciones"
        className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16"
      >
        <div className="mb-8 flex items-baseline justify-between border-b border-line pb-4">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Publicaciones destacadas
          </h2>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            (c) más de 80 en total
          </span>
        </div>
        <PublicationBanner publications={publications} />
        <ul className="divide-y divide-line">
          {publications.map((pub) => (
            <li
              key={pub.title}
              className="grid grid-cols-1 gap-2 py-5 md:grid-cols-12 md:gap-6"
            >
              <div className="md:col-span-9">
                {pub.url ? (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base leading-relaxed text-pretty underline decoration-line underline-offset-4 transition-colors hover:decoration-terra"
                  >
                    {pub.title}
                  </a>
                ) : (
                  <p className="text-base leading-relaxed text-pretty">
                    {pub.title}
                  </p>
                )}
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground md:col-span-3 md:text-right">
                {pub.type}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-[60ch] text-sm leading-relaxed text-pretty text-muted-foreground">
          Su producción académica reúne más de 80 publicaciones sobre
          sustentabilidad hídrica, conflictos ambientales y ordenamiento
          territorial.
        </p>
      </section>


      {/* Contact */}
      <footer id="contacto" className="mt-8 border-t border-line">
        <div className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                (d) Contacto
              </p>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-balance">
                Conversemos sobre el agua y el territorio.
              </h2>
              <p className="mt-4 max-w-[40ch] text-sm leading-relaxed text-pretty text-muted-foreground">
                Disponible para colaboraciones, dirección de tesis y proyectos
                de investigación aplicada en la cuenca del Atoyac y la región
                centro de México.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href={scholarUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-line px-5 py-3 text-sm font-medium transition-colors hover:border-ink"
                >
                  Google Scholar
                </a>
              </div>
            </div>
            <div className="md:col-span-7">
              <ContactForm />
              <div className="mt-8 flex flex-wrap items-center gap-6 md:justify-end">
                <img
                  src={logoColtlax}
                  alt="El Colegio de Tlaxcala, A.C."
                  className="h-10 w-auto"
                />
                <img
                  src={logoCedrae}
                  alt="CEDRAE"
                  className="h-8 w-auto"
                />
              </div>
              <p className="mt-4 font-display text-2xl italic text-terra">
                El Colegio de Tlaxcala, A.C.
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                Profesora-Investigadora "B" · CEDRAE
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                Doctorado en Desarrollo Regional
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                Tlaxcala, Tlaxcala, México
              </p>
            </div>
          </div>
          <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 sm:flex-row sm:items-center">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              © 2026 María de Lourdes Hernández Rodríguez
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Cuenca del Atoyac · Tlaxcala
            </span>

          </div>
        </div>
      </footer>
    </div>
  );
}
