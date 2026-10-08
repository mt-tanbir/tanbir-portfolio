import React from "react";

const Education = () => (
  <section className="px-4 py-5 md:py-7">
    <div className="mx-auto max-w-6xl">
      <div id="education" className="mb-5 text-center">
        <h2 className="mb-2 text-3xl font-medium text-gray-900 sm:text-4xl">
          Education
        </h2>
        <p className="text-lg font-medium text-dark-orange">
          Academic Background
        </p>
      </div>
      <article className="mx-auto max-w-3xl rounded-xl bg-slate-100 p-5 text-left text-gray-700 shadow-md md:p-6">
        <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
          <h3 className="text-lg font-semibold md:text-xl">
            B.Sc. in Computer Science and Engineering (CSE)
          </h3>
          <p className="text-sm text-gray-500 md:text-base">2019–2023</p>
        </div>
        <p className="mt-2">CCN University of Science &amp; Technology</p>
        <p className="text-gray-500">Cumilla, Bangladesh</p>
      </article>
    </div>
  </section>
);

export default Education;
