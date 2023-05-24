import Control from "./control";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Contact() {
    return (
      <>
      <section classname="container contact" id="contact">
            <div class="contact-container">
                <div class="main-title">
                    <h2>Contact <span>Me</span><span class="bg-text">Contact</span></h2>
                </div>
                <div class="contact-content-con">
                    <div class="left-contact">
                        <h4>Contact me here</h4>
                        <p>
                            Feel free to reach out to me with any inquiries, collaborations, or just to say hello!
                        </p>
                        <div class="contact-info">
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <span>Location</span>
                                </div>
                                <p>Paris, France</p>
                            </div>
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-envelope"></i>
                                    <span>Email</span>
                                </div>
                                <p>
                                    <span>xieyong0226@gmail.com</span>
                                </p>
                            </div>
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-user-graduate"></i>
                                    <span>Education</span>
                                </div>
                                <p>
                                    <span>Sorbonne-Pantheon University, Paris</span>
                                </p>
                            </div>
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-user-graduate"></i>
                                    <span>Mobile Number</span>
                                </div>
                                <p>
                                    <span>(+33) 6 50 44 39 19</span>
                                </p>
                            </div>
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-globe-africa"></i>
                                    <span>Languages</span>
                                </div>
                                <p>
                                    <span>French, English, Chinese</span>
                                </p>
                            </div>
                        </div>
                        <div class="contact-icons">
                            <div class="contact-icon">
                                <a href="https://www.linkedin.com/in/yong-xie-65451a218/" target="_blank" className="glow-on-hover">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://github.com/putongyong" target="_blank" className="glow-on-hover">
                                    <i class="fab fa-github"></i>
                                </a>
                                <a href="https://twitter.com/Vry47gFx0slGJ85" target="_blank" className="glow-on-hover">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=100006906286380" target="_blank" className="glow-on-hover">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="right-contact">
                        <form action="https://api.web3forms.com/submit" method="POST" class="contact-form">
                            <input type="hidden" name="access_key" value="57dae735-6efa-4508-9473-1ec4dc2ac128"/>
                            <div class="input-control i-c-2">
                                <input type="text"  name="name" required placeholder="YOUR NAME"/>
                                <input type="email" name="email" required placeholder="YOUR EMAIL"/>
                            </div>
                            <div class="input-control">
                                <input type="text"  name="subject" required placeholder="ENTER SUBJECT"/>
                            </div>
                            <div class="input-control">
                                <textarea name="message" id="" cols="15" rows="8" placeholder="Message Here..."></textarea>
                            </div>
                            <input type="hidden" name="redirect" value="https://web3forms.com/success"/>     
                            <div class="submit-btn">
                                <a class="main-btn">
                                    <button type="submit">Submit</button>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <Control/>
        </>
    );
  }