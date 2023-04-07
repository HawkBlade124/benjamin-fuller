const Resume = () => {
    return (
      <>
      <h1 className="resumeH1">You have landed on my resume!</h1>
      <p className="paragraphText resumeText">
        This page talks about all of my work experience in Website Development. Whether it be Full-Time jobs, Schooling, or just part of my side gigs. See what I am all about below!
      </p>
      <section className="resumeSection firstSection">
        <div className="jobTitle">Full-Time - FrontEnd Developer</div>
        <div className="d-flex flex-row align-items-center justify-content-between">          
          <h3 className="companyName">XOLogic</h3>
          
          <div className="date">October 2021 - Present</div>      
        </div>
        <div className="jobDescription">
          At XOLogic, I was part of the website development team. I had created many websites with clients that wanted to have the service. I created full suite websites (about pages, contact pages, home pages) for the most part, and I also helped with implementation as well by just creating headers and footers with XOLogic's catalog. Most of the time, they wanted me to match their website header and footers on XO's side. Then, I maintained clients websites with SQL, HTML, CSS, and Javascript.
          <br/>
          <br/>
          <span className="skillSection">Languages used:</span> HTML, CSS, jQuery, Javascript, SQL
        </div>
      </section>      
      <section className="resumeSection">
        <div className="jobTitle">Part Time - Website Developer</div>
        <div className="d-flex flex-row align-items-center justify-content-between">          
          <h3 className="companyName">Bright Bridge Web</h3>
          
          <div className="date">June 2021 - October 2021</div>      
        </div>
        <div className="jobDescription">
          While I was here at Bright Bridge Web for a short time, I made a big impact. I was able to help clients develop their websites in record speed with Wordpress and maintained their sites. I developed 4+ sites.
          <br/>
          <br/>
          <span className="skillSection">Languages used:</span> HTML, CSS, jQuery, Javascript, SQL
          <br/>

          <span className="skillSection">Technologies used:</span> Wordpress, Shopify, Elementor, DIVI
        </div>
      </section>      
      <section className="resumeSection">
        <div className="jobTitle">Knowledgebase Intern</div>
        <div className="d-flex flex-row align-items-center justify-content-between">          
          <h3 className="companyName">BYU - Pathway</h3>
          
          <div className="date">January 2021 - August 2021</div>      
        </div>
        <div className="jobDescription">
          During my internship at BYU - Pathway, I lead a group of students as an assistant with my Supervisor. This is where we developed changes to their knowledge base by upgrading the look and feel of their articles with HTML and CSS. We also developed a chat bot which helped more than 40,000+ students on its first day when it launched.
          <br/>
          <br/>
          <span className="skillSection">Languages used:</span> HTML, CSS
        </div>
      </section>      
      <section className="resumeSection">
        <div className="jobTitle">Teacher's Assistant - Web Development Class</div>
        <div className="d-flex flex-row align-items-center justify-content-between">          
          <h3 className="companyName">BYU - Idaho</h3>          
          <div className="date">Sept 2018 - Jan 2021</div>      
        </div>
        <div className="jobDescription">
          BYU- Idaho provided me many opportunities to become something great. On my first day of class, the teacher was impressed with my advanced HTML and CSS skills and invited me to be an assistant. With this job, I was able to help him tutor students on those languages, which helped me increase my skills in User Experience and User Interaction design.
          <br/>
          <br/>
          <span className="skillSection">Languages used:</span> HTML, CSS
        </div>
      </section>
      </>
    )
  };
  
  export default Resume;