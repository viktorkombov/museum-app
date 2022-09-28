import logo from './logo.svg';
import Header from './components/Layouts/Header';
import CarouselBootstrap from './components/UI/CarouselBootstrap';
import { Fragment } from 'react';
import img from './images/museum.jpg';
import inc from './images/inc.jpg';
import Footer from './components/Layouts/Footer';
import classes from './App.module.scss';
import Home from './pages/Home';
import Post from './pages/Post';

function App() {

  return (
    <Fragment>
      <Header />
      <div style={{ position: 'relative', zIndex: '2', height: '100%', maxHeight: '750px', backgroundColor: '#fff' }}>
        <CarouselBootstrap items={[{ image: img }, { image: inc }]}></CarouselBootstrap>
      </div>
      <main className={classes.main}>
        <Post/>
        <div style={{ background: 'transperant', height: '151px' }}></div>
      </main>
      <Footer />
      {/*  */}
    </Fragment>
  );
}

export default App;
