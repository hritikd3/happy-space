const data = [
  {
    id: 1,
    title: 'Simple Ways to Relieve Stress',
    desc: 'Lorem wg wegwe ew cjkweiyg hfvibfvnefkfbv jvrvr',
    image: '../image/blog-1.jpg',
    date: '1st may, 2021',
    link: 'https://www.healthline.com/nutrition/16-ways-relieve-stress-anxiety',
  },
  {
    id: 2,
    title: 'What Is Mental Health?',
    desc: 'Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act.',
    image: '../image/blog-2.jpg',
    date: '1st may, 2021',
    link: 'https://www.mentalhealth.gov/basics/what-is-mental-health',
  },
  {
    id: 3,
    title: '5 steps to mental wellbeing',
    desc: 'Evidence suggests there are 5 steps you can take to improve your mental health and wellbeing.',
    image: '../image/blog-3.jpg',
    date: '1st may, 2021',
    link: 'https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/five-steps-to-mental-wellbeing/',
  },
];

function Blogs() {
  return (
    <>
      <section className='blogs' id='blogs'>
        <h1 className='heading'>
          our <span>blogs</span>{' '}
        </h1>
        <div className='box-container'>
          {data.map((blog) => {
            return (
              <div className='box' key={blog.id}>
                <div className='image'>
                  <img src={blog.image} alt='' />
                </div>
                <div className='content'>
                  <div className='icon'>
                    <a href='#'>
                      <i className='fas fa-calendar' /> {blog.date}
                    </a>
                  </div>
                  <h3>{blog.title}</h3>
                  <p>{blog.desc}</p>
                  <a
                    href={blog.link}
                    target='_blank'
                    relation='noreferrer'
                    className='btn'
                  >
                    learn more <span className='fas fa-chevron-right' />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Blogs;
