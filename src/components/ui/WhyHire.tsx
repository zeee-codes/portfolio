import type { Profile } from "../../types/portfolio";

type WhyHireProps = {
  items: Profile["whyHire"];
};

const WhyHire = ({ items }: WhyHireProps) => {
  return (
    <section id="why-hire" className="section why-hire">
      <div className="section-head">
        <p className="section-kicker">Why Hire</p>
        <h2 className="section-title">Proof-backed execution you can trust.</h2>
      </div>
      <div className="why-hire-grid">
        {items.map((item, index) => (
          <article key={item.title} className="why-hire-card surface-panel">
            <div className="why-hire-head">
              <span className="why-hire-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="why-hire-kicker">Strength</span>
            </div>
            <h3 className="why-hire-title">{item.title}</h3>
            <p className="text-dim">{item.description}</p>
            {item.metric ? (
              <span className="why-hire-metric">{item.metric}</span>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhyHire;
