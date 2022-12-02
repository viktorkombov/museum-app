import { Fragment } from 'react';
import FloatingImage from '../../components/Layouts/FloatingImagesPage/FloatingImage';
import FloatingImagesPage from '../../components/Layouts/FloatingImagesPage/FloatingImagesPage';
import Post from '../../components/Layouts/Post';
import PostAside from '../../components/Layouts/Post/PostAside';
import PostBody from '../../components/Layouts/Post/PostBody';
import Card from '../../components/UI/Card';
import CarouselBootstrap from '../../components/UI/CarouselBootstrap';
import PageTransition from '../../components/UI/PageTransition';
import classes from './Paintings.module.scss';

const Paintings = props => {
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
                    <FloatingImagesPage>
                        <Fragment>
                            <h2>Ботев в изобразителното изкуство</h2>
                            <p>Образът на Христо Ботев е претворяван от почти всички известни български художници – живописци, графици, скулптури, плакатисти, карикатуристи. Всеки от тях се е опитвал, както се е изразил Стоян Заимов, „да характеризира Ботева с най-ярки и гъсти краски”.</p>
                            <p>В Национален музей „Христо Ботев” се съхраняват едни от най-известните произведения на българските творци, пресъздали образа на Ботев като: Димитър Гюдженов, Златю Бояджиев, Никола Вълчев, Александър Поплилов, Йоан Левиев, Георги Герасимов, Стоимен Стоилов, Васил Гачев и др. Част от тях са експонирани в Картинната галерия към музея и в постоянната му експозиция.</p>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <p style={{ display: 'none' }}>hidden</p>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/Botev-gravir.jpg" />
                                <p><strong>Неизвестен автор, Христо Ботев, гравюра, 1888 г., Лайпциг</strong></p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <p style={{ display: 'none' }}>hidden</p>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/_MG_1387.JPG" />
                                <p><strong>Никола Вълчев, В механата, 1957 г., м.б., платно</strong></p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <p style={{ display: 'none' }}>hidden</p>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/_MG_1388.JPG" />
                                <p><strong>Димитър Гюдженов, Слизането на Ботевата чета при Козлодуй, 1975 г., м.б., платно</strong></p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <p style={{ display: 'none' }}>hidden</p>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/P3070976.JPG" />
                                <p><strong>Димитър Гюдженов, Портрет на Христо Ботев, 1949 г., м.б., платно</strong></p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <p style={{ display: 'none' }}>hidden</p>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/IMGP0078.JPG" />
                                <p><strong>Васил Гачев, Христо Ботев, мрамор, 1959 г.</strong></p>
                            </div>
                            <div style={{ overflow: 'auto', paddingBottom: '1rem', position: 'relative' }}>
                                <p style={{ display: 'none' }}>hidden</p>
                                <FloatingImage src="https://muzeibotev.com/clients/152/files/images/_MG_1466.JPG" />
                                <p><strong>Георги Герасимов, Вдъхновеният поет, медна гравюра, 1949 г.</strong></p>
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

export default Paintings;