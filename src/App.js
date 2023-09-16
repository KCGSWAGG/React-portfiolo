import React from 'react';
import './App.css'; // You can create this file for custom styles
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function App() {
  return (
    <div>
      <header className="bg-blue-500 p-4 text-white flex justify-between items-center">
        <nav>
          <a href="#about" className="mr-4">About Me</a>
          <a href="#projects" className="mr-4">Work</a>
          <a href="#contact">Contact Me</a>
        </nav>
        <p>Tyreal Worley</p>
      </header>

      <div className="p-4">
        <section id="about" className="about-me">
          <h1 className="text-2xl font-bold">About Me</h1>
          <article className="mt-4">
            <p>My Name is Tyreal Worley I am 25 years old my birthday is November 14th. My favorite Sports team is Ohio state College football.
              I currently work for IBM as a system service representative, the role is a technical position I Fix computer, printer, servers and etc. I am from White oak North Carolina
              I moved to charlotte at 9 years old and been here since. I went to a couple college out of highschool but i recived my assiocate degree in cyber security from ECPI.
              A few hobbies of mine are playing Flag Football, Baksetball, streaming on twitch, Cars, and cooking. </p>
            <img src="C:\Users\Tyreal\Pictures\me.jpg" alt="Picture of me" width="250" height="300" className="mt-4" />
          </article>
        </section>
        <main className="p-4">
         
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://user-images.githubusercontent.com/129568159/268475010-1ff65f81-e256-46d0-82b3-9118fc32bbea.png" />
      <Card.Body>
        <Card.Title>CSS CheatSheet</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">CSS cheatsheet Webpage</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://user-images.githubusercontent.com/129568159/268475012-1314ef2e-bcd3-4b7e-90d0-e6602d9a89c6.png" />
      <Card.Body>
        <Card.Title>Horiseon</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button href= "https://kcgswagg.github.io/horizon-refactor/" variant="primary">Horiseon Webpage</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://user-images.githubusercontent.com/129568159/268475011-b8772d07-f8f5-4806-b9ae-5e3c1f9fec10.png" />
      <Card.Body>
        <Card.Title>Sports Tracker</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button href = "https://kcgswagg.github.io/sports-tracker/" variant="primary">Sports tracker Webpage</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://user-images.githubusercontent.com/129568159/268475014-edbb7a2c-cae0-4172-8016-ec5b7525fbcc.png" />
      <Card.Body>
        <Card.Title>Student Marks</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button href = ""variant="primary">Student Marks Webpage</Button>
      </Card.Body>
    </Card>
  
        </main>
        <section id="contact" className="contact me p-4">
          <h1 className="text-2xl font-bold">Contact Me</h1>
          <article className="mt-4">
            <ul>
              <li>Phone number: 704-458-1553</li>
              <li>Email: TyrealWorley999@yahoo.com</li>
              <li><a href="https://www.linkedin.com/in/tyreal-worley-72b544185/" className="text-blue-500">linkedin</a></li>
            </ul>
          </article>
        </section>
      </div>
      <footer className="bg-gray-300 p-4 text-center">Thanks for stopping by have a nice day!!</footer>
    </div>
  );
}

export default App;
