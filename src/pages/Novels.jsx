import { useEffect } from "react";
import { img, novels } from "../content.js";

export default function Novels() {
  useEffect(() => {
    document.title = "Novels · Ramya Julian";
  }, []);

  return (
    <main>
      <section className="page-hero with-photo">
        <div>
          <p className="eyebrow">Fiction</p>
          <h1>Classics, retold in India.</h1>
          <p className="lede">
            Three full-length novels, and two more on the way. About 500,000 words, which is an overdose of verbiage.
            If you have made it this far, you are interested, and Ramya thanks you from the bottom of her heart.
          </p>
          <p className="lede">So, without further ado. You will have to scroll. Not a drumroll. Scratch that.</p>
        </div>
        <img src={img("novels/typewriter.jpg")} alt="Hands at a typewriter, with pages flying" />
      </section>

      <section className="section book-list">
        {novels.map((novel) => (
          <article className="book" key={novel.title}>
            {novel.image ? (
              <img src={img(novel.image)} alt={`Cover of ${novel.title}`} />
            ) : (
              <div className="cover-fallback">
                <span>In progress</span>
                <strong>{novel.title}</strong>
              </div>
            )}
            <div>
              <p className="eyebrow">{novel.tag}</p>
              <h2>{novel.title}</h2>
              <p className="verse">“{novel.quote}”</p>
              <p>{novel.blurb}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
