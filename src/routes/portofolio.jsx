import Control from "./control";

export default function Portofolio() {
    return (
        <>
        <section classname="container" id="portfolio">
            <div class="main-title">
                <h2>My <span>Portfolio</span><span class="bg-text">My Work</span></h2>
            </div>
            <p class="port-text">
                Here is some of my work that I've done in various programming languages.
            </p>
            <div class="portfolios">
                <div class="portfolio-item">
                    <div class="image">
                        <img src="/img/portfoliophoto.png" alt=""/>
                    </div>
                    <div class="hover-items">
                        <h3>Portfolio</h3>
                        <div class="icons">
                            <a href="/" class="icon">
                            <i class="fa-solid fa-house"></i>
                            </a>
                            <a href="https://github.com/putongyong/Portofolio" class="icon">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
               
                <div class="portfolio-item">
                    <div class="image">
                        <img src="img/cocktailweb.png" alt=""/>
                    </div>
                    <div class="hover-items">
                        <h3>Cocktail Room</h3>
                        <div class="icons">
                            <a href="https://cocktailroom.netlify.app/" class="icon">
                                <i class="fa-solid fa-house"></i>
                            </a>
                            <a href="https://github.com/putongyong/Cocktail" class="icon">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="portfolio-item">
                    <div class="image">
                        <img src="img/port7.jpg" alt=""/>
                    </div>
                    <div class="hover-items">
                        <h3>Django/Python Backend for CocktailRoom</h3>
                        <div class="icons">
                            <a href="https://github.com/putongyong/backendforcocktailroom" class="icon">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                {/*
                <div class="portfolio-item">
                    <div class="image">
                        <img src="img/port4.jpg" alt=""/>
                    </div>
                    <div class="hover-items">
                        <h3>Project Source</h3>
                        <div class="icons">
                            <a href="#" class="icon">
                                <i class="fa-solid fa-house"></i>
                            </a>
                            <a href="#" class="icon">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="portfolio-item">
                    <div class="image">
                        <img src="img/port5.jpg" alt=""/>
                    </div>
                    <div class="hover-items">
                        <h3>Project Source</h3>
                        <div class="icons">
                            <a href="#" class="icon">
                                <i class="fa-solid fa-house"></i>
                            </a>
                            <a href="#" class="icon">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="portfolio-item">
                    <div class="image">
                        <img src="img/port2.jpg" alt=""/>
                    </div>
                    <div class="hover-items">
                        <h3>Project Source</h3>
                        <div class="icons">
                            <a href="#" class="icon">
                                <i class="fa-solid fa-house"></i>
                            </a>
                            <a href="#" class="icon">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="portfolio-item">
                    <div class="image">
                        <img src="img/port7.jpg" alt=""/>
                    </div>
                    <div class="hover-items">
                        <h3>Project Source</h3>
                        <div class="icons">
                            <a href="#" class="icon">
                                <i class="fa-solid fa-house"></i>
                            </a>
                            <a href="#" class="icon">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                */}
            </div>
        </section>
        <Control/>
        </>
    );
  }