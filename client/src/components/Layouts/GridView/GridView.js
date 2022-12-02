import img from '../../../images/watch.jpg';
import image from '../../../images/museum.jpg';
import image1 from '../../../images/uchilishte.jpg';
import classes from './GridView.module.scss';
import Card from '../../UI/Card';
import SideImageCard from '../../UI/SideImageCard';
import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import { Fragment } from 'react';
import History from '../History';
import LefletMap from '../../UI/LefletMap';

const GridView = props => {
    return (
        <Fragment>
            <History>
            </History>
            <section className={classes['grid-view-wrapper']}>
                <h2>Последни новини</h2>
                <section className={classes['grid-view']}>
                    <div className={`${classes.card} ${classes['first-card']}`}>
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
                    <div className={classes.card}>
                        <Card
                            media
                            img={image1}
                            title="Часовникът на Ботев"
                            content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                            button="Виж повече..."
                        />
                    </div>
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

                </section>
                <h2>Октомври 2022 г.</h2>
                <section className={classes['grid-view']}>
                    <div className={classes.card}>
                        <Card
                            media
                            img={image1}
                            title="Часовникът на Ботев"
                            content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                            button="Виж повече..."
                        />
                    </div>
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
                    <div className={classes.card}>
                        <Card
                            media
                            img={image1}
                            title="Часовникът на Ботев"
                            content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                            button="Виж повече..."
                        />
                    </div>
                </section>
                <div style={{width: '100%', height: '450px'}}>
                    <LefletMap />
                </div>
                <iframe width="600" height="450" style={{ border: 0 }} loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJO7O5TAW7qUARjnOnBrBd1g0&key=AIzaSyBXvSkO_vTWQzKm8gANoDT1i3j7XS80p9E"></iframe>
            </section>
        </Fragment >
    );
}

export default GridView;