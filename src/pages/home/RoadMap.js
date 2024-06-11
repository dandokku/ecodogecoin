import React from "react";

function RoadMap() {
  return (
    <div className="p-5 px-20 mt-9">
      <h1 className="md:text-5xl font-bold text-primaryColor text-center my-8">ROADMAP</h1>

      <div className="md:flex md:flex-col gap-6 items-center justify-between">
        <div className="flex flex-col items-center p-5 w-[70%] h-max bg-transparentbackground3 rounded-md">
          <h1 className="text-2xl text-primaryColor shadow-sm shadow-bgtextColor bg-transparentbackground3 p-2 mb-2 w-[70%] text-center">
            Phase 1: Official Launch
          </h1>
          <ul className="text-start list-disc list-leaf">
            <li>
              Official launch of EcoDoge coin, including its white paper,
              website, and social media channels.
            </li>
            <li>
              Begin marketing efforts to create awareness about EcoDoge's
              eco-friendly support and its potential impact on the environment.
            </li>
            <li>
              Listing on major cryptocurrency exchanges to increase
              accessibility and liquidity
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center p-5 w-[70%] h-max bg-transparentbackground3 rounded-md">
          <h1 className="text-2xl text-primaryColor shadow-sm shadow-bgtextColor bg-transparentbackground3 p-2 mb-2 w-[70%] text-center">
            Phase 2: Eco-Friendly Initiatives and Partnerships
          </h1>
          <ul className="text-start list-disc list-leaf">
            <li>
              Collaborate with environmental organizations and charities to
              support eco-friendly initiatives using EcoDoge.
            </li>
            <li>
              Implement carbon offset programs where a portion of transaction
              fees goes towards environmental conservation projects.
            </li>
            <li>
              Forge partnerships with sustainable businesses and brands to
              accept Ecodoge as a payment method.
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center p-5 w-[70%] h-max bg-transparentbackground3 rounded-md">
          <h1 className="text-2xl text-primaryColor shadow-sm shadow-bgtextColor bg-transparentbackground3 p-2 mb-2 w-[70%] text-center">
            Phase 3: Technical Enhancements and Community Building
          </h1>
          <ul className="text-start list-disc list-leaf">
            <li>Roll out EcoDoge App for ecological health for our planet.</li>
            <li>
              Launch community-driven initiatives such as hackathons, developer
              grants, and bug bounty programs to encourage innovation and
              participation in the ecosystem.
            </li>
            <li>
              Expand community outreach through online forums, meetups, and
              educational resources to onboard new users and developers.
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center p-5 w-[70%] h-max bg-transparentbackground3 rounded-md">
          <h1 className="text-2xl text-primaryColor shadow-sm shadow-bgtextColor bg-transparentbackground3 p-2 mb-2 w-[70%] text-center">
            Phase 4: 2025 and Beyond - Continued Growth and Innovation
          </h1>
          <ul className="text-start list-disc list-leaf">
            <li>
              Continuously optimize the EcoDoge protocol through research and
              development to stay ahead of technological advancements and
              security threats.
            </li>
            <li>
              Explore interoperability solutions to enable seamless integration
              with other blockchain networks and decentralized applications.
            </li>
            <li>
              Expand adoption by incentivizing merchants, service providers, and
              content creators and eco friendly businesses to accept EcoDoge as
              a form of payment.
            </li>
            <li>
              Foster a vibrant and engaged community through governance
              mechanisms, voting systems, and community-led initiatives to
              ensure decentralization and sustainability
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center p-5 w-[70%] h-max bg-transparentbackground3 rounded-md">
          <h1 className="text-2xl text-primaryColor shadow-sm shadow-bgtextColor bg-transparentbackground3 p-2 mb-2 w-[70%] text-center">
            Phase 5: Long-Term Vision - Global Impact and Sustainability
          </h1>
          <ul className="text-start list-disc list-leaf">
            <li>
              Position EcoDoge as a leading eco-friendly cryptocurrency with a
              global presence and significant impact on environmental
              conservation efforts.
            </li>
            <li>
              Drive mainstream adoption by partnering with governments,
              institutions, and corporations to integrate EcoDoge into their
              sustainability initiatives.
            </li>
            <li>
              Continue to innovate and evolve to address emerging challenges and
              opportunities in the cryptocurrency and environmental space, with
              a focus on long-term sustainability and positive social impact.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RoadMap;
