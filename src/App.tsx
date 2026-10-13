import './App.css'

const forecast = [
  { day: 'Segunda', condition: 'Tempestade', high: '25°', low: '17°' },
  { day: 'Terça', condition: 'Pancadas de chuva', high: '28°', low: '17°' },
  { day: 'Quarta', condition: 'Tempestade', high: '29°', low: '19°' },
  { day: 'Quinta', condition: 'Tempestade', high: '25°', low: '18°' },
  { day: 'Sexta', condition: 'Tempestade', high: '25°', low: '17°' },
]

function WeatherIcon({ rainy = false }: { rainy?: boolean }) {
  return (
    <svg className="brisa-weather-icon" viewBox="0 0 40 30" fill="none" aria-hidden="true">
      <path d="M11 20.5h18a8 8 0 0 0 .2-16 11 11 0 0 0-20.7 3.2A6.5 6.5 0 0 0 11 20.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {rainy && <path d="m14 24-1.5 3m8-3-1.5 3m8-3-1.5 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />}
    </svg>
  )
}

function App() {
  function handleContactSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name'))
    const email = String(formData.get('email'))
    const message = String(formData.get('message'))
    const subject = encodeURIComponent(`Contato pelo portfólio: ${name}`)
    const body = encodeURIComponent(`${message}\n\nEnviado por ${name} (${email})`)

    window.location.href = `mailto:smariapaula0625@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <>
      <header className="site-header">
        <a className="monogram" href="#inicio" aria-label="Maria Paula, início">MP</a>
        <nav aria-label="Navegação principal">
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
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

        <section className="section projects" id="projetos" aria-labelledby="projects-title">
          <p className="section-index" id="projects-title">01 / Projetos selecionados</p>
          <div className="project-grid">
            <article className="project-card">
              <a className="project-visual weather-visual" href="https://mpaulatech.github.io/weather-app" target="_blank" rel="noreferrer" aria-label="Abrir Weather App">
                <div className="brisa-screen" aria-hidden="true">
                  <div className="brisa-header"><span className="brisa-logo">brisa</span><span className="brisa-search">São Paulo<i /></span></div>
                  <div className="brisa-current">
                    <p className="brisa-date">SEGUNDA-FEIRA, 12 DE OUTUBRO</p>
                    <h3>São Paulo</h3>
                    <p className="brisa-city">São Paulo, Brasil</p>
                    <WeatherIcon />
                    <p className="brisa-temperature">22°C</p>
                    <p className="brisa-condition">Nublado</p>
                    <p className="brisa-range">Máxima 25° · Mínima 17°</p>
                  </div>
                  <div className="brisa-metrics">
                    <div><span className="metric-icon thermometer" /><span className="metric-label">Sensação térmica</span><strong>25°</strong></div>
                    <div><span className="metric-icon droplet" /><span className="metric-label">Umidade</span><strong>74%</strong></div>
                    <div><span className="metric-icon wind" /><span className="metric-label">Vento</span><strong>2 km/h</strong></div>
                    <div><span className="metric-icon pressure" /><span className="metric-label">Pressão</span><strong>1016 hPa</strong></div>
                  </div>
                  <p className="brisa-outlook-title">Olhando adiante</p>
                  <div className="brisa-forecast">
                    {forecast.map((day) => (
                      <div className="forecast-day" key={day.day}>
                        <span className="forecast-name">{day.day}</span>
                        <WeatherIcon rainy />
                        <span className="forecast-condition">{day.condition}</span>
                        <span className="forecast-temperatures">{day.high} {day.low}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </a>
              <div className="project-info">
                <div className="project-title-row"><h2>Weather App</h2><span className="project-number">01</span></div>
                <p>Clima em tempo real com HTML, CSS, JavaScript e API Open-Meteo.</p>
                <a className="text-link" href="https://mpaulatech.github.io/weather-app" target="_blank" rel="noreferrer">Ver projeto <span aria-hidden="true">↗</span></a>
              </div>
            </article>

            <article className="project-card">
              <div className="project-visual bier-visual" aria-label="Prévia do projeto Dona Bier">
                <span className="status-pill"><i /> Em andamento</span>
                <div className="bier-mark">DB<span>.</span></div>
                <span className="bier-caption">DONA BIER · SISTEMA DE GESTÃO</span>
              </div>
              <div className="project-info">
                <div className="project-title-row"><h2>Dona Bier</h2><span className="project-number">02</span></div>
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
                <div className="project-title-row"><h2>Side projects</h2><span className="project-number">03</span></div>
                <p>Experimentos, estudos e outras coisas que venho criando.</p>
                <a className="text-link" href="https://github.com/mPaulatech" target="_blank" rel="noreferrer">Abrir no GitHub <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          </div>
        </section>

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

        <section className="section contact" id="contato" aria-labelledby="contact-title">
          <div className="contact-copy">
            <p className="section-index">03 / Vamos conversar</p>
            <h2 id="contact-title">Contato<span>.</span></h2>
            <p className="contact-intro">Tem um projeto ou uma oportunidade?<br />Vamos conversar.</p>
            <a className="contact-email" href="mailto:smariapaula0625@gmail.com">smariapaula0625@gmail.com <span aria-hidden="true">↗</span></a>
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
      </main>

      <footer className="site-footer"><span>© {new Date().getFullYear()} Maria Paula</span><a href="#inicio">Voltar ao topo ↑</a><span>Feito com cuidado</span></footer>
    </>
  )
}

export default App
