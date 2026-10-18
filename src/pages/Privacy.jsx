import { useEffect } from "react";
import { email } from "../content.js";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy · Ramya Julian";
  }, []);

  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">The small print</p>
        <h1>Privacy, for the one person who actually reads it.</h1>
        <p className="lede">
          If you are reading this, you are truly one of a kind. The rest of us should take a leaf out of your book.
        </p>
      </section>
      <section className="section prose">
        <h2>What gets collected</h2>
        <p>
          Anything you type into the original website, or send another way: your name, email, messages, and, if you
          buy something there, purchase history and payment details handled by the shop. The site can also measure
          ordinary visit information, such as which pages are opened and how long a visit lasts.
        </p>
        <h2>Why</h2>
        <p>
          To run the shop and the visits, to reply when you write, to send news if you asked for it, to understand
          what is working, and to follow the law.
        </p>
        <h2>Where it lives</h2>
        <p>
          The live shop is hosted on Wix. Payment gateways used there follow PCI-DSS, the card-industry standard
          looked after by Visa, Mastercard, American Express, and Discover. This preview does not take payment and
          does not store what you type into the enquiry form. That form opens an email to {email}.
        </p>
        <h2>Cookies</h2>
        <p>
          The inedible kind. On the live site they keep the shop working, remember a signed-in member, and help see
          whether pages are doing their job. This preview does not set tracking cookies.
        </p>
        <h2>If you want nothing to do with it</h2>
        <p>
          Write to <a href={`mailto:${email}`}>{email}</a> or post to 20 Allenswood Road, London SE9 6RP. And if you
          would rather talk about books than data, that invitation stands too.
        </p>
      </section>
    </main>
  );
}
