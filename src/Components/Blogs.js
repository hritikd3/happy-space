function Blogs() {
  return (
    <>
      <section className="blogs" id="blogs">
        <h1 className="heading">
          {" "}
          our <span>blogs</span>{" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src="../image/blog-1.jpg" alt="" />
            </div>
            <div className="content">
              <div className="icon">
                <a href="#">
                  {" "}
                  <i className="fas fa-calendar" /> 1st may, 2021{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fas fa-user" /> by admin{" "}
                </a>
              </div>
              <h3>blog title goes here</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident, eius.
              </p>
              <a href="#" className="btn">
                {" "}
                learn more <span className="fas fa-chevron-right" />{" "}
              </a>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="../image/blog-2.jpg" alt="" />
            </div>
            <div className="content">
              <div className="icon">
                <a href="# ">
                  {" "}
                  <i className="fas fa-calendar" /> 1st may, 2021{" "}
                </a>
                <a href="# ">
                  {" "}
                  <i className="fas fa-user" /> by admin{" "}
                </a>
              </div>
              <h3>blog title goes here</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident, eius.
              </p>
              <a href="# " className="btn">
                {" "}
                learn more <span className="fas fa-chevron-right" />{" "}
              </a>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="../image/blog-3.jpg" alt="" />
            </div>
            <div className="content">
              <div className="icon">
                <a href="# ">
                  {" "}
                  <i className="fas fa-calendar" /> 1st may, 2021{" "}
                </a>
                <a href="# ">
                  {" "}
                  <i className="fas fa-user" /> by admin{" "}
                </a>
              </div>
              <h3>blog title goes here</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident, eius.
              </p>
              <a href="# " className="btn">
                {" "}
                learn more <span className="fas fa-chevron-right" />{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
