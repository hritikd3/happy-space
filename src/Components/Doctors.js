function Doctors() {
  return (
    <>
      {/* doctors section starts   */}

      <section className='doctors' id='doctors'>
        <h1 className='heading'>
          {' '}
          our <span>doctors</span>{' '}
        </h1>

        <div className='box-container'>
          <div className='box'>
            <img src='../image/doc-1.jpg' alt='' />
            <h3>Dr. Sneha Upadhyay</h3>
            <span>expert doctor</span>
            <div className='share'>
              <a href='#' className='fab fa-facebook-f' onClick={()=> alert('we are collaborating currently with mental health experts and soon onboard them on out portal :)' >
                {' '}
              </a>
              <a href='#' className='fab fa-twitter' onClick={()=> alert('we are collaborating currently with mental health experts and soon onboard them on out portal :)'>
                {' '}
              </a>
              <a href='#' className='fab fa-instagram' onClick={()=> alert('we are collaborating currently with mental health experts and soon onboard them on out portal :)'>
                {' '}
              </a>
              <a href='#' className='fab fa-linkedin ' onClick={()=> alert('we are collaborating currently with mental health experts and soon onboard them on out portal :)'>
                {' '}
              </a>
            </div>
          </div>

          <div className='box'>
            <img src='../image/doc-2.jpg' alt='' />
            <h3>Dr. Vishesh Bandi</h3>
            <span>expert doctor</span>
            <div className='share'>
              <a href='#' className='fab fa-facebook-f' onClick={()=> alert('we are collaborating currently with mental health experts and soon onboard them on out portal :) '> </a>
              <a href='#' className='fab fa-twitter'></a>
              <a href='#' className='fab fa-instagram'onClick={()=> alert('we are collaborating currently with mental health experts and soon onboard them on out portal :)'> </a>
              <a href='#' className='fab fa-linkedin'></a>
            </div>
          </div>

          <div className='box'>
            <img src='../image/doc-3.jpg' alt='' />
            <h3>Rahul Sharma</h3>
            <span>expert doctor</span>
            <div className='share'>
              <a href='# ' className='fab fa-facebook-f' onClick={()=> alert('we are collaborating currently with mental health experts and soon onboard them on out portal :) '>
                {' '}
              </a>
              <a href='# ' className='fab fa-twitter' onClick={()=> alert('we are collaborating currently with mental health experts and soon onboard them on out portal :) '>
                {' '}
              </a>
              <a href='# ' className='fab fa-instagram' onClick={()=> alert('we are collaborating currently with mental health experts and soon onboard them on out portal :)'>
                {' '}
              </a>
              <a href=' # ' className='fab fa-linkedin' onClick={()=> alert('we are collaborating currently with mental health experts and soon onboard them on out portal :)'>
                {' '}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* doctors section ends */}
    </>
  );
}

export default Doctors;
