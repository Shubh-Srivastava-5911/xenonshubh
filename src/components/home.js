import React from "react";
import image1 from "../components/image1.jpg";
import image2 from "../components/image2.avif";
import image3 from "../components/image3.jpg";

export default function Home() {
  return (
    <div>
      <ul className="navbar">
        <li>
          <a href="#contact">Contact Us</a>
        </li>
        <li>
          <a href="#home">Home</a>
        </li>
      </ul>

      <h1>space age</h1>
      <h2>explore the international space station and get a chance to work with leading scientist at NASA</h2>

      <img src={image1} alt="Image 1" height={400} width={500} />
      <img src={image2} alt="Image 2" height={400} width={500} />
      <img src={image3} alt="Image 3" height={400} width={500} />
      <p>
        The International Space Station (ISS) is a remarkable scientific and technological achievement, serving as a symbol of international cooperation in space exploration. It is a habitable space station located in low Earth orbit and serves as a laboratory for scientific research, technological development, and international collaboration.

        The ISS is a joint project involving space agencies from multiple countries, including NASA (United States), Roscosmos (Russia), JAXA (Japan), ESA (European Space Agency), and CSA (Canadian Space Agency). It was first launched in 1998 and has been continuously inhabited since November 2000.

        The space station is an impressive engineering feat, consisting of multiple modules that provide living quarters, workspaces, scientific laboratories, and communication facilities. It orbits the Earth at an altitude of approximately 400 kilometers (250 miles) and travels at a speed of about 28,000 kilometers per hour (17,500 miles per hour), completing an orbit around the Earth in roughly 90 minutes.

        The ISS serves as a unique platform for conducting experiments in various scientific fields, including physics, biology, astronomy, and human physiology. It has contributed to numerous advancements in space technology, medical research, and our understanding of living and working in space. The station also plays a crucial role in testing technologies and conducting research that will support future long-duration space missions, such as those to the Moon and Mars.

        Furthermore, the ISS serves as a symbol of international collaboration, bringing together astronauts, scientists, and engineers from different countries to work towards a common goal. It highlights the potential for peaceful cooperation in space exploration and showcases the power of international partnerships.

        The ISS has been visited by astronauts from different nations, and they conduct research, maintain the station, and carry out spacewalks to perform necessary repairs and upgrades. It represents a significant milestone in human space exploration and stands as a testament to the remarkable achievements that can be accomplished through international cooperation and the pursuit of knowledge beyond our planet.
      </p>

    </div>
  );
}