

const PageContent = () => {
  return (
    <div><div className="container-fluid p-0">
    {/* About*/}
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h2 className="mb-0">
          Jhellytha Putri 
          <span className="text-primary"> Kalantow</span>
        </h2>
        <div className="subheading mb-5">
           Kaimana · West Papua · 0852-5428-9097 · 
          <a href="mailto:name@email.com"> kalantowwpoetri@gmail.com</a>
        </div>
        <p className="lead mb-5">As an experienced UI/UX designer, I have crafted creative solutions through engaging interface designs and user-centric experiences.</p>
        <div className="social-icons">
          <a className="social-icon" href="https://www.instagram.com/putrikalantow_/"><i className="fab fa-instagram" /></a>
          <a className="social-icon" href="https://github.com/poetriiij"><i className="fab fa-github"/></a>
          <a className="social-icon" href="https://twitter.com/poetriiij"><i className="fab fa-twitter" /></a>
          <a className="social-icon" href="https://open.spotify.com/user/31zeyt6wel7gejdgav5bldhwq5my?si=471f131f0f694e70"><i className="fab fa-spotify" /></a>
        </div>
      </div>
    </section>
    <hr className="m-0" />
    {/* Experience*/}
    <section className="resume-section" id="experience">
      <div className="resume-section-content">
        <h2 className="mb-5">Experience</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Computer Science Student Assosiation</h3>
            <div className="subheading mb-3">Executive Boards </div>
            <p>I believe that being open and transparent is crucial for building trust. Throughout my term on Executive Boards, I am committed to keeping things clear, communicating openly, and involving students in decision-making processes.</p>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">September 2022 - Present</span></div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Computer Science Faculty Day 2022</h3>
            <div className="subheading mb-3">Health Division</div>
            <p>Engaged as Health Division Committee Member for FIK Day 2022.</p>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">September 2022 - November 2022</span></div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Computer Science Faculty Day 2023</h3>
            <div className="subheading mb-3">Event Division Coordinator</div>
            <p>I have an experience in successfully leading the big event and collaborating with my team members, overseeing all responsibilities, and contributing innovative ideas to ensure the success event.</p>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">January 2023 - May 2023</span></div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="flex-grow-1">
            <h3 className="mb-0">Creative Circle</h3>
            <div className="subheading mb-3">Chief Marketing Officer</div>
            <p>I oversee the marketing and promotion strategies at Creative Circle, implementing plans to boost sales. My role involves crafting and executing marketing initiatives, ensuring a strong focus on driving sales growth for the company.</p>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">January 2023 - April 2023</span></div>
        </div>
      </div>
    </section>
    <hr className="m-0" />
    {/* Education*/}
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">Education</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Universitas Klabat</h3>
            <div className="subheading mb-3">Bachelor of Computer Science</div>
            <div>Faculty of Computer Science - Information System</div>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">August 2021 - June 2025</span></div>
        </div>
      </div>
    </section></div>
  <hr className="m-0" /></div>
  )
}

export default PageContent