import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";
import myPicture from './img/my picture.png';


  const Header = () => (
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started with React</h2>
      <h3>JavaScript Library</h3>
      <p>Tunde Fadipe</p>
      <small>Oct, 2023</small>
    </div>
  )

  const UserCard = () => (
    <div className='user-card'>
      <img src={myPicture} alt='my-img'/>
      <h2>Tunde Fadipe</h2>
    </div>
  )

const Main = () => (
  <div className='main-wrapper'>
  <p>Prerequisite to get started
    <strong>
    <em> react.js</em>
    </strong>
     :
    </p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </div>
)

const Footer = () => (
    <div className='footer-wrapper'>
    <p>Copyright &copy; 2023</p>
    </div>
)
      const App = () => (
        <div>
        <Header />
        <Main />
        <UserCard />
        <Footer />
      </div>
      )

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);