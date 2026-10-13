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

function WeatherPreview() {
  return (
    <div className="brisa-screen" aria-hidden="true">
      <div className="brisa-header">
        <span className="brisa-logo">brisa</span>
        <span className="brisa-search">São Paulo<i /></span>
      </div>
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
  )
}

export default WeatherPreview