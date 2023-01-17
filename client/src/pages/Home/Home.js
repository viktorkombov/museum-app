import { Fragment } from 'react';

import SideImageCard from '../../components/UI/SideImageCard';
import watchImg from '../../images/watch.jpg';
import museumImg from '../../images/museum.jpg';
import incImg from '../../images/inc.jpg';
import classes from './Home.module.scss';
import { AccessTime, Campaign, CampaignRounded, LocalActivity } from '@mui/icons-material';
import { Button as ButtonMaterial } from '@mui/material';
import Button from '../../components/UI/Button/Button';
import ThreeCardsView from '../../components/Layouts/ThreeCardsView/ThreeCardsView';
import TwoCardsView from '../../components/Layouts/TwoCardsView';
import SectionHeader from '../../components/UI/SectionHeader/SectionHeader';
import Delimiter from '../../components/UI/Delimiter';
import CarouselBootstrap from '../../components/UI/CarouselBootstrap';
import PageTransition from '../../components/UI/PageTransition';
import { Link } from 'react-router-dom';
// import RichTextEditor from '../../components/FormElements/RichTextEditor';

const Home = props => {

    return (
        <Fragment>
            <PageTransition>
                <CarouselBootstrap type="withCard" items={[{ src: museumImg, title: 'Национален музей "Христо Ботев"', subtitle: "Разгледайте нашия сайт, за да научите повече за музея на Ботев в Калофер", link: "/museum/botev-house" }, { src: watchImg, title: "Джобен часовник", subtitle: "Разгледайте нашия сайт, за да научите повече за личните вещи на Христо Ботев", link: "/hristo-botev/belongings"  }, { src: incImg, title: "Пишещи принадлежности", subtitle: "Разгледайте нашия сайт, за да научите повече за личните вещи на Христо Ботев", link: "/hristo-botev/belongings", }]}></CarouselBootstrap>

                <section className={classes.home}>
                    <section className={`${classes.section1} ${classes['first-section']}`}>
                        <section className={`${classes.section1} ${classes.welcome} ${classes['section--dark']}`}>
                            <article>
                                <h4>Добре дошли в Национален музей “Христо Ботев” - гр. Калофер</h4>
                                <p>Разгледайте нашия сайт, за да научите повече за живота и делото на Христо Ботев.</p>
                                <Button>Виж повече...</Button>
                            </article>
                            <Delimiter white className={classes['first-section-delimiter']} />
                        </section>
                        <SectionHeader className={classes['first-section-header']}>
                            <h2>Актуално</h2>
                            <article>
                                <table>
                                    <tr>
                                        <td><AccessTime /> Работно време</td>
                                        <td>-</td>
                                        <td>всеки ден от 8.00 до 17.00 ч.</td>
                                    </tr>
                                    <tr>
                                        <td><LocalActivity /> Билети</td>
                                        <td>-</td>
                                        <td><div>за възрастни - 4 лв.,</div><div>за деца и пенсионери - 2 лв.</div></td>
                                    </tr>
                                    <tr>
                                        <td><CampaignRounded /> Беседа</td>
                                        <td>-</td>
                                        <td>10 лв. (до 25 души)</td>
                                    </tr>
                                </table>
                            </article>
                        </SectionHeader>
                        {/* <section className={classes.body}></section> */}
                        <h1>Актуално</h1>
                        <ThreeCardsView>
                            <div className={classes['first-section-more-link']}>
                                <ButtonMaterial component={Link} to="/news" variant="outlined">Виж още новини</ButtonMaterial>
                            </div>
                        </ThreeCardsView>
                        <Delimiter />
                    </section>
                    <TwoCardsView whiteHeader>
                        <h3>Музеен комплекс</h3>
                        <Delimiter white />
                    </TwoCardsView>
                    <section className={`${classes.section1} ${classes['text-section']}`}>
                        <SectionHeader>
                            <h3>За Христо Ботев</h3>
                        </SectionHeader>
                        <section className={classes['text-container']}>
                            <p>
                                Роден е на 6 януари 1848 година (25 декември 1847 година стар стил) в Калофер, в семейството на даскал Ботьо Петков (1815 – 1869) и Иванка Ботева (1823 – 1911).[2] Съществуват и други хипотези за родното му място, които днес се отхвърлят от изследователите – че той е „из Карлово“, както пише в едно официално писмо на Найден Геров, или че е роден в село Осен, както споменава самият Ботев в статията си „Примери от турското правосъдие“.[3]
                                Бащата на Ботев Ботьо Петков е учител, книжовник и обществен деец, който учи в Одеса, съставя и превежда учебници, а майка му е от скромно калоферско семейство.[4] Освен Христо Ботев, двамата имат още осем деца: Ана (1850 – 1867), Петко (1852 – 1872), Стефан (1854 – 1890), Кирил (1856 – 1944), Тота (1859 – 1864), Генко (1861 – 1863), Генко (1863 – 1866) и Боян (1866 – 1885).[5]
                                Националният музей „Христо Ботев“ в Калофер Според някои източници Христо Ботев е роден в стая на калоферското училище, в която живеят родителите му. Малко по-късно в Калофер е построено ново училище и семейството наема къща на Генко Филов, в която Ботев прекарва първите няколко години от живота си. Тази къща е унищожена по време на Руско-турската война, но през 1940-те години е възстановена и превърната в Национален музей „Христо Ботев“.
                            </p>
                            <p>
                                Роден е на 6 януари 1848 година (25 декември 1847 година стар стил) в Калофер, в семейството на даскал Ботьо Петков (1815 – 1869) и Иванка Ботева (1823 – 1911).[2] Съществуват и други хипотези за родното му място, които днес се отхвърлят от изследователите – че той е „из Карлово“, както пише в едно официално писмо на Найден Геров, или че е роден в село Осен, както споменава самият Ботев в статията си „Примери от турското правосъдие“.[3]
                                Бащата на Ботев Ботьо Петков е учител, книжовник и обществен деец, който учи в Одеса, съставя и превежда учебници, а майка му е от скромно калоферско семейство.[4] Освен Христо Ботев, двамата имат още осем деца: Ана (1850 – 1867), Петко (1852 – 1872), Стефан (1854 – 1890), Кирил (1856 – 1944), Тота (1859 – 1864), Генко (1861 – 1863), Генко (1863 – 1866) и Боян (1866 – 1885).[5]
                                Националният музей „Христо Ботев“ в Калофер Според някои източници Христо Ботев е роден в стая на калоферското училище, в която живеят родителите му. Малко по-късно в Калофер е построено ново училище и семейството наема къща на Генко Филов, в която Ботев прекарва първите няколко години от живота си. Тази къща е унищожена по време на Руско-турската война, но през 1940-те години е възстановена и превърната в Национален музей „Христо Ботев“.
                            </p>
                        </section>
                        <Delimiter />
                    </section>
                </section>
            </PageTransition>
        </Fragment>
    );
}

export default Home;