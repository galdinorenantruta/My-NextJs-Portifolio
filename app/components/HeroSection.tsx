"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/fotocv2.png"
            alt=""
            width={400}
            height={400}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I am Renan Galdino!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
           A{" "}
            <span className="font-semibold text-teal-600">
              Full Stack developer{" "}
            </span>
            with a strong focus on Frontend
            development, located in Rio de Janeiro, Brazil. I love working with
            React, creating user-friendly designs and building responsive layouts.
            I&#39;m excited about teaming
            up on creative projects that can improve people&#39;s lives.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold cursor-pointer px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        
          <HiArrowDown size={35} className="animate-bounce" />
        
      </div>
    </section>
  );
};

export default HeroSection;
