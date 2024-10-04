"use client "
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <Communication />
    </div>
  );
}


function Navbar() {
  return (
    <div className="navbar">


      <div className="navbarLeft">
        <p>FATİH CAN KAYA</p>
      </div>

      <div className="navbarRight">
        <img src="/images/ben.jpg" alt="" />
      </div>
    </div>
  )
}


function Header() {
  return (
    <div className="header">

      <div className="headerUp">
        <p>Merhabaa! <br /> Ben Fatih Can Kaya.</p>
      </div>
      <div className="headerDown">
        <p>merhaba ben Fatih İstanbul' da yaşayan frontend geliştiricisiyim. Temiz kod yazmayı ve düzenli çalışmayı çok severim.  </p>
      </div>
    </div>
  )
}

function Skills() {
  return (

    <div className="skills">
      <div className="skill">
        <h3>HTML</h3>
        <p>6 ay</p>
      </div>

      <div className="skill">
        <h3>css</h3>
        <p>6 ay</p>
      </div>

      <div className="skill">
        <h3>react</h3>
        <p>6 ay</p>
      </div>

      <div className="skill">
        <h3>figma</h3>
        <p>6 ay</p>
      </div>

      <div className="skill">
        <h3>HTML</h3>
        <p>6 ay</p>
      </div>

      <div className="skill">
        <h3>HTML</h3>
        <p>6 ay</p>
      </div>
    </div>
  )
}

function Projects(){
  return(
    <div className="projects">
     

      <div className="project">
        <img src="/images/Bitmap.png" alt="" />
        
        <div className="projectText">
          <span>DESIGN PORTFOLIO</span>
          <p>HTML/CSS</p>
        </div>
      </div>
      <div className="project">
        <img src="/images/Bitmap.png" alt="" />

        <div className="projectText">
          <span>DESIGN PORTFOLIO</span>
          <p>HTML/CSS</p>
        </div>
      </div>
      <div className="project">
        <img src="/images/Bitmap.png" alt="" />

        <div className="projectText">
          <span>DESIGN PORTFOLIO</span>
          <p>HTML/CSS</p>
        </div>
      </div>
      <div className="project">
        <img src="/images/Bitmap.png" alt="" />

        <div className="projectText">
          <span>DESIGN PORTFOLIO</span>
          <p>HTML/CSS</p>
        </div>
      </div>
    </div>
  )
}

function Communication(){
  return (
    <div className="iletisim">
      <h1>Bana ulaşın</h1>

      <div className="iletisimText">
      <p>  Merhaba bana ulaşmak için ve proje ile ilgili işbirliği yapmak isterseniz <span>Fatihhkayaaaa@gmail.com </span>adresinden ulaşabilirsiniz.</p>
      </div>
    </div>
  )
}
