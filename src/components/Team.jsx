import React from "react";
import { data } from "../restApi.json";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
          

At Great Food, our team is the heart and soul of our establishment. Each member brings a unique blend of talent, passion, and dedication that collectively drives our mission to deliver exceptional dining experiences.

Our chefs are culinary maestros, with years of experience and a deep love for the craft of cooking. They meticulously select the finest ingredients and combine them with innovative techniques to create dishes that are both visually stunning and delectably flavorful.

Our friendly and professional service staff are committed to ensuring that every guest feels welcomed and valued. From the moment you walk through our doors, they work tirelessly to provide attentive and personalized service, making sure that your dining experience is nothing short of extraordinary.

Behind the scenes, our management team coordinates every detail with precision and care, ensuring that everything runs smoothly and efficiently. Their leadership and vision keep Great Food at the forefront of Gandhidham's dining scene.

Together, our team embodies the spirit of Great Food – a dedication to excellence, a passion for great food, and a commitment to making every visit memorable. We look forward to welcoming you and sharing our love for culinary artistry with you.
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;