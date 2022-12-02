import { Fragment } from 'react';
import FloatingImage from '../../components/Layouts/FloatingImagesPage/FloatingImage';
import FloatingImagesPage from '../../components/Layouts/FloatingImagesPage/FloatingImagesPage';
import Post from '../../components/Layouts/Post';
import PostAside from '../../components/Layouts/Post/PostAside';
import PostBody from '../../components/Layouts/Post/PostBody';
import Card from '../../components/UI/Card';
import CarouselBootstrap from '../../components/UI/CarouselBootstrap';
import Delimiter from '../../components/UI/Delimiter';
import Gallery from '../../components/UI/Gallery';
import PageTransition from '../../components/UI/PageTransition';
import classes from './Belongings.module.scss';

const Belongings = props => {
    const images = [
        {
            src: "https://muzeibotev.com/clients/152/files/images/PC280968.JPG",
            title: `жовник и обществен деец, който учи в Одеса, съставя и превежда учебници, а майка му е от скромно калоферско семейство.[4] Освен Христо Ботев, двамата имат още осем деца: Ана (1850 – 1867), Петко (1852 – 1872), Стефан (1854 – 1890), Кирил (1856 – 1944), Тота (1859 – 1864), Генко (1861 – 1863), Генко (1863 – 1866) и Боян (1866 – 1885).[5]
        Националният музей „Христо Ботев“ в Калофер Според някои източници Христо Ботев е роден в стая на калоферското училище, в която живеят родителите му. Малко по-късно в Калофер е построено ново училище и семейството наема къща на Генко Филов, в която Ботев прекарва първите няколко години от живота си. Тази къща е унищожена по време на Руско-турската война, но през 1940-те години е възстановена и превърната в Национален музей „Христо Ботев“.[6]
        През 1854 година Ботьо Петков не успява да се споразумее с калоферската община за заплащането си и се премества в Карлово. Там семейството живее в къщата на майка му в Табашката махала, а Христо Ботев тръгва на училище, като негов учител е баща му. През 1858 година Ботьо Петков обвинява управата на карловската община, че се опитва да си присвои пари, завещани за училището, след което се връща в Калофер. Общината се опитва неуспешно да го настани в къща на живеещия в Цариград търговец Христо Тъпчилещов, след което семейството се настанява в къща на хаджи Нестор. След връщането им в Калофер Христо Ботев постъпва в местното трикласно училище, където учител е баща му.[7]
        В Одеса и връщане в Калофер Датите са по Юлианския календар (стар стил), о`,
        },
        {
            src: "https://muzeibotev.com/clients/152/files/images/nm_16.JPG",
            title: "Никола Войновски",
        },
        {
            src: "https://muzeibotev.com/clients/152/files/images/PC280963.JPG",
            title: "Никола Обретанов",
        },
        {
            src: "https://muzeibotev.com/css/skins/custom/152/images/PC280921.JPG",
            title: "Никола Войновски",
        },
        {
            src: "https://muzeibotev.com/clients/152/files/images/PC280968.JPG",
            title: "Никола Обретанов",
        },
        {
            src: "https://muzeibotev.com/clients/152/files/images/nm_16.JPG",
            title: "Никола Войновски",
        },
    ];
    return (
        <PageTransition>
            <CarouselBootstrap type="withCard" items={[{ src: "https://muzeibotev.com/clients/152/files/images/PC280963.JPG", title: "150 години от смъртта на Ботев" }, { src: "https://muzeibotev.com/css/skins/custom/152/images/PC280921.JPG", title: "150 години от смъртта на Ботев" }]}></CarouselBootstrap>
            <Post>
                <PostBody>
                    <FloatingImagesPage withoutStyledFirstLetter>
                        <Fragment>
                            <h2>Лични вещи</h2>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem'}}>
                                <p><strong>Джобен часовник</strong></p>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/sn_55-1djoben%20chasovnik.JPG" title="Джобният часовник на Хр. Ботев" />
                                <p>Джобният часовник на Христо Ботев. Часовникът е принадлежал на Ботьо Петков. Той го подарява на сина си при заминаването му за втори път за Русия, когато Ботев се установява в Румъния. През 1875 г. Ботев и Иван Драсов си разменят джобните часовници, в знак на най-искрено приятелство и по този начин тази безценна реликва е запазена. Потомците на Драсов предават часовника на Института “Ботев-Левски”, а след закриването му той е предаден, заедно с много други материали на Къща-музей “Христо Ботев”, Калофер.</p>
                                {/* <Delimiter /> */}
                            </div>
                            <div style={{ overflow: 'auto'}}>
                                <p><strong>Пишещи принадлежности</strong></p>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/pic_6%20pisalishtni%20botevi%20prinadlejnosti.JPG" title="Пишещите принадлежности на Хр. Ботев" />
                                <p>Личните писалищни принадлежности на Христо Ботев включват преса за попиване на мастилото, мастилница от синьо стъкло и поставка за перодръжки с формата на подкова. Изработени са от месинг и са използвани от поета през последните години от живота му. Запазени са от неговата майка, която по-късно ги подарява на племенника си Стефан Дрянков, от когото са откупени през 1972 г. и стават притежание на музея.</p>
                                {/* <Delimiter /> */}
                            </div>
                        </Fragment>
                    </FloatingImagesPage>
                </PostBody>
                <PostAside>
                    <h3 className={classes.heading}>Виж още</h3>
                    <Card
                        light
                        maxWidth="350px"
                        title="Часовникът на Ботев"
                        content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                        button="Виж повече..."
                    />
                    <Card
                        light
                        maxWidth="350px"
                        title="Часовникът на Ботев"
                        content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                        button="Виж повече..."
                    />
                    <Card
                        light
                        maxWidth="350px"
                        title="Часовникът на Ботев"
                        content="Разгледайте нашия сайт, за да научите повече за живота и делото на Ботев."
                        button="Виж повече..."
                    />
                </PostAside>
            </Post>
        </PageTransition>

    );
}

export default Belongings;