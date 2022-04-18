import '../css/styles.css';
import React from 'react';

function Home() {
  return (
    <>
      <header className='header'>
        <a href='# ' className='logo'>
          <i className='fas fa-heartbeat'></i> happyspace.
        </a>

        <nav className='navbar'>
          <a href='#home'>home</a>
          <a href='#about'>about</a>
          <a href='#doctors'>happyspace</a>
          <a href='#book'>book</a>
          <a href='#review'>reviews</a>
          <a href='#blogs'>blogs</a>
        </nav>

        <div id='menu-btn' className='fas fa-bars'></div>
      </header>

      <section className='home' id='home'>
        <div className='image'>
          <img src='../image/Headache-bro.svg' alt='' />
        </div>

        <div className='content'>
          <h3>A healthy mind is an asset</h3>
          <p>
            Do you feel sometime pressurized , lonely, and want to spend some
            quality time , need some folks who think like you , feel like you ?
            We are happySpace , we are in favour of creating a community where a
            person going through with mental problems will get only information
            which will motivate him/her.
          </p>
          <a href='# ' className='btn'>
            check happySpace <span className='fas fa-chevron-right'></span>
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
