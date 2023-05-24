import Control from "./control";

export default function About() {
    return (
        <>
        <section classname="container about" id="about">
        <div class="main-title">
                <h2>About <span>me</span><span class="bg-text">my stats</span></h2>
            </div>
            <h4 class="stat-title">Information and Certificates</h4>
            <div class="about-container">
                <div class="left-about">
                    
                    <p>
                    Since 2022, I have completed courses on FreeCodeCamp and Coursera, which have allowed me to acquire skills in various areas of web development. Starting with front-end skills such as HTML, CSS, and JavaScript, I gradually explored libraries and frameworks such as Bootstrap, jQuery, and React. 
                    </p>
                    <p>
                    My interest in back-end development grew, and I became particularly fascinated with Python. This led me to learn Django, which I find to be a compelling framework for managing URLs, SQL databases, and security.
                    My passion for React and Django has made them my primary technologies for web development.
                    </p>
                    <div class="btn-con">
                        <a href="https://github.com/putongyong" class="main-btn">
                            <span class="btn-text">Github page</span>
                            <span class="btn-icon"><i class="fab fa-github"></i></span>
                        </a>
                    </div>
                </div>
            <div class="right-about">
                    <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/W7EWAW3FSTS2/"  class="about-item">
                        <div class="abt-text">
                            <p class="large-text">Coursera</p>
                            <p class="small-text">Django <br /> Specialization</p>
                        </div>
                    </a>
                    <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/LDSPQV6L6CYD/"  class="about-item">
                        <div class="abt-text">
                            <p class="large-text">Coursera</p>
                            <p class="small-text">Python <br /> Specialization</p>
                        </div>
                    </a>
                    <a href="https://www.freecodecamp.org/certification/fcc72d490ec-9d38-409a-bc9e-0cdc686b3c3c/relational-database-v8/"  class="about-item">
                        <div class="abt-text">
                            <p class="large-text">FreeCode</p>
                            <p class="large-text">Camp</p>
                            <p class="small-text">Relational <br /> Database</p>
                        </div>
                    </a>
                    <a href="https://www.freecodecamp.org/certification/fcc72d490ec-9d38-409a-bc9e-0cdc686b3c3c/front-end-development-libraries/"  class="about-item">
                        <div class="abt-text">
                            <p class="large-text">FreeCode</p>
                            <p class="large-text">Camp</p>
                            <p class="small-text">Frontend <br /> Libraries </p>
                        </div>
                    </a>
                    <a href="https://www.freecodecamp.org/certification/fcc72d490ec-9d38-409a-bc9e-0cdc686b3c3c/javascript-algorithms-and-data-structures/"class="about-item">
                        <div class="abt-text">
                            <p class="large-text">FreeCode</p>
                            <p class="large-text">Camp</p>
                            <p class="small-text">Javascript </p>
                        </div>
                    </a>
                    <a href="https://www.freecodecamp.org/certification/fcc72d490ec-9d38-409a-bc9e-0cdc686b3c3c/responsive-web-design/" class="about-item">
                        <div class="abt-text">
                            <p class="large-text">FreeCode</p>
                            <p class="large-text">Camp</p>
                            <p class="small-text">Responsive <br /> Web-Design</p>
                        </div>
                    </a>
                </div>

                </div>
            <div class="about-stats">
                <h4 class="stat-title">My Skills</h4>
                <div class="progress-bars">
                    <div>
                        <h4 class="small-title">Frontend</h4>
                        <div class="progress-bar">
                        <p class="prog-title">html5</p>
                        <div class="progress-con">
                            <p class="prog-text">80%</p>
                            <div class="progress">
                                <span class="html"></span>
                            </div>
                        </div>
                        </div>
                        <div class="progress-bar">
                            <p class="prog-title">css3</p>
                            <div class="progress-con">
                                <p class="prog-text">85%</p>
                                <div class="progress">
                                    <span class="css"></span>
                                </div>
                            </div>
                        </div>
                        <div class="progress-bar">
                            <p class="prog-title">Javascript</p>
                            <div class="progress-con">
                                <p class="prog-text">87%</p>
                                <div class="progress">
                                    <span class="js"></span>
                                </div>
                            </div>
                        </div>
                        <div class="progress-bar">
                            <p class="prog-title">ReactJS</p>
                            <div class="progress-con">
                                <p class="prog-text">75%</p>
                                <div class="progress">
                                    <span class="react"></span>
                                </div>
                            </div>
                        </div>
                        <div class="progress-bar">
                            <p class="prog-title">Bootstrap</p>
                            <div class="progress-con">
                                <p class="prog-text">75%</p>
                                <div class="progress">
                                    <span class="boostrap"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 class="small-title">Backend</h4>
                        <div class="progress-bar">
                            <p class="prog-title">python</p>
                            <div class="progress-con">
                                <p class="prog-text">85%</p>
                                <div class="progress">
                                    <span class="python"></span>
                                </div>
                            </div>
                        </div>
                        <div class="progress-bar">
                            <p class="prog-title">Django</p>
                            <div class="progress-con">
                                <p class="prog-text">85%</p>
                                <div class="progress">
                                    <span class="django"></span>
                                </div>
                            </div>
                        </div>
                        <div class="progress-bar">
                            <p class="prog-title">SQL</p>
                            <div class="progress-con">
                                <p class="prog-text">75%</p>
                                <div class="progress">
                                    <span class="sql"></span>
                                </div>
                            </div>
                        </div>
                        <div class="progress-bar">
                            <p class="prog-title">REST API</p>
                            <div class="progress-con">
                                <p class="prog-text">75%</p>
                                <div class="progress">
                                    <span class="api"></span>
                                </div>
                            </div>
                        </div>
                        <div class="progress-bar">
                            <p class="prog-title">Git</p>
                            <div class="progress-con">
                                <p class="prog-text">75%</p>
                                <div class="progress">
                                    <span class="git"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h4 class="stat-title">My Timeline</h4>
            <div class="timeline">
                <div>
                    <div class="timeline-item">
                        <div class="tl-icon">
                            <i class="fas fa-briefcase"></i>
                        </div>
                        <p class="tl-duration">2023 - present</p>
                        <h5>Web Developer<span> - Freelancer & Open to work</span></h5>
                        <p>
                            - Working on personal and commercial projects
                        </p>
                        <p>
                            - Learning algorithms on Leetcode
                        </p>
                    </div>
                    <div class="timeline-item">
                        <div class="tl-icon">
                            <i class="fas fa-briefcase"></i>
                        </div>
                        <p class="tl-duration">2023</p>
                        <h5>Self-taught Developper<span> - Coursera</span></h5>
                        <p>
                            - Working on Django projects by creating websites
                        </p>
                        <p>
                            - Converting skills from javascript to python
                        </p>
                    </div>
                    <div class="timeline-item">
                        <div class="tl-icon">
                            <i class="fas fa-briefcase"></i>
                        </div>
                        <p class="tl-duration">2022 - 2023</p>
                        <h5>Self-taught Developper<span> - FreeCodeCamp</span></h5>
                        <p>
                            - Frontend development
                        </p>
                        <p>
                            - Database management skills
                        </p>
                    </div>
                </div>
                    

                <div>
                    <div class="timeline-item">
                        <div class="tl-icon">
                            <i class="fas fa-briefcase"></i>
                        </div>
                        <p class="tl-duration">2019 - present</p>
                        <h5>Phd Candidat of Philosophy<span> - University Paris 1 Phantheon-Sorbonne, Paris, France</span></h5>
                        <p>
                            - Project organization skills
                        </p>
                        <p>
                            - Critical thinking
                        </p>
                    </div>
                    <div class="timeline-item">
                        <div class="tl-icon">
                            <i class="fas fa-briefcase"></i>
                        </div>
                        <p class="tl-duration">2017 - 2019</p>
                        <h5>Master of Philosophy<span> - University Paris 1 Phantheon-Sorbonne, Paris, France</span></h5>
                        <p>
                            - Sucessfully defend my thesis on early modern philosophy
                        </p>
                        <p>
                            - Critical thinking
                        </p>
                    </div>
                    <div class="timeline-item">
                        <div class="tl-icon">
                            <i class="fas fa-briefcase"></i>
                        </div>
                        <p class="tl-duration">2013 - 2017</p>
                        <h5>Bachelor of Philosophy<span> - Fudan University, Shanghai, China</span></h5>
                        <p>
                            - Outstanding academic performance
                        </p>
                        <p>
                            - International background
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <Control/>
        </>
    );
  }