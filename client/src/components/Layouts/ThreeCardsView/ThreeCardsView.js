import img from '../../../images/watch.jpg';
import image from '../../../images/museum.jpg';
import image1 from '../../../images/uchilishte.jpg';
import Card from '../../UI/Card';

import classes from './ThreeCardsView.module.scss';

const ThreeCardsView = props => {
    return (
        <div className={classes['first-section-body']}>
            <div className={classes['cards-wrapper']}>
                <div className={classes.card}>
                    <Card
                        media
                        img={img}
                        title="Часовникът на Ботев"
                        content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                        button="Виж повече..."
                    />
                </div>
                <div className={classes.card}>
                    <Card
                        media
                        img={image}
                        title="Часовникът на Ботев"
                        content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                        button="Виж повече..."
                    />
                </div>
                <div className={classes.card}>
                    <Card
                        media
                        img={image1}
                        title="Часовникът на Ботев"
                        content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                        button="Виж повече..."
                    />
                </div>
            </div>
            {props.children}
        </div>
    )
}

export default ThreeCardsView;