import { useEffect } from "react";
import { img, projects } from "../content.js";

export default function Projects() {
  useEffect(() => {
    document.title = "Interesting Projects · Ramya Julian";
  }, []);

  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Bespoke</p>
        <h1>Books made for a particular room of people.</h1>
        <p className="lede">
          A research hub. A Year 6 classroom. A preschool her daughter still misses. If the next one should be yours,
          write to info@ramyajulian.com.
        </p>
      </section>
      <section className="section book-list">
        {projects.map((project) => (
          <article className="book" key={project.title}>
            <img src={img(project.image)} alt="" />
            <div>
              <h2>{project.title}</h2>
              <p>{project.blurb}</p>
              {project.note && <p className="verse">{project.note}</p>}
              {project.links && (
                <div className="actions">
                  {project.links.map((link) => (
                    <a key={link.href} className="btn btn-ghost" href={link.href}>
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
