import type { FormEvent } from 'react'
import './App.css'
import WeatherPreview from './WeatherPreview'

const contactEmail = 'smariapaula0625@gmail.com'

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="monogram" href="#inicio" aria-label="Maria Paula, início">MP</a>
      <nav aria-label="Navegação principal">
        <a href="#projetos">Projetos</a>
        <a href="#sobre">Sobre</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Eu sou</p>
        <h1 id="hero-title">Maria Paula</h1>
        <p className="hero-role">Profissional de TI Júnior</p>
      </div>
      <a className="scroll-cue" href="#projetos">
        <span>Scroll</span>
        <i aria-hidden="true" />
      </a>
      <a className="hero-github" href="https://github.com/mPaulatech" target="_blank" rel="noreferrer">
        GitHub <span aria-hidden="true">↗</span>
      </a>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section className="section projects" id="projetos" aria-labelledby="projects-title">
      <h2 className="section-index" id="projects-title">01 / Projetos selecionados</h2>
      <div className="project-grid">
        <article className="project-card">
          <a className="project-visual weather-visual" href="https://mpaulatech.github.io/weather-app" target="_blank" rel="noreferrer" aria-label="Abrir Weather App">
            <WeatherPreview />
          </a>
          <div className="project-info">
            <div className="project-title-row"><h3>Weather App</h3><span className="project-number">01</span></div>
            <p>Clima em tempo real com HTML, CSS, JavaScript e API Open-Meteo.</p>
            <a className="text-link" href="https://mpaulatech.github.io/weather-app" target="_blank" rel="noreferrer">Ver projeto <span aria-hidden="true">↗</span></a>
          </div>
        </article>

        <article className="project-card">
          <div className="project-visual bier-visual" aria-hidden="true">
            <span className="status-pill"><i /> Em andamento</span>
            <div className="bier-mark">DB<span>.</span></div>
            <span className="bier-caption">DONA BIER · SISTEMA DE GESTÃO</span>
          </div>
          <div className="project-info">
            <div className="project-title-row"><h3>Dona Bier</h3><span className="project-number">02</span></div>
            <p>Sistema de centralização para um bar. Projeto Fatec em equipe de 5 pessoas.</p>
            <span className="text-link muted-link">Em breve</span>
          </div>
        </article>

        <article className="project-card">
          <a className="project-visual side-visual" href="https://github.com/mPaulatech" target="_blank" rel="noreferrer" aria-label="Abrir projetos no GitHub">
            <div className="side-orbit orbit-one" />
            <div className="side-orbit orbit-two" />
            <div className="folder-icon"><i /><span /></div>
            <span className="side-caption">IDEIAS EM CONSTRUÇÃO</span>
          </a>
          <div className="project-info">
            <div className="project-title-row"><h3>Side projects</h3><span className="project-number">03</span></div>
            <p>Experimentos, estudos e outras coisas que venho criando.</p>
            <a className="text-link" href="https://github.com/mPaulatech" target="_blank" rel="noreferrer">Abrir no GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </article>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="section about" id="sobre" aria-labelledby="about-title">
      <p className="section-index">02 / Um pouco sobre mim</p>
      <div className="about-layout">
        <div className="about-copy">
          <h2 id="about-title">Sobre<span>.</span></h2>
          <p>Sou a Paula, desenvolvedora júnior de Guaratinguetá. Estudo Gestão da Tecnologia da Informação na Fatec, sou técnica em Informática pela ETEC e tenho experiência em suporte N1/N2 no Poupatempo, onde lidei com atendimento e resolução de problemas no dia a dia.</p>
          <p>Hoje meu foco é desenvolvimento web.</p>
        </div>
        <div className="skills">
          <p className="skills-label">Tecnologias &amp; habilidades</p>
          <ul>
            <li>HTML</li><li>CSS</li><li>JavaScript (ES6+)</li><li>React</li><li>TypeScript</li><li>Vite</li><li>MySQL</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
  const formData = new FormData(event.currentTarget)
  const name = String(formData.get('name') ?? '')
  const email = String(formData.get('email') ?? '')
  const message = String(formData.get('message') ?? '')
  const subject = encodeURIComponent(`Contato pelo portfólio: ${name}`)
  const body = encodeURIComponent(`${message}\n\nEnviado por ${name} (${email})`)

  window.location.assign(`mailto:${contactEmail}?subject=${subject}&body=${body}`)
}

function ContactSection() {
  return (
    <section className="section contact" id="contato" aria-labelledby="contact-title">
      <div className="contact-copy">
        <p className="section-index">03 / Vamos conversar</p>
        <h2 id="contact-title">Contato<span>.</span></h2>
        <p className="contact-intro">Tem um projeto ou uma oportunidade?<br />Vamos conversar.</p>
        <a className="contact-email" href={`mailto:${contactEmail}`}>{contactEmail} <span aria-hidden="true">↗</span></a>
        <p className="location">Guaratinguetá, SP</p>
      </div>
      <form className="contact-form" onSubmit={handleContactSubmit}>
        <p className="skills-label">Formulário</p>
        <label htmlFor="name">Nome</label>
        <input id="name" name="name" type="text" placeholder="Como você se chama?" autoComplete="name" required />
        <label htmlFor="email">E-mail</label>
        <input id="email" name="email" type="email" placeholder="seu@email.com" autoComplete="email" required />
        <label htmlFor="message">Mensagem</label>
        <textarea id="message" name="message" placeholder="Conte um pouco sobre sua ideia..." rows={3} required />
        <button type="submit">Enviar mensagem <span aria-hidden="true">↗</span></button>
      </form>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} Maria Paula</span>
      <a href="#inicio">Voltar ao topo ↑</a>
      <span>Feito com cuidado</span>
    </footer>
  )
}

function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}

export default App