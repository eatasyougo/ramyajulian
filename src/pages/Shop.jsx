import { useEffect } from "react";
import { img, merch, shopItems } from "../content.js";

export default function Shop() {
  useEffect(() => {
    document.title = "Shop · Ramya Julian";
  }, []);

  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Ramya's bookshop</p>
        <h1>Signed copies, bundles, and a few objects.</h1>
        <p className="lede">
          Welcome. Signed copies and exclusive bundles live on the original shop, which takes payment. For a school
          visit order, choose School Visit at delivery during checkout. For more than 25 copies, email
          info@ramyajulian.com. Prices include VAT.
        </p>
      </section>

      <section className="section card-grid shop-grid">
        {shopItems.map((item) => (
          <a className="card" key={item.title} href={item.href}>
            <img src={img(item.image)} alt="" />
            <div>
              <p className="eyebrow">{item.note}</p>
              <h2>{item.title}</h2>
              <p className="price">{item.price}</p>
            </div>
          </a>
        ))}
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Also</p>
            <h2>Mugs, magnets, notebooks, shirts.</h2>
          </div>
          <a className="text-link" href="https://www.ramyajulian.com/shop">
            Open the full shop
          </a>
        </div>
        <div className="merch">
          {merch.map((item) => (
            <a key={item.title} href={item.href}>
              <strong>{item.title}</strong>
              <span>{item.price}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
