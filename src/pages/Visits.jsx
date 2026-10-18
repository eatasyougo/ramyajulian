import { useEffect, useState } from "react";
import { email, fees, img, visitTypes } from "../content.js";

export default function Visits() {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = "Author Visits · Ramya Julian";
  }, []);

  function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent("I'd like to book an author visit");
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nSchool: ${data.get("school")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <main>
      <section className="page-hero with-photo">
        <div>
          <p className="eyebrow">Schools, libraries, nurseries</p>
          <h1>If you are doing assemblies, make one an author visit.</h1>
          <p className="lede">
            Children meet one of the people who made the book. They ask questions, learn how a story gets written and
            drawn, and go away wanting to make something of their own. Every picture book ends with a positive
            affirmation, and that is the part Ramya most likes sharing.
          </p>
        </div>
        <img src={img("visits/reading.jpg")} alt="Ramya Julian presenting to children in a school hall" />
      </section>

      <section className="section stats">
        <p className="eyebrow">National Literacy Trust</p>
        <h2>Pupils who had an author visit this academic year</h2>
        <div className="stat-row">
          <div>
            <strong>2×</strong>
            <span>as likely to read above the expected level (31% vs 17%)</span>
          </div>
          <div>
            <strong>68%</strong>
            <span>enjoy reading, against 47% of other pupils</span>
          </div>
          <div>
            <strong>44%</strong>
            <span>enjoy writing, against 32%</span>
          </div>
        </div>
        <p className="fine-inline">
          They were also more confident: 37% vs 25% in reading, and 22% vs 17% in writing.
        </p>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="eyebrow">A session</p>
            <h2>What actually happens.</h2>
          </div>
        </div>
        <div className="steps">
          <article>
            <span>01</span>
            <h3>Interactive reading</h3>
            <p>A lively reading, with chats built in about racism, diversity, and kindness. Tailored to the age. Three-year-olds do not get the PowerPoint. Nobody wants milkshake on the slides.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Behind the book</h3>
            <p>How stories are written, illustrated, and published. Or a themed workshop, such as the Braille writing sessions.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Affirmations and questions</h3>
            <p>Because these children are just as amazing as the heroes in the books. They can write afterwards. Ramya replies by hand.</p>
          </article>
        </div>
      </section>

      <section className="section two">
        <div>
          <p className="eyebrow">Before and after</p>
          <h2>You choose the book.</h2>
          <ul className="plain">
            <li>Women in STEM for Science Week, or another title to match the term.</li>
            <li>Parents get a pre-visit order link. The session is free with 50 or more orders.</li>
            <li>Afterwards the school receives lesson plans, discussion guides, and printable activities.</li>
            <li>DBS checked.</li>
          </ul>
          <div className="type-list">
            {visitTypes.map((type) => (
              <span key={type}>{type}</span>
            ))}
          </div>
        </div>
        <img src={img("visits/framework.jpg")} alt="How an author visit lines up with the Reading Framework" />
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Fees</p>
            <h2>Straightforward.</h2>
          </div>
        </div>
        <div className="fees">
          {fees.map(([price, label]) => (
            <div key={price}>
              <strong>{price}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section gallery">
        <img src={img("visits/assembly.jpg")} alt="Children at a school author visit" />
        <img src={img("visits/group.jpg")} alt="A group of children after a reading" />
        <img src={img("visits/letters.jpg")} alt="Thank-you letters from children" />
      </section>

      <section className="quote-band">
        <blockquote>
          “Although our school plans a decolonised curriculum, there were important figures in the texts who we had not
          taught the children about.”
        </blockquote>
        <p>English Lead, Rathfern Primary School</p>
      </section>

      <section className="section" id="enquire">
        <div className="section-head">
          <div>
            <p className="eyebrow">Let’s work together</p>
            <h2>Tell me about the school.</h2>
          </div>
        </div>
        <form className="enquiry" onSubmit={onSubmit}>
          <label>
            Your name
            <input name="name" required autoComplete="name" />
          </label>
          <label>
            School or group
            <input name="school" required />
          </label>
          <label>
            Email
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label className="wide">
            What are you hoping for?
            <textarea name="message" rows="5" required placeholder="Age group, date, and which book or workshop." />
          </label>
          <div className="wide actions">
            <button className="btn btn-primary" type="submit">
              Email this enquiry
            </button>
            <a className="btn btn-ghost" href={`mailto:${email}?subject=I'd%20like%20to%20book%20an%20author%20visit!`}>
              {email}
            </a>
          </div>
          {sent && <p className="wide sent">Your email app should be open with the message ready to send.</p>}
        </form>
      </section>
    </main>
  );
}
