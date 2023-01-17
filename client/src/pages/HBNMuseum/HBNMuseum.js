import { Fragment } from 'react';
import FloatingImage from '../../components/Layouts/FloatingImagesPage/FloatingImage';
import FloatingImagesPage from '../../components/Layouts/FloatingImagesPage/FloatingImagesPage';
import Post from '../../components/Layouts/Post';
import PostAside from '../../components/Layouts/Post/PostAside';
import PostBody from '../../components/Layouts/Post/PostBody';
import Card from '../../components/UI/Card';
import CarouselBootstrap from '../../components/UI/CarouselBootstrap';
import Gallery from '../../components/UI/Gallery';
import classes from './HBNMuseum.module.scss';

const HBNMuseum = props => {
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
        <Fragment>
            <CarouselBootstrap items={[{ src: "https://muzeibotev.com/clients/152/files/images/PC280963.JPG", title: 'Национален музей "Христо Ботев"' }]}></CarouselBootstrap>
            <Post>
                <PostBody>
                    <FloatingImagesPage>
                        <Fragment>
                            <h2>Музеен комплекс</h2>
                            <p>Национален музей „Христо Ботев” е държавен културен институт с национално значение. В него се съхраняват, опазват и експонират лични вещи, документи, издания, произведения на българското изобразително изкуство и др. материали, свързани с живота и делото на Христо Ботев, неговото семейство и съратниците му. Основната дейност на музея е да издирва, изучава и популяризира движимите паметници на културата, свързани с жизниния революционен и творчески път на Ботев. За целта са създадени съответните отдели и фондове, в които се пазят над 5 000 музейни единици. Библиотеката на музея разполага с над 1 500 тома специализирана литература.</p>
                            <FloatingImage src="https://muzeibotev.com/clients/152/files/images/PC280963.JPG" title="Къщата на Христо Ботев отвътре" />
                            <p>Музей „Христо Ботев” организира и участва в научни сесии и конференции от национален и регионален характер. За повишаване на интереса към родната ни история, музеят организира и приема редица тематични и художествини изложби. Така той се стреми да задоволи нарасналите интереси на многобройните си посетители.</p>
                            <FloatingImage src="https://muzeibotev.com/css/skins/custom/152/images/PC280921.JPG" title="Къщата на Христо Ботев" right />
                            <p>НМ „Христо Ботев”, Калофер е изграден на мястото, където се е намирала последната къща на Ботевото семейство. Музейният комплекс е разположен в парк „Ботева градина”, създаден през 1926 г. и включва следните обекти – мемориална къща-музей, експозиционна зала, паметника на Ботев от 1930 г. и паметника на Иванка Ботева - майката на поета. Цялият ансамбъл е обявен за групов паметник на културата – историческо място с национално значение.Основен елемент в комплекса е къщата, в която е живял най-дълго Ботев. Той не е роден в нея, но я нарича „роден дом, защото тук прекарва детството си. В тази къща се завръща след учението си в Одеса и учителстването в Задунаевка. В нея получава и броя от Славейковия вестник „Гайда”, в който е публикувано първото му стихотворение „Майце си”. От този дом Ботев тръгва за „черна чужбина”, за да отдаде „сили и младост” за свободата на любимото си Отечество. Къщата е разрушена при опожаряването на града през 1877 г. По инициатива на калоферското гражданство и родолюбиви българи от цялата страна, сградата е възстановена по спомени на Ботевия брат о.з. ген. Кирил Ботев и по-стари калоферци. Проектът е разработен от арх. Балтаджиев и строежът започва през 1942 г. Официално е открита като музей на 2 юни 1944 г.</p>
                            <p>Мемориалната къща-музей представлява едноетажна полумасивна сграда с четирискатен покрив и еркерно изнесен голям чардак. В нея, с етнографски материали от епохата на Възраждането, е пресъздадена обстановката, в която е израстнал Ботев. Оригинални експонати са чекръкът и шевната машина на баба Иванка.</p>
                            <FloatingImage src="https://muzeibotev.com/clients/152/files/images/PC280968.JPG" title="Софра" />
                            <h4>Музейният комплекс „Христо Ботев” включва:</h4>
                            <p><strong>• Мемориална къща-музей:</strong> Къщата, в която най-дълго е живяло семейството на Ботев. Възстановена през 1942-1944 г. по спомени на Ботевия брат оз. ген. Кирил Ботев и по-възрастни калоферци. Оригинални експонати в нея са чакръкът и шевната машина на баба Иванка – майката на Ботев;</p>
                            <p><strong>• Експозиционна зала:</strong> Построена през 1973 г. В експозицията преобладават фотосите и снимковият материал. Оригинални експонати са: единствените запазени лични вещи на Ботев – джобен часовник и писалищни принадлежности; печатната преса “Знаме”; печатната преса на Димитър Паничков; лични вещи на Венета и Иванка Ботеви. Други интересни експонати са макетът на парахода “Радецки” и знамето на Ботевата чета</p>
                            <FloatingImage src="https://muzeibotev.com/clients/152/files/images/nm_16.JPG" title="Експозиционната зала" right />
                            <p><strong>• Паметникът на Христо Ботев от 1930 г.:</strong> първият паметник на Ботев в Калофер, автор Кирил Георгиев;</p>
                            <p><strong>• Паметникът на баба Иванка – майката на Ботев</strong>, авт. проф. Мандов</p>
                            <p><strong>• Мемориален парк “Ботева градина”:</strong> създаден през 1926 г. на мястото, където се е намирала къщата на Ботев; засаден с редки дървесни видове.
                                Целият музеен комплекс е обявен за групов паметник на културата – историческо място с национално значение.</p>
                            <h4>Галерия:</h4>
                        </Fragment>
                        <Gallery images={images} />
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
        </Fragment>

    );
}

export default HBNMuseum;