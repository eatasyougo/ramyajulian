import { useEffect } from "react";
import { img, pictureBooks } from "../content.js";

export default function Books() {
  useEffect(() => {
    document.title = "Picture Books · Ramya Julian";
  }, []);

  return (
    <main>
      <section className="page-hero">
        <img className="series-mark" src={img("books/series.jpg")} alt="Wonderful World book series" />
        <p className="eyebrow">Picture books</p>
        <h1>Little people. Enormous heroes.</h1>
        <p className="lede">
          Every book in the Wonderful World series is written in rhyme, illustrated by hand, and finished with a
          positive affirmation. There are activity pages, often a little cut-and-paste house, and a glossary where the
          story needs one. No AI was used. As much water as the drinking water industry? Come on. And then there are
          the ethical reasons.
        </p>
      </section>

      <section className="section book-list">
        {pictureBooks.map((book) => (
          <article className="book" key={book.title} id={book.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
            <img src={img(book.image)} alt={`Cover of ${book.title}`} />
            <div>
              <h2>{book.title}</h2>
              <p className="verse">“{book.verse}”</p>
              <p>{book.blurb}</p>
              <ul className="chips">
                {book.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="actions">
                {book.amazon && (
                  <a className="btn btn-primary" href={book.amazon}>
                    Buy on Amazon
                  </a>
                )}
                {book.shop && (
                  <a className="btn btn-ghost" href={book.shop}>
                    Signed copy · {book.price}
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="section note">
        <div>
          <p className="eyebrow">Classroom packs</p>
          <h2>Free teaching resources.</h2>
          <p>
            Lesson plans, discussion guides, and printable activities sit alongside the books. Women in STEM and Janaki
            Ammal already have packs. Download them from the original site, which asks for an email so the monthly
            newsletter can find you. You can unsubscribe any time.
          </p>
          <a className="btn btn-primary" href="https://www.ramyajulian.com/teachingresources">
            Teaching resources
          </a>
        </div>
        <div>
          <p className="eyebrow">Next</p>
          <h2>Something delightful is in the works.</h2>
          <p>
            There are so many amazing people still to write about. If you would like a note when the next picture book
            is ready, join the newsletter, or write and ask to be on the launch team.
          </p>
          <a className="btn btn-ghost" href="mailto:info@ramyajulian.com?subject=Launch%20team">
            Join the launch team
          </a>
        </div>
      </section>
    </main>
  );
}
