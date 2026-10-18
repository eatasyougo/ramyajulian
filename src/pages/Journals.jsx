import { useEffect } from "react";
import { img, journals } from "../content.js";

export default function Journals() {
  useEffect(() => {
    document.title = "Journals · Ramya Julian";
  }, []);

  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Notebooks</p>
        <h1>Literary journals, for people who underline things.</h1>
        <p className="lede">
          Each notebook is built around a beloved classic. A designed cover, and quotes from the book, so a page of
          your own notes still smells faintly of the story. Dickens, Austen, Khayyam, Alcott, Montgomery, Brontë,
          Gaskell, and the Psalms. For writers, artists, and anyone who records the day.
        </p>
        <a className="btn btn-primary" href="https://www.amazon.com/stores/Funny-Factory-Productions/author/B0BGHM8GDK">
          Browse on Amazon
        </a>
      </section>

      <section className="section card-grid">
        {journals.map((journal) => (
          <article className="card" key={journal.title}>
            <img src={img(journal.image)} alt={`${journal.title} journal`} />
            <div>
              <h2>{journal.title}</h2>
              <p>{journal.blurb}</p>
              {journal.href && (
                <a className="text-link" href={journal.href}>
                  View on Amazon
                </a>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="section split hug">
        <div>
          <p className="eyebrow">Also, by her mother</p>
          <h2>Group Hug art journal</h2>
          <p className="lede">The perfect gift when you do not know what to gift.</p>
          <p>
            Drawn and designed by Ramya's mother. She is not biased when she says it is one of the best she has seen.
            Speaking as a wholly objective third party who has filled about forty notebooks.
          </p>
          <p>
            Journalling and hugging, with consent, are proven to lower your stress. So they combined the two. The
            leaves are hand-painted from life. Not from Ramya's plants. She managed to kill even the lavender in the
            front garden, and those are supposed to be hardy evergreens. Hardy. Huh. Evergreen. Huh.
          </p>
          <p>
            Quaint tea sets, vintage bottles, ancient carpet bags. Once, a crumpled wad of paper. It was beautiful.
            And handwritten quotes: all the things you grew up hearing, and pretended you did not.
          </p>
          <a
            className="btn btn-primary"
            href="https://www.amazon.co.uk/Funny-Factory-Productions-Group-Journal/dp/B07LBS1GJK/"
          >
            Buy Group Hug
          </a>
        </div>
        <blockquote className="pull">
          Vivid illustrations. Cutesy handwritten quotes. A journal that is also a hug.
        </blockquote>
      </section>
    </main>
  );
}
