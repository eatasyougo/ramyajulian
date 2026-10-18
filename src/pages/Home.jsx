import { useEffect } from "react";
import { Link } from "react-router-dom";
import { img, pictureBooks } from "../content.js";

export default function Home() {
  useEffect(() => {
    document.title = "Ramya Julian · Author & Illustrator";
  }, []);

  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Author · Illustrator · London</p>
          <h1>Stories with grit, rhyme, and a raised eyebrow.</h1>
          <p>
            Author, illustrator, and dentist, Ramya Julian finished her first novel at the age of ten. She avers it was
            very well received, though it was read only by her brother. She has all the hobbies of a maiden Victorian
            aunt — reading, writing, painting, crocheting, knitting, and sewing — and the temperament of one.
          </p>
          <p>
            When she is not guilt-tripping her two daughters into good behaviour, she can be found devouring books,
            crafting poems and puns, and chuckling at her own witticisms. She grew up in India and now lives with her
            husband and their two daughters in London.
          </p>
          <p>
            She has taken so much joy from the artistry of other authors that she wants to share at least some of it
            back.
          </p>
          <div className="actions">
            <Link className="btn btn-primary" to="/picture-books">
              Picture books
            </Link>
            <Link className="btn btn-ghost" to="/visits">
              Book a school visit
            </Link>
          </div>
        </div>
        <figure className="hero-photo">
          <img
            src={img("hero.jpg")}
            alt="Illustrated portrait of Ramya Julian in a wooden frame, on an olive wall above a desk of books and pencils"
          />
        </figure>
      </section>

      <section className="band">
        <div>
          <p className="eyebrow">The Wonderful World series</p>
          <h2>Rhyming biographies for snuggle-time.</h2>
          <p>
            Diverse heroes, original full-colour illustrations, activity pages, a glossary, and a positive affirmation.
            Dyslexia-friendly text. Perfect for a little bonding, or a classroom.
          </p>
          <Link className="text-link" to="/picture-books">
            See the books
          </Link>
        </div>
        <div className="cover-row">
          {pictureBooks.slice(0, 5).map((book) => (
            <Link key={book.title} to="/picture-books">
              <img src={img(book.image)} alt="" />
            </Link>
          ))}
        </div>
      </section>

      <section className="section paths">
        <Link to="/visits" className="path">
          <p className="eyebrow">Schools</p>
          <h2>Author visits</h2>
          <p>Assemblies, libraries, nurseries, and workshops. From £75 for a virtual visit. DBS checked.</p>
        </Link>
        <Link to="/novels" className="path">
          <p className="eyebrow">Fiction</p>
          <h2>Novels</h2>
          <p>Modern retellings set in India. Mansfield Park in Chennai. Emma, with a dentist.</p>
        </Link>
        <Link to="/journals" className="path">
          <p className="eyebrow">Notebooks</p>
          <h2>Literary journals</h2>
          <p>Austen, Alcott, Brontë, Gaskell, and Dickens, quoted onto something you can write in.</p>
        </Link>
        <Link to="/projects" className="path">
          <p className="eyebrow">Commissions</p>
          <h2>Bespoke books</h2>
          <p>A STEM picture book for a research hub. A class book of children's own stories. Yours, next.</p>
        </Link>
      </section>

      <section className="section split">
        <img src={img("books/favourite.jpg")} alt="Cover of Favourite Things, a feel-good rhyme by Ramya Julian" />
        <div>
          <p className="eyebrow">Free, with the newsletter</p>
          <h2>Favourite Things</h2>
          <p className="lede">
            A feel-good rhyme. Sign up and the latest picture book is yours. Good stories, bad jokes, and the odd
            pun, about once a month. Unsubscribe whenever you like.
          </p>
          <div className="actions">
            <a className="btn btn-primary" href="https://www.ramyajulian.com/">
              Get the free book
            </a>
            <a className="btn btn-ghost" href="mailto:info@ramyajulian.com?subject=Please%20send%20Favourite%20Things">
              Email me instead
            </a>
          </div>
        </div>
      </section>

      <section className="quote-band">
        <blockquote>
          “We were overjoyed at how interactive the assemblies were, and in turn, how engaged the children were. It
          extended the school discussion around diversity, equity and inclusion.”
        </blockquote>
        <p>English Lead, Rathfern Primary School</p>
        <Link className="btn btn-primary" to="/visits">
          Plan a visit
        </Link>
      </section>
    </main>
  );
}
