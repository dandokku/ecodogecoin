import BackgroundImage from "../../assets/bg2.jpg";
import { ReactTyped } from "react-typed";
import { useEffect, useRef } from "react";

const links = [
  { name: "Planting Trees", href: "#" },
  { name: "Cleaning Oceans", href: "#" },
  { name: "Supporting Renewable Energies", href: "#" },
];
const stats = [
  {
    name: "For every transaction, a tree gets planted",
    value: "Reforestation",
  },
  {
    name: "A portion of transaction fees goes toward ocean cleanup efforts",
    value: "Ocean Health",
  },
  {
    name: "Word of mouth (WOM) campaigns and social media platforms, email marketing",
    value: "Marketing and Community Building:",
  },
  {
    name: "#EcoDogeChallenge: Show off your best tree-planting dance and barking moves! Your contribution should be fun",
    value: "Eco-Friendly Meme Coin With Purpose",
  },
];

export default function AboutSection() {

    const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target); // Optional: Stop observing after the first trigger
          }
        });
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    const elements = containerRef.current.querySelectorAll(".fade-in-left");
    elements.forEach((el) => observer.observe(el));

    return () => {
      if (containerRef.current) {
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <div className="relative isolate overflow-hidden mt-24 px-8 sm:py-20">
      <div className="relative h-full w-full">
        <img
          src={BackgroundImage}
          alt="Eco-friendly background"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(3, 50, 50, 0.9)] to-[rgba(3, 50, 50, 0.9)] opacity-50"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            className="text-2xl font-bold tracking-tight text-primaryColor sm:text-4xl w-full min-h-[4rem]">
            <ReactTyped
              strings={[
                "Much Green, Very Efficient",
                "Eco-Friendly Cryptocurrency",
                "Join the Green Revolution",
                "Planting Trees with Every Transaction",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            EcoDoge aims to create a decentralized, eco-friendly cryptocurrency
            that not only brings joy to its community but also contributes to
            reforestation efforts and ocean health. We believe that by
            harnessing the power of memes and blockchain, we can make a positive
            impact on the environment. 🌲
          </p>
        </div>

        <div
          ref={containerRef}
          className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"
        >
 <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="fade-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.name}
                className="flex flex-col-reverse fade-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <dt className="text-base leading-7 text-gray-300">
                  {stat.name}
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
