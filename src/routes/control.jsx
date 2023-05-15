import { Link } from 'react-router-dom';

export default function Control() {
  return (
    <>
      <div className="controls">
        <Link to="/" className="control" data-id="home">
          <i className="fas fa-home"></i>
        </Link>
        <Link to="/about" className="control" data-id="about">
          <i className="fas fa-user"></i>
        </Link>
        <Link to="/portofolio" className="control" data-id="portofolio">
          <i className="fas fa-briefcase"></i>
        </Link>
        <Link to="/blog" className="control" data-id="blog">
          <i className="far fa-newspaper"></i>
        </Link>
        <Link to="/contact" className="control" data-id="contact">
          <i className="fas fa-envelope-open"></i>
        </Link>
      </div>
      <div className="theme-btn">
        <i className="fas fa-adjust"></i>
      </div>
    </>
  );
}
