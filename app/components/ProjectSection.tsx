import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Ecommerce Website",
    description:
      "full stack react ecommerce website using reactjs, redux toolkit and firebase, with modern UI and UX",
    image: "/ecommerce.png",

    link: "https://www.linkedin.com/posts/renan-galdino_reactjs-reduxtoolkit-reactstrap-activity-7081635819119083520-Qdxa?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "ReduxToolkit store app",
    description:
      "This project demonstrate the power and efficiency of React and Redux Toolkit in building a modern store application.",
    image: "/reduxstore.png",

    link: "https://www.linkedin.com/posts/renan-galdino_reactjs-reduxtoolkit-redux-activity-7079798657574682624-dL0p?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: " React + TailWind webpage",
    description:
      "Amazing design project, this is a Real State WebPage developed using React + TailWind",
    image: "/realstate.png",

    link: "https://www.linkedin.com/posts/renan-galdino_reactjs-tailwindcss-html5-activity-7074716969190440960-pHg5?utm_source=share&utm_medium=member_desktop",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <div className="flex flex-col md:flex-row md:space-x-12">
                <div className=" md:w-1/2">
                  <Link href={project.link}>
                    <Image
                      src={project.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </Link>
                </div>
                <div className="mt-8 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={project.link} target="_blank">
                      <BsArrowUpRightSquare
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
