import React, { useState } from "react";
import "../Css/HotEventPage.css";
import HotEvent from "../assets/hotEvent.jpeg";
import { Link } from "react-router-dom";

const HotEventPage = () => {
  return (
    <>
      <div className="hotEvent-container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="close-btn">&#10006;</button>
        </Link>

        <div className="hotEvent-content">
          <img src={HotEvent}></img>
          <p className="venue">
            <b>
              Welcome to Young Ummah Summer Camp 2023! <br /> Date: 7th to 10th
              of August 2023 <br /> Time: 2pm to 6pm <br /> Venue: Claremont
              High School (Harrow)
            </b>
          </p>
          <p>
            We are delighted to have your children join us for an enriching and
            enjoyable experience based on Islamic values. This comprehensive
            document outlines our vision and the desired outcomes for
            participants from school years 4-9. Our camp program aims to provide
            a well-rounded educational and recreational experience that fosters
            personal growth, builds interpersonal and social skills, and imparts
            essential knowledge about Islam.
          </p>
          <h3>What we offer :</h3>
          <p className="description">
            -<span>Personal growth</span>: Journaling, strengths exploration,
            and goal-setting activities for self-awareness and
            confidence-building.
          </p>
          <p>
            -<span>Interpersonal skills</span>: Communication through debates,
            public speaking, and storytelling circles; collaboration in team
            sports and group art projects; empathy through community service and
            role-playing.
          </p>
          <p>
            -<span>Social skills</span>: Relationship building with icebreaker
            games and buddy systems; leadership development through workshops
            and team projects.
          </p>
          <p>
            -<span>Islamic education</span>: Age-appropriate knowledge through
            storytelling and Islamic art; Qur'an and Hadith studies for
            practical relevance and moral values; character building workshops
            and acts of kindness.
          </p>
          <p>
            -<span>Recreational activities</span>: Sports, outdoor adventures,
            and creative arts workshops for physical fitness and
            self-expression.
          </p>
          <p>
            -<span>Personal reflection and spiritual connection</span>: Guided
            meditation and nature reflection; workshops on Islamic rituals and
            worship; inspirational talks and book club discussions.
          </p>
          <p>
            Join us for an unforgettable summer camp experience that fosters
            personal growth, interpersonal skills, social development, Islamic
            education, recreational fun, and spiritual connection.
          </p>
          <div className="anchor">
            <a href="https://form.jotform.com/231926821533355">Register</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotEventPage;
