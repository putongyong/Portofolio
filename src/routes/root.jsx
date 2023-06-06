import Control from "./control";

export default function Root() {
    return (
        <>
        <header classname="container header active" id="home">
        <div class="header-content">
            <div class="left-header">
                <div class="h-shape"></div>
                <div class="image">
                    <img src="/img/yong.png" alt=""/>
                </div>
            </div>
            <div class="right-header">
                <h1 class="name">
                    Hi, I'm <span>Yong XIE. </span>
                    A Web Developer.
                </h1>
                <p>
                    I love to use ReactJS and Django/Python to create websites
                </p>
                
                <div class="btn-con">
                    <a href="CVYongXIEDjangoReactFR&EN.pdf" class="main-btn">
                        <span class="btn-text">Download CV</span>
                        <span class="btn-icon"><i class="fas fa-download"></i></span>
                    </a>
                </div>
                <p>
                    This is a multipage website created with ReactJS and React-Router-Dom, feel free to browse it and view its source code !
                </p>
                <div class="btn-con">
                        <a href="https://github.com/putongyong/Portofolio" class="main-btn">
                            <span class="btn-text">Source code</span>
                            <span class="btn-icon"><i class="fab fa-github"></i></span>
                        </a>
                </div>
            </div>
        </div>
    </header>
    <Control/>

    </>
    );
  }