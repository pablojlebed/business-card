export default function Header() {
  return (
    <header>
      <section className="header-top">
        <img src="/images/pablo.png" alt="Profile picture" />
        <h1>Pablo J Lebed</h1>
        <h2>Frontend Developer</h2>
        <a href="https://pablolebed.dev">pablolebed.website</a>
      </section>

      <a href="mailto:contact@pablolebed.dev" className="btn-header">
        <button type="button" className="btn-email">
          <span className="material-symbols-outlined">mail</span>
          <p>Email</p>
        </button>
      </a>
    </header>
  );
}
