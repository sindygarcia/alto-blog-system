import HeroImage from "../components/heroImage";
import MiniPost from "../components/miniPost";

export default function HomePage() {
  return (
    <div className="home-page-container">
      <div>
        <div className="hero-image">
          <HeroImage></HeroImage>
          <div className="home-page-moto">
            <span>Enjoy life with better recipes</span>
          </div>
        </div>
        <div className="week-highlights">
          <h2>Week Highlights</h2>
          <section>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/LMLSISU0GFc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                style={{ marginTop: "32px" }}
              ></iframe>
            </div>
            <div>
              <MiniPost></MiniPost>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
