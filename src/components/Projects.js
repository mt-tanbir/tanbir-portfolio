import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import ProjectsData from "../data/projects";

const Projects = () => (
  <section
    id="projects"
    aria-labelledby="projects-heading"
    className="scroll-mt-24 bg-slate-50/70 px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
  >
    <div className="mx-auto max-w-6xl">
      <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-dark-orange">
          Selected work
        </p>
        <h2
          id="projects-heading"
          className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
        >
          Projects
        </h2>
        <span
          aria-hidden="true"
          className="mx-auto mt-4 block h-1 w-12 rounded-full bg-dark-orange"
        />
        <p className="mx-auto mt-3 max-w-xl leading-relaxed text-slate-600">
          A selection of business websites and the features behind them.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:gap-6">
        {ProjectsData.map((project, index) => (
          <article
            key={project.id}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
          >
            <div className="bg-slate-100 p-3 pb-0 sm:p-4 sm:pb-0">
              <div className="mb-2 flex items-center gap-1.5 px-1">
                <span className="h-2 w-2 rounded-full bg-red-300" />
                <span className="h-2 w-2 rounded-full bg-amber-300" />
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
                <span className="mx-auto max-w-[70%] truncate rounded-md border border-slate-200 bg-white px-3 py-1 text-[10px] font-medium text-slate-500 sm:text-xs">
                  {new URL(project.demo).hostname}
                </span>
                <span className="w-7" aria-hidden="true" />
              </div>
              <div className="relative aspect-[1.9/1] overflow-hidden rounded-t-lg bg-white shadow-inner">
                <img
                  src={project.images[0].src}
                  alt={`${project.name} ${project.images[0].label} preview`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]"
                />
                {project.images[1] && (
                  <figure className="absolute bottom-3 right-3 w-[35%] overflow-hidden rounded-lg border-2 border-white bg-white shadow-xl sm:bottom-4 sm:right-4">
                    <img
                      src={project.images[1].src}
                      alt={`${project.name} ${project.images[1].label} preview`}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[1.5/1] w-full object-cover object-top"
                    />
                    <figcaption className="px-2 py-1 text-center text-[10px] font-semibold uppercase tracking-wide text-slate-600 sm:text-xs">
                      {project.images[1].label}
                    </figcaption>
                  </figure>
                )}
              </div>
              <div
                aria-hidden="true"
                className="h-1 bg-gradient-to-r from-transparent via-orange-300 to-transparent"
              />
            </div>

            <div className="flex flex-grow flex-col p-5 sm:p-6">
              <div className="relative mb-3 flex justify-center">
                <div className="min-w-0 flex-1 px-4 text-center">
                  <p className="mb-2 inline-flex max-w-full rounded-full bg-orange-50 px-3 py-1 text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-dark-orange ring-1 ring-inset ring-orange-100 sm:text-[11px]">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                    {project.name}
                  </h3>
                </div>
                <span className="absolute right-0 top-0 text-xs font-semibold tabular-nums text-slate-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="mx-auto mb-5 max-w-prose flex-grow text-center leading-relaxed text-slate-600">
                {project.description}
              </p>

              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.13em] text-slate-400">
                {project.highlights ? "Project highlights" : "Built with"}
              </p>
              <ul
                className="mb-5 flex flex-wrap justify-center gap-2"
                aria-label={`${project.name} ${project.highlights ? "project highlights" : "technologies"}`}
              >
                {(project.highlights || project.technologies).map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-orange-200 hover:bg-orange-50 sm:text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex justify-center border-t border-slate-100 pt-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.name} website`}
                  className="group/link inline-flex min-h-10 items-center gap-2 rounded-lg bg-darkblue px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-dark-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-orange focus-visible:ring-offset-2"
                >
                  Visit live website
                  <FaExternalLinkAlt
                    aria-hidden="true"
                    className="text-xs transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
