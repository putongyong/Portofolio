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
                    I'm a Web Developer, I love to create beautiful and functional websites.
                </p>
                <div class="btn-con">
                    <a href="" class="main-btn">
                        <span class="btn-text">Download CV</span>
                        <span class="btn-icon"><i class="fas fa-download"></i></span>
                    </a>
                </div>
            </div>
        </div>
    </header>
    <Control/>
    </>
    );
  }