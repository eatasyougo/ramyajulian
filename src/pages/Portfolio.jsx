import { useEffect } from "react";
import { img, portfolio } from "../content.js";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio · Ramya Julian";
  }, []);

  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Illustrations</p>
        <h1>Pages from the picture books.</h1>
        <p className="lede">
          Where a photograph existed, the drawing started there. The rest are imagined. Drawn by hand, on purpose.
        </p>
      </section>
      <section className="masonry">
        {portfolio.map((file, index) => (
          <img key={file} src={img(file)} alt={`Picture book illustration ${index + 1}`} />
        ))}
      </section>
    </main>
  );
}
