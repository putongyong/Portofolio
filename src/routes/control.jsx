import { NavLink } from 'react-router-dom';
import Theme from './theme';

export default function Control() {
  return (
    <>
      <div className="controls">
        <NavLink to="/" className="control glow-on-hover" data-id="home">
          <i className="fas fa-home"></i>
        </NavLink>
        <NavLink to="/about" className="control glow-on-hover" data-id="about">
          <i className="fas fa-user"></i>
        </NavLink>
        <NavLink to="/portofolio" className="control glow-on-hover" data-id="portofolio">
          <i className="fas fa-briefcase"></i>
        </NavLink>
        {/*
        <NavLink to="/blog" className="control glow-on-hover" data-id="blog">
          <i className="far fa-newspaper"></i>
        </NavLink>
        */}
        <NavLink to="/contact" className="control glow-on-hover" data-id="contact">
          <i className="fas fa-envelope-open"></i>
        </NavLink>
      </div>
      <Theme/>
    </>
  );
}