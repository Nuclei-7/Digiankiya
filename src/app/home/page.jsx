import Head from "next/head";
import Image from "next/image";

const Home = () => {
  return (
    <>
    <Head>


        
    </Head>
      <section id="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="promo-title">We can make Technology Accessible</p>
              <p>
                Exceptional IT solutions to small businesses, healthcare
                units, organizations, and institutions
              </p>
              <a href="https://www.youtube.com/channel/UC7vSKFGYDlLre-9jVYkVyOA">
                <img src="./images/play.png" className="play-btn" alt="Play" />
                Watch Tutorials
              </a>
            </div>
            <div className="col-md-6 text-center">
              <Image
                src="/images/home2.png" // Assuming your images are in the "public" folder
                className="img-fluid"
                alt="Home Image"
                width={100} // Set your desired width
                height={100} // Set your desired height
              />
            </div>
          </div>
        </div>
        <img src="/images/wave1.png" className="bottom-img" alt="Wave" />
      </section>
    </>
  );
};

export default Home;
