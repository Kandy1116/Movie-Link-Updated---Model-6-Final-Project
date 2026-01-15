import { Link } from 'react-router-dom';
import '../App.css';

function About() {
  return (
    <>
      <header className="site-header about-header">
        <div className="container header-inner">
          <div className="nav-left">
            <Link to="/" className="nav-home-link">Home</Link>
            <Link to="/about" className="nav-link active">About Us</Link>
            <Link to="/search" className="nav-link">Search</Link>
          </div>
          <div className="nav-right">
            <span className="logo">Longhorn Film Productions</span>
          </div>
        </div>
      </header>

      <main className="container about-page">
        <section className="about-content">
          <div className="about-logo-wrapper">
            <img
              src="/lfp-logo.png"
              alt="Longhorn Film Productions logo"
              className="about-logo"
            />
          </div>
          <div className="about-text">
            <h2 className="about-title">OUR MISSION</h2>
            <p>
              Longhorn Film Productions is an independent feature film and original television series
              production company. LFP is comprised of experienced industry professionals dedicated to
              producing top quality feature films for theatrical distribution. Our ongoing success stems
              from making a wide variety of films – from strong character driven stories, prestigious dramas,
              romantic comedies, psychological thrillers, and wholesome family entertainment.
            </p>
            <p>
              LFP believes that a good story, well told, can have a profound influence on its viewing audience.
              We engage in all aspects of the expanding entertainment industry, from concept through distribution.
              LFP collaborates with other production companies, and filmmakers globally (using state-of-the-art
              technology), thereby creating a diversified entertainment company.
            </p>
            <p>
              Our goal is to fund most of our development and packaging costs, allowing us to retain creative
              control of our projects. LFP is committed to producing quality films and television shows that
              entertain, educate and inspire from all genres, to create an awareness and sensitivity to real
              life and timely social issues in hopes of making this a better world…
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
