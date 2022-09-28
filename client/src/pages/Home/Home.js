import { Fragment } from 'react';

import SideImageCard from '../../components/UI/SideImageCard';
import img from '../../images/watch.jpg';
import inc from '../../images/inc.jpg';
import image from '../../images/museum.jpg';
import image1 from '../../images/uchilishte.jpg';
import classes from './Home.module.scss';
import Card from '../../components/UI/Card';

const Home = props => {

    return (
        <Fragment>
            <section className={classes.home}>
                <section className={classes.section1}>
                    <section className={classes.header}>
                        <div className={classes['header-container']}>
                            <article>
                                <h3>Разгледай музея на Христо Ботев</h3>
                            </article>
                            <article>
                                <ul>
                                    <li><span><i class="fa fa-clock-o" aria-hidden="true"></i></span>Работно време: всеки ден от 8.00 до 17.00 ч.</li>
                                    <li><span><i class="fa fa-ticket" aria-hidden="true"></i></span>Билети - за възрастни - 4 лв.,</li>
                                    <li><span style={{ visibility: 'hidden' }}><i class="fa fa-ticket" aria-hidden="true"></i>Билети - </span>за деца и пенсионери - 2 лв.</li>
                                    <li><span><i class="fa fa-comment" aria-hidden="true"></i></span>Беседа - 10 лв. (до 25 души)</li>
                                </ul>
                            </article>
                        </div>
                    </section>
                    {/* <section className={classes.body}></section> */}
                    <div className={`${classes['cards-wrapper1']} ${classes['card-wrapper--first-section']}`}>
                        <div className={classes.card1}>
                        <Card
                                img={img}
                                title="Часовникът на Ботев"
                                content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                                button="Виж повече..."
                            />
                        </div>
                        <div className={classes.card1}>
                        <Card
                                img={img}
                                title="Часовникът на Ботев"
                                content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                                button="Виж повече..."
                            />
                        </div>
                        <div className={classes.card1}>
                            <Card
                                img={img}
                                title="Часовникът на Ботев"
                                content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                                button="Виж повече..."
                            />
                        </div>
                    </div>
                    <p className='link container1'>Виж още...</p>
                    <div className={classes.delimiter}></div>
                </section>

                <section className={`${classes.section1} ${classes['section--dark']}`}>
                    <section className={`${classes.header} ${classes['header--white']}`}>

                        <div className={classes['header-container']}>
                            <h3>Музеен комплекс</h3>
                        </div>
                    </section>
                    <section className={classes['cards-wrapper1']}>
                        <div className={classes.card2}>
                            <SideImageCard image={image} title={'Национален музей "Христо Ботев"'} content={'Разгледайте Национален музей "Христо Ботев"'}/>
                        </div>
                        <div className={classes.card2}>
                        <SideImageCard image={image1} title={'Даскал Ботевото училище'} content={'Разгледайте Даскал Ботевото училище'}/>
                        </div>

                    </section>
                    <div className={classes['delimiter--white']}></div>
                </section>
                <section className={classes.section1}>
                    <section className={classes.header}>
                        <div className={classes['header-container']}>
                            <h2>За Христо Ботев</h2>
                        </div>
                    </section>
                    <section className={classes['text-container']} style={{maxWidth: '1000px', margin: '8rem auto'}}>
                        <p>
                            Роден е на 6 януари 1848 година (25 декември 1847 година стар стил) в Калофер, в семейството на даскал Ботьо Петков (1815 – 1869) и Иванка Ботева (1823 – 1911).[2] Съществуват и други хипотези за родното му място, които днес се отхвърлят от изследователите – че той е „из Карлово“, както пише в едно официално писмо на Найден Геров, или че е роден в село Осен, както споменава самият Ботев в статията си „Примери от турското правосъдие“.[3]
                            Бащата на Ботев Ботьо Петков е учител, книжовник и обществен деец, който учи в Одеса, съставя и превежда учебници, а майка му е от скромно калоферско семейство.[4] Освен Христо Ботев, двамата имат още осем деца: Ана (1850 – 1867), Петко (1852 – 1872), Стефан (1854 – 1890), Кирил (1856 – 1944), Тота (1859 – 1864), Генко (1861 – 1863), Генко (1863 – 1866) и Боян (1866 – 1885).[5]
                            Националният музей „Христо Ботев“ в Калофер Според някои източници Христо Ботев е роден в стая на калоферското училище, в която живеят родителите му. Малко по-късно в Калофер е построено ново училище и семейството наема къща на Генко Филов, в която Ботев прекарва първите няколко години от живота си. Тази къща е унищожена по време на Руско-турската война, но през 1940-те години е възстановена и превърната в Национален музей „Христо Ботев“.
                        </p>
                    </section>
                    <div className={classes.delimiter}></div>
                </section>
                <div style={{ position: 'relative', background: 'transperant', height: '151px' }}></div>
            </section>
        </Fragment>
    );
}

export default Home;