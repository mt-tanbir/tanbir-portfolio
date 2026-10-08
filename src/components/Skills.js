import React from "react";
import {
  FaCode,
  FaLanguage,
  FaServer,
  FaTools,
  FaWordpress,
} from "react-icons/fa";
import SkillsData from "../data/skills";

const skillGroups = {
  "WordPress & e-commerce": {
    icon: FaWordpress,
    label: "Primary focus",
  },
  "Front-end": {
    icon: FaCode,
    label: "Interface development",
  },
  "Web operations & SEO": {
    icon: FaServer,
    label: "Site care & discovery",
  },
  Tools: {
    icon: FaTools,
    label: "Development toolkit",
  },
  Languages: {
    icon: FaLanguage,
    label: "Communication",
  },
};

const Skills = () => (
  <section
    id="skills"
    aria-labelledby="skills-heading"
    className="scroll-mt-24 bg-gradient-to-b from-white via-white to-slate-50 px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
  >
    <div className="mx-auto max-w-6xl">
      <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-dark-orange">
          Capabilities
        </p>
        <h2
          id="skills-heading"
          className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
        >
          Skills
        </h2>
        <span
          aria-hidden="true"
          className="mx-auto mt-4 block h-1 w-12 rounded-full bg-dark-orange"
        />
        <p className="mx-auto mt-3 max-w-xl leading-relaxed text-slate-600">
          The tools and practical skills I use to build and support client
          websites.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-12">
        {SkillsData.map((group, index) => {
          const isPrimary = index === 0;
          const groupStyle = skillGroups[group.category] || {
            icon: FaCode,
            label: "Technical skills",
          };
          const GroupIcon = groupStyle.icon;

          return (
            <article
              key={group.category}
              className={`group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6 ${
                isPrimary
                  ? "border-darkblue bg-darkblue text-white hover:border-slate-800"
                  : "border-slate-200 bg-white text-slate-700 hover:border-orange-200"
              } ${
                index < 2
                  ? "xl:col-span-6"
                  : "xl:col-span-4"
              } ${index === SkillsData.length - 1 ? "sm:col-span-2 xl:col-span-4" : ""}`}
            >
              {isPrimary && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-14 h-40 w-40 rounded-full bg-white/[0.04] transition-transform duration-500 group-hover:scale-125"
                />
              )}

              <div className="relative z-10 flex w-full flex-col items-center">
                <span
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ring-inset ${
                    isPrimary
                      ? "bg-white/10 text-orange-300 ring-white/15"
                      : "bg-orange-50 text-dark-orange ring-orange-100"
                  }`}
                >
                  <GroupIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p
                  className={`mb-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${
                    isPrimary ? "text-orange-200" : "text-slate-400"
                  }`}
                >
                  {groupStyle.label}
                </p>
                <h3
                  className={`text-lg font-semibold leading-snug sm:text-xl ${
                    isPrimary ? "text-white" : "text-slate-900"
                  }`}
                >
                  {group.category}
                </h3>

                <div
                  aria-hidden="true"
                  className={`my-5 h-px w-full ${
                    isPrimary
                      ? "bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      : "bg-gradient-to-r from-transparent via-slate-200 to-transparent"
                  }`}
                />

                <ul
                  className="flex flex-wrap justify-center gap-2"
                  aria-label={`${group.category} skills`}
                >
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors sm:text-sm ${
                        isPrimary
                          ? "border-white/15 bg-white/10 text-white/90 hover:border-orange-200/60 hover:bg-white/15"
                          : "border-slate-200 bg-slate-50 text-slate-700 hover:border-orange-200 hover:bg-orange-50"
                      }`}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
