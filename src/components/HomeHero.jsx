import Button from "./Button";
import "./style/HomeHero.css";

import hero_1 from "/src/components/assets/hero_1.jpg";
import hero_2 from "/src/components/assets/hero_2.avif";

const HomeHero = () => {
  return (
    <>
      <section id="hero">
        <div className="content_wripper">
          <div className="hero_content_1">
            <h1 className="hero_title">
              Don't just dream <br /> learn with us
            </h1>
            <p className="hero_description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptate accusantium corrupti accusamus ipsa molestiae ad?
            </p>
            <Button text={"Read More"} />
          </div>
          <div className="hero_content_2">
            <div className="image_wripper">
              <img src={hero_1} alt="" className="img" />
            </div>
            <div className="sub_text_wripper">
              <p className="lorem_text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi culpa quia explicabo illo? Enim a reiciendis blanditiis
                perferendis voluptatum dolorem?
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHero;
