import "../css/styles.css";
import React from "react";

function Home() {
  return (
    <>
      <header class="header">
        <a href="# " class="logo">
          {" "}
          <i class="fas fa-heartbeat"></i> happyspace.{" "}
        </a>

        <nav class="navbar">
          <a href="#home">home</a>
          {/* <a href="#services">services</a>  */}
          <a href="#about">about</a>
          <a href="#doctors">happyspace</a>
          <a href="#book">book</a>
          <a href="#review">reviews</a>
          <a href="#blogs">blogs</a>
        </nav>

        <div id="menu-btn" class="fas fa-bars"></div>
      </header>

      <section class="home" id="home">
        <div class="image">
          <img src="image/home-img.svg" alt="" />
        </div>

        <div class="content">
          <h3>A healthy mind is an asset</h3>
          <p>
            Do you feel sometime pressurized , lonely, and want to spend some
            quality time , need some folks who think like you , feel like you ?
            We are happySpace , we are in favour of creating a community where a
            person going through with mental problems will get only information
            which will motivate him/her.{" "}
          </p>
          <a href="# " class="btn">
            {" "}
            check happySpace <span class="fas fa-chevron-right"></span>{" "}
          </a>
        </div>
      </section>

      {/* home section ends  */}
    </>
  );
}

export default Home;
