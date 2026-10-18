import { useState } from "react";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import { email, img, socials } from "./content.js";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import Novels from "./pages/Novels.jsx";
import Journals from "./pages/Journals.jsx";
import Visits from "./pages/Visits.jsx";
import Projects from "./pages/Projects.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Shop from "./pages/Shop.jsx";
import Privacy from "./pages/Privacy.jsx";

const links = [
  ["/", "Home"],
  ["/picture-books", "Picture Books"],
  ["/novels", "Novels"],
  ["/journals", "Journals"],
  ["/visits", "Author Visits"],
  ["/projects", "Projects"],
  ["/shop", "Shop"],
];

function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <NavLink className="brand" to="/" onClick={() => setOpen(false)}>
          <img src={img("logo.png")} alt="Ramya Julian, author-illustrator" />
        </NavLink>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={open ? "nav open" : "nav"}>
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === "/"} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
          <NavLink className="nav-cta" to="/visits#enquire" onClick={() => setOpen(false)}>
            Book a visit
          </NavLink>
        </nav>
      </header>
      <Outlet />
      <footer className="site-footer">
        <div>
          <img src={img("logo.png")} alt="" />
          <p>Author, illustrator, and dentist. London.</p>
          <p>
            Ramya Julian's Books
            <br />
            20 Allenswood Road
            <br />
            London SE9 6RP
          </p>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div>
          <strong>On this site</strong>
          <NavLink to="/picture-books">Picture books</NavLink>
          <NavLink to="/portfolio">Illustration portfolio</NavLink>
          <NavLink to="/projects">Bespoke projects</NavLink>
          <NavLink to="/journals">Journals & Group Hug</NavLink>
          <a href="https://www.ramyajulian.com/teachingresources">Free teaching resources</a>
          <NavLink to="/privacy">Privacy</NavLink>
        </div>
        <div>
          <strong>Elsewhere</strong>
          {socials.map((item) => (
            <a key={item.name} href={item.href}>
              {item.name}
            </a>
          ))}
          <a href="https://www.ramyajulian.com/">Original site</a>
        </div>
        <p className="fine">
          © {new Date().getFullYear()} Ramya Julian. Created in lieu of a few pounds, and a lot of sweat and tears.
          This is a redesign preview. Signed copies, the newsletter, and checkout stay on ramyajulian.com.
        </p>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/picture-books" element={<Books />} />
        <Route path="/novels" element={<Novels />} />
        <Route path="/journals" element={<Journals />} />
        <Route path="/visits" element={<Visits />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/privacy" element={<Privacy />} />
      </Route>
    </Routes>
  );
}
