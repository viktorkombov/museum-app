import classes from './CarouselBootstrap.module.scss';
import Carousel from 'react-bootstrap/Carousel';
import { Fragment, useState } from 'react';

const CarouselBootstrap = props => {
  const [index, setIndex] = useState(0);

  const titles = { 0: "Джобният часовник на Христо Ботев", 1: "Мастилницата на Христо Ботев" };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className={classes.carousel} pause={'hover'} fade>
      {props.items.map((item, i) => <Carousel.Item className={classes.item} key={i}>
        <div
          style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', backgroundColor: '#a7a5a5' }}
          // className={`d-block w-100 ${classes['img-' + (i + 1)]}`}
          alt="First slide"
        />
        {/* <video style={{ objectFit: 'cover', height: '100%', width: '100%' }} src="https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/blurry-trees.mov" autoPlay loop playsinline muted></video> */}
        <div className={classes.backdrop}></div>
        <div className={classes.history}>
          <div>
            <a href="#section2">
              <i class="fa fa-angle-double-down" aria-hidden="true"></i>
              <p>Надолу</p>
            </a>
          </div>
        </div>

        <Carousel.Caption>
          <div className={classes['title-backdrop']}>
            <h1 className={classes.title}>Изложба за Христо Ботев по случай 175-годишнината от рождението му</h1>
          </div>
          {/* <Card
            width="350px"
            title="Добре дошли в Национален музей “Христо Ботев” - гр. Калофер"
            content="Разгледайте нашия сайт, за да научите повече за живота и делото на Христо Ботев."
            button="Виж повече..."
          />
          <div className={classes.summary}>
            <h2>{titles[i]}</h2>
            <p>Разгледайте нашия сайт, за да научите повече за живота и делото на Христо Ботев.</p>
            <button><span className="button-content">Виж повече</span><span style={{marginLeft: '1rem'}}><i class="fa fa-info-circle" aria-hidden="true"></i></span></button>
          </div> */}
          {/* <Card
            width="500px"
            title={titles[i]}
            content="Разгледайте нашия сайт, за да научите повече за живота и делото на Христо Ботев."
            button="Виж повече..."
            cardClasses={['card-light']}
          /> */}
        </Carousel.Caption>
      </Carousel.Item>)}
    </Carousel>
  );
}

export default CarouselBootstrap;