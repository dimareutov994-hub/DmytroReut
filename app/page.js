export default function Home() {
  return (
    <main className="page">
      <nav className="navbar">
        <div className="logo">NOVA</div>
        <div className="nav-links">
          <a href="#features">Можливості</a>
          <a href="#about">Про нас</a>
          <a href="#contact">Контакти</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <span className="badge">НОВЕ ПОКОЛІННЯ</span>
          <h1>
            Створюй більше.<br />
            <span>Досягай швидше.</span>
          </h1>
          <p>
            Простий сучасний сервіс для тих, хто хоче працювати
            швидше, ефективніше та без зайвих складнощів.
          </p>
          <div className="buttons">
            <a href="#contact" className="button primary">Почати зараз</a>
            <a href="#features" className="button secondary">Дізнатися більше</a>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <article className="feature">
          <div className="icon">⚡</div>
          <h2>Швидкість</h2>
          <p>Миттєва робота та зручний інтерфейс.</p>
        </article>
        <article className="feature">
          <div className="icon">🔒</div>
          <h2>Безпека</h2>
          <p>Ваші дані надійно захищені.</p>
        </article>
        <article className="feature">
          <div className="icon">✨</div>
          <h2>Простота</h2>
          <p>Нічого зайвого — тільки потрібні функції.</p>
        </article>
      </section>

      <section id="about" className="about">
        <h2>Все необхідне в одному місці</h2>
        <p>
          NOVA допомагає організувати роботу та зосередитися
          на тому, що дійсно важливо.
        </p>
      </section>

      <section id="contact" className="cta">
        <h2>Готові почати?</h2>
        <p>Приєднуйтесь прямо зараз.</p>
        <a href="mailto:hello@example.com" className="button primary">Зв&apos;язатися</a>
      </section>

      <footer>© 2026 NOVA. Усі права захищені.</footer>
    </main>
  );
}
