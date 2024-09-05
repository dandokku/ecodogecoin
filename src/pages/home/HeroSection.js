import React, { useEffect, useRef } from "react";
import HeroImage from "../../assets/logo.png";
import WhitePaper from "../../assets/Ecodoge.pdf";
import { ReactTyped } from "react-typed";

function HeroSection() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = WhitePaper;
    link.setAttribute("download", "WhitePaper.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      const elements = section.querySelectorAll(".fade-in");
      elements.forEach((element) => observer.observe(element));
    }

    return () => {
      if (section) {
        const elements = section.querySelectorAll(".fade-in");
        elements.forEach((element) => observer.unobserve(element));
      }
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-12 md:p-10 lg:p-20 my-8" ref={sectionRef}>
      <div className="flex flex-col gap-4 md:w-1/2 fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
          <ReactTyped
            strings={["ECODOGE"]}
            typeSpeed={100}
            backSpeed={100}
            cursorChar={" "}
          />
          <span className="custom-typed-cursor"></span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl fade-in">
          Much Wow, Very{" "}
          <span className="text-primaryColor md:text-3xl lg:text-4xl">Green</span> Tail
        </p>
        <p className="text-base md:text-lg lg:text-xl fade-in">
          We combine the playful spirit of Dogecoin with a commitment to saving our planet
        </p>
        <button
          className="btn1 md:w-1/3 lg:w-1/4 w-2/3 py-2 px-4 text-xl md:text-xl lg:text-xl fade-in"
          onClick={handleDownload}
        >
          White Paper
        </button>
      </div>
      <img src={HeroImage} alt="Hero" className="w-full md:w-1/2 lg:w-2/5 md:block hidden animate-move-up-down fade-in" />
    </div>
  );
}

export default HeroSection;
