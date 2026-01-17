function Features() {
    return(
        <section className="section" id="features">
      <div className="container">
        <div className="section__head">
          <h2 className="section__title">Features made for slicing practice</h2>
          <p className="section__subtitle">Each block is designed to become a small component.</p>
        </div>

        <div className="grid grid--3">
          <article className="feature-card">
            <div className="icon-bubble" aria-hidden="true">⚡</div>
            <h3 className="feature-card__title">Clean spacing</h3>
            <p className="feature-card__text">
              Consistent paddings and gaps so your components look aligned.
            </p>
            <a className="feature-card__link" href="#pricing">Learn more</a>
          </article>

          <article className="feature-card">
            <div className="icon-bubble" aria-hidden="true">🧩</div>
            <h3 className="feature-card__title">Reusable cards</h3>
            <p className="feature-card__text">
              Card patterns you can reuse for products, posts, or services.
            </p>
            <a className="feature-card__link" href="#testimonials">See examples</a>
          </article>

          <article className="feature-card">
            <div className="icon-bubble" aria-hidden="true">🎯</div>
            <h3 className="feature-card__title">Simple colors</h3>
            <p className="feature-card__text">
              Neutral base with one accent color, easy to theme later.
            </p>
            <a className="feature-card__link" href="#faq">How to slice</a>
          </article>
        </div>

        <div className="split">
          <div className="split__media" aria-hidden="true">
            <div className="mock">
              <div className="mock__badge">UI Kit</div>
              <div className="mock__title">Component Library</div>
              <div className="mock__row">
                <div className="chip">Button</div>
                <div className="chip">Card</div>
                <div className="chip">Badge</div>
                <div className="chip">Modal</div>
              </div>
              <div className="mock__row">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>
          </div>

          <div className="split__content">
            <h3 className="split__title">Recommended slicing approach</h3>
            <ul className="list">
              <li className="list__item"><span class="check">✓</span> Start from layout: container, grid, split</li>
              <li className="list__item"><span class="check">✓</span> Extract repeated UI: buttons, cards, badges</li>
              <li className="list__item"><span class="check">✓</span> Use props for text and variants</li>
              <li className="list__item"><span class="check">✓</span> Keep CSS modular: component blocks</li>
            </ul>
            <div className="split__cta">
              <a className="btn btn--secondary" href="#pricing">View pricing</a>
              <a className="btn btn--ghost" href="#faq">Read FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Features