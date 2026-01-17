function Pricing() {
    return(
    <section className="section" id="pricing">
      <div className="container">
        <div className="section__head">
          <h2 className="section__title">Pricing</h2>
          <p className="section__subtitle">Three cards with a highlighted plan. Great for component variants.</p>
        </div>

        <div className="grid grid--3">
          <article className="price-card">
            <h3 className="price-card__title">Starter</h3>
            <p className="price-card__desc">For beginners who want a clean template.</p>
            <div className="price-card__price">
              <span className="price-card__currency">$</span>
              <span className="price-card__amount">0</span>
              <span className="price-card__period">/mo</span>
            </div>
            <ul className="list list--compact">
              <li className="list__item"><span class="check">✓</span> 1 landing page</li>
              <li className="list__item"><span class="check">✓</span> Basic components</li>
              <li className="list__item"><span class="check">✓</span> Community access</li>
            </ul>
            <a className="btn btn--secondary btn--full" href="#">Choose Starter</a>
          </article>

          <article className="price-card price-card--featured">
            <div className="price-card__tag">Most popular</div>
            <h3 className="price-card__title">Pro</h3>
            <p className="price-card__desc">For students slicing weekly challenges.</p>
            <div className="price-card__price">
              <span className="price-card__currency">$</span>
              <span className="price-card__amount">9</span>
              <span className="price-card__period">/mo</span>
            </div>
            <ul className="list list--compact">
              <li className="list__item"><span class="check">✓</span> 10 templates</li>
              <li className="list__item"><span class="check">✓</span> Component checklist</li>
              <li className="list__item"><span class="check">✓</span> Priority support</li>
            </ul>
            <a className="btn btn--primary btn--full" href="#">Choose Pro</a>
          </article>

          <article className="price-card">
            <h3 className="price-card__title">Team</h3>
            <p className="price-card__desc">For group practice and code reviews.</p>
            <div className="price-card__price">
              <span className="price-card__currency">$</span>
              <span className="price-card__amount">29</span>
              <span className="price-card__period">/mo</span>
            </div>
            <ul className="list list--compact">
              <li className="list__item"><span class="check">✓</span> Unlimited templates</li>
              <li className="list__item"><span class="check">✓</span> Team guidelines</li>
              <li className="list__item"><span class="check">✓</span> Review sessions</li>
            </ul>
            <a className="btn btn--secondary btn--full" href="#">Choose Team</a>
          </article>
        </div>
      </div>
    </section>
    )
}

export default Pricing