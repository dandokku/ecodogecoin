import React, { useEffect, useRef } from "react";
import HeroImage from "../../assets/logo.png";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoMdGlobe } from "react-icons/io";
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
    <div className="flex items-center justify-between p-5 px-20" ref={sectionRef}>
      <div className="flex flex-col gap-2 fade-in">
        <h1 className="md:text-8xl">
          <ReactTyped
            strings={["ECODOGE"]}
            typeSpeed={100}
            backSpeed={100}
            loop
            cursorChar={" "}
          />
          <span className="custom-typed-cursor"></span>
        </h1>
        <p className="md:text-4xl fade-in">
          Much Wow, Very{" "}
          <span className="text-primaryColor md:text-5xl">Green</span> Tail
        </p>
        <p className="md:text-xl flex fade-in">
          We combine the playful spirit of Dogecoin with a commitment to saving
          our planet{" "}
        </p>

        <button className="btn1 w-[20%] fade-in" onClick={handleDownload}>
          White Paper
        </button>
      </div>

      <img src={HeroImage} alt="" className="w-[60%] animate-move-up-down fade-in" />
    </div>
  );
}

export default HeroSection;
