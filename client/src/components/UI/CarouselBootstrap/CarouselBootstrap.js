import classes from "./CarouselBootstrap.module.scss";
import Carousel from "react-bootstrap/Carousel";
import { Fragment, useEffect, useState } from "react";
import Card from "../Card";
import Button from "../Button/Button";
import { Info, KeyboardDoubleArrowDown } from "@mui/icons-material";
import CarouselImg from "./CarouselImg";

const CarouselBootstrap = (props) => {
  const [index, setIndex] = useState(props.index);
  const { type, items } = props;

  useEffect(() => {
    console.log(props.index)
  }, []);

  const slide = type !== 'gallery' ? true : false;

  const titles = {
    0: "Джобният часовник на Христо Ботев",
    1: "Мастилницата на Христо Ботев",
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={classes.wrapper}>
      <Carousel
        className={`${classes.carousel} ${(type !== 'gallery' || items.length === 1) && 'without-indicators'} `}
        pause={"hover"}
        fade
        slide={slide}
        activeIndex={index}
        onSelect={handleSelect}
      >
        {items.map((item, i) => (
          <Carousel.Item className={classes.item} key={i}>
            <CarouselImg src={item.src} type={type} />
            {/* <video style={{ objectFit: 'cover', height: '100%', width: '100%' }} src="https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/blurry-trees.mov" autoPlay loop playsinline muted></video> */}
            {type !== 'gallery' && <div className={classes.backdrop}></div>}
            {(type !== 'gallery') ? <div className={classes['scroll-button-wrapper']}>
              <div>
                <a href="#content">
                  <KeyboardDoubleArrowDown fontSize="large"/>
                  <p>Към съдържанието</p>
                </a>
              </div>
            </div> : <div className={classes['gallery-caption-wrapper']}></div>}

            <Carousel.Caption>
              {(type !== 'withCard') &&
                <h1 className={`${classes.title} ${classes[type]}`}>
                  {item.title.length > 100 ? `${item.title.substring(0, 100)}...` : item.title}
                </h1>}
              {type === 'withCard' && (
                <>
                  <div className={classes['card-wrapper']}>
                    <Card
                      width="350px"
                      title="Добре дошли в Национален музей “Христо Ботев” - гр. Калофер"
                      content="Разгледайте нашия сайт, за да научите повече за живота и делото на Христо Ботев."
                      button="Виж повече..."
                    />
                  </div>
                  <div className={classes.summary}>
                    <h2>{titles[i]}</h2>
                    <p>
                      Разгледайте нашия сайт, за да научите повече за живота и
                      делото на Христо Ботев.
                    </p>
                    <Button>Виж повече...</Button>
                  </div>
                  <div className={classes['summary-info-button']}><Info fontSize="large" /></div>
                </>
              )}
              {/* <Card
            width="500px"
            title={titles[i]}
            content="Разгледайте нашия сайт, за да научите повече за живота и делото на Христо Ботев."
            button="Виж повече..."
            cardClasses={['card-light']}
          /> */}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselBootstrap;
