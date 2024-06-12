import React, { useEffect, useRef } from "react";

function Tokenomics() {
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
    <div className="p-5 px-20"  ref={sectionRef}>
      <h1 className="md:text-6xl mb-6 text-primaryColor">Tokenomics</h1>

      <div className="flex flex-col gap-5 items-center fade-in">
        <div className="p-4 bg-transparentbackground2 rounded-md max-h-min w-[90vw]">
          <h1 className="font-bold md:text-2xl">
            Max Supply: 379,000,000,000 EcoDoge Coin
          </h1>
          <p>
            EcoDoge Coin boasts a maximum supply of 379,000,000,000 tokens,
            ensuring widespread availability and accessibility for investors and
            users alike. This ample supply is designed to facilitate seamless
            transactions and foster widespread adoption of the EcoDoge
            ecosystem. By offering a generous supply, EcoDoge Coin aims to
            empower individuals worldwide to participate in the future of
            eco-friendly cryptocurrency, driving positive change for both the
            environment and the global community.
          </p>
        </div>

        <div className="p-4 bg-transparentbackground2 rounded-md max-h-min w-[90vw]">
          <h1 className="font-bold md:text-2xl">
            50% Allocated For Public Sale
          </h1>
          <p>
          In a commitment to transparency and inclusivity, we have allocated 50% of our token supply for public sale. This significant portion ensures equal opportunities for all individuals to participate in our ecosystem and contribute to its growth. By opening up half of the token supply to the public, we aim to democratize access to eco-friendly cryptocurrency, empowering a diverse range of investors and supporters to join our movement towards sustainability.
          </p>
        </div>

        <div className="p-4 bg-transparentbackground2 rounded-md max-h-min w-[90vw]">
          <h1 className="font-bold md:text-2xl">
            20% for Seed Investors out of the 50% Public Sale
          </h1>
          <p>
          As part of our commitment to fostering growth and innovation within our ecosystem, 20% of the tokens from the public sale have been specifically earmarked for seed investors. This allocation is designed to attract strategic partners and early supporters who share our vision for a sustainable future powered by blockchain technology. By reserving this portion for seed investors, we aim to incentivize early participation and provide them with an opportunity to contribute to the development and success of our project from the outset.
          </p>
        </div>

        <div className="p-4 bg-transparentbackground2 rounded-md max-h-min w-[90vw]">
          <h1 className="font-bold md:text-2xl">
            20% Reserved for Ecosystem Development
          </h1>
          <p>
          A crucial aspect of our mission is nurturing a vibrant and sustainable ecosystem. To achieve this goal, we have allocated 20% of our token supply for ecosystem development. This allocation will be used to fund projects, initiatives, and partnerships that enhance the functionality, utility, and adoption of our token. By dedicating a significant portion of our resources to ecosystem development, we aim to create a robust and thriving ecosystem that benefits all stakeholders, from investors to developers to end-users.
          </p>
        </div>

        <div className="p-4 bg-transparentbackground2 rounded-md max-h-min w-[90vw]">
          <h1 className="font-bold md:text-2xl">15% for Liquidity Provision</h1>
          <p>
          Ensuring liquidity is essential for a healthy and active marketplace for our token. Therefore, 15% of our token supply has been dedicated to liquidity provision. This allocation will be utilized to establish liquidity pools on decentralized exchanges, facilitating seamless trading of our token with other cryptocurrencies. By maintaining robust liquidity, we aim to enhance the accessibility and stability of our token, enabling users to buy, sell, and trade with ease while promoting price discovery and minimizing slippage.
          </p>
        </div>

        <div className="p-4 bg-transparentbackground2 rounded-md max-h-min w-[90vw]">
          <h1 className="font-bold md:text-2xl">10% for Team and Advisors</h1>
          <p>
          Recognizing the importance of talent and expertise in driving the success of our project, 10% of our token supply has been reserved for the team and advisors. This allocation will be used to attract and retain top talent, incentivize team members and advisors to contribute their skills and knowledge to the project's development, and align their interests with the long-term success of our project. By allocating a portion of tokens to the team and advisors, we aim to build a strong and dedicated team that is committed to realizing the vision of our project and delivering value to its community.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;
