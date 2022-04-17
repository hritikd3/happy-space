import React from "react";

function Home() {
  return (
    <>
      {/* about section starts  */}
      <section className="about" id="about">
        <div className="image">
          <img src={"assests/image/about-img.png"} alt="" />
        </div>
        <div className="content">
          <span>why choose us?</span>
          <h3 className="title">what's make our food delicious!</h3>
          <p>our customers are our first periority</p>
          <a href="#popular" className="btn">
            read more
          </a>
          <div className="icons-container">
            <div className="icons">
              <img src={"assests/image/serv-1.png"} alt="" />
              <h3>fast delivery</h3>
            </div>
            <div className="icons">
              <img src={"assests/image/serv-2.png"} alt="" />
              <h3>fresh food</h3>
            </div>
            <div className="icons">
              <img src={"assests/image/serv-3.png"} alt="" />
              <h3>best quality</h3>
            </div>
            <div className="icons">
              <img src={"assests/image/serv-4.png"} alt="" />
              <h3>24/7 support</h3>
            </div>
          </div>
        </div>
      </section>
      {/* about section ends */}
    </>
  );
}

export default Home;
