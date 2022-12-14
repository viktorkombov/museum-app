import { Fragment } from 'react';
import FloatingImage from '../../components/Layouts/FloatingImagesPage/FloatingImage';
import FloatingImagesPage from '../../components/Layouts/FloatingImagesPage/FloatingImagesPage';
import Post from '../../components/Layouts/Post';
import PostAside from '../../components/Layouts/Post/PostAside';
import PostBody from '../../components/Layouts/Post/PostBody';
import Card from '../../components/UI/Card';
import CarouselBootstrap from '../../components/UI/CarouselBootstrap';
import Gallery from '../../components/UI/Gallery';
import classes from './KaloferHistory.module.scss';

const KaloferHistory = props => {
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
            <CarouselBootstrap type="withCard" items={[{ src: "https://muzeibotev.com/clients/152/files/images/PC280963.JPG", title: "150 години от смъртта на Ботев" }, { src: "https://muzeibotev.com/css/skins/custom/152/images/PC280921.JPG", title: "150 години от смъртта на Ботев" }]}></CarouselBootstrap>
            <Post>
                <PostBody>
                    <FloatingImagesPage>
                        <Fragment>
                            <h2>История</h2>
                            <p><i>Ако има село по-прибрано, по-добричко и с по-окопитени жители, то е Калофер...Ръкоделно село. Жителите му са в добричко състояние, къщите му са повече двукатни, дървени и послани все домашно...калоферският гайтан и шаяк са прочути по цяло Турско за хубавина...та, според това, то е прославено в народните песни с прякор </i><strong><i>Алтън Калофер.</i></strong></p>
                            <p style={{ textAlign: "right" }}>Иван Богоров</p>
                            <FloatingImage src="http://www.kalofer.com/snimki/accommodations/Kalofer%2009.jpg" title="Калофер отвисоко" />
                            <p>В скута на хайдушкия Балкан се гуши малко китно градче, прорязано от бистрите води на Тунджа, огласяно от песента на хилядите гайтанджийски чаркове, ухаещо на рози и здравец. Градче, „по богатство, развитие, етикет и носене”, приличащо на „един малък Цариград”. Така описват възрожденския Калофер пътешествениците, преминали през него и отнесли със себе си прекрасен спомен от видяното и преживяваното.</p>
                            <p>Създаването на града, превърнал се в гордостта на Стремската долина, е свързано с легенда, обвеяна с героизъм и романтика.</p>
                            <p>Из непроходимите урви и вековни гори скитала дружината на Калифер войвода. В многобройни битки с поробителя те отстоявали българската свобода и крепели духа на народа. За да спре непрестанните набези на непокорните българи, султанът разрешил на Калифер да създаде свое селище на територията, която успее да обиколи за един ден на кон. Избрал войводата хубаво място сред гъстите гори край Тунджа, изградили юнаците му хубави къщи, грабнали си красиви сопотски моми и създали ново селище, за чудо и приказ. Легенда ли е, истина ли е – никой не знае… Но такава е съхранената в народната памет, история на китния и живописен Калофер. Градът на гордите и юначни балканджии и хубави и работни българки, през който турчин “с подкован кон и оръжие” не е можел да премине.</p>
                            <FloatingImage src="https://muzeibotev.com/clients/152/files/images/P4243530.JPG" title="Гледка в подбалканското градче" right />
                            <p>Калофер възниква като нов град към средата на ХVІ в. Оттогава датират приписките в ръкописи и старопечатни книги, в които се споменава името на селището. По-точните писмени сведения са от края на ХVІІІ и нач. на ХІХ в. и са свързани с времето на кърджалийските нападения.</p>
                            <p>Специалните привилегии, които Калофер придобива още със самото си създаване, играят значителна роля в неговото развитие и дават възможност на жителите му да запазят чисто българския характер на селището. От него излизат 15 хайдушки дружини, които защитават имота, труда и честа на местното население. Въпреки тази закрила, богатството на града привлича многобройни кърджалийски банди, които успяват да го разграбят и опустошат два пъти – през 1799 и 1804 години.</p>
                            <p> Калофер преживява истински стопански разцвет през ХІХ век, когато предприемчивите му жители го превръщат в гайтанджийско и абаджийско средище и в един от центровете на розопроизводството в Карловския край. Едни от най-видните търговци и занаятчии в Цариград, Одеса, Букурещ и Виена били калоферци. Богатите фамилии на Тъпчилещови, Тошкович, Золотович разнасяли славата на малкия подбалкански градец, който всички наричали Алтън Калофер (Златен Калофер).</p>
                            <p>Градът дава на историята ни личности като първата българска поетеса Елена Мутева, брат й Димитър Мутев-първия българин с академично образование, първия български библиограф Иван Шопов, първата българска лекарка Анастасия Головина, касиера на БРЦК Драгой Шопов. Той е родно място и на редица политически дейци на свободна България като Георги Странски, Георги Янкулов, Димитър Тончев, Димитър Попов, Христо Калфов, Богдан Филов, Никола Начов - единствения наш академик със средно образование, втория български екзарх Йосиф І, генералите Никола Иванов – ръководил превземането на Одринската крепост, Кирил Ботев, Атила Зафиров, Генко Мархолев, Христо Мархолев, юнкер Боян Ботев. От калоферски произход, макар и роден в Бесарабия, е и един от класиците на българската литература Георги Стаматов.</p>

                            <FloatingImage src="https://muzeibotev.com/clients/152/files/images/P1031088.jpg" title="Зима в Калофер" />
                            <p>Калоферци активно се включват и в борбата за национално освобождение на България. Те участват в четите на Хаджи Димитър и Стефан Караджа. През пролетта на 1876 г., 8 калоферци се записват в четата на Христо Ботев. При сформирането на Българското опълчение 80 постъпват в него,а по време на Руско-турската война 33-ма от тях оставят костите си за свободата на България.</p>
                            <p>Подобно на всички планинци и калоферци се отличават с религиозен дух и твърдо спазват православните традиции. В това малко планинско градче са изградени шест църкви, два манастира и три метоха /в съседно Карлово с население 20 000 църквите са само две/. В центъра се намира най-големият храм “Успение на св. Богородица”, възобновен през 1848 г. Църквата “Св. Архангел Михаил” е изградена от Уста Генчо от Трявна и и изписана от Георги Данчов. Единствената църква на десния бряг на Тунджа е “Св. Атанас”, чийто мраморен иконостас е дарен от калоферските търговци в Цариград и е донесен оттам с волски каруци. Девическият манастир “Св. Въведение Богородично” съществува от нач. на ХVІІІ в., опожаряван е два пъти по време на кърджалийските нападения. След Освобождението е възстановен с руски средства и църквата е украсена с руски икони най-ценните, от които са: Казанска св. Богородица /копие от чудотворната икона в Казанския девически манастир/, Тихвенска св. Богородица /копие от чудотворната икона в мъжкия манастир около гр. Тихвенск/ и Смоленска св. Богородица. Извън града, в чудно красива местност, е разположен и прочутият в миналото мъжки манастир „Св. Рождество Богородично”, основан в 1606 г. и известен с храмовата си икона, която според легендата имала чудотворна сила.</p>
                            <p>В навечерието на Освобождение Калофер е процъфтяващ град с 5-6 хил. жители. На 26 юли 1877 г. перлата на Стремската долина, градът получил прозвището си “Алтън Калофер” е напълно опожарен и сринат до основи. 618 души са безмилостно изклани , а през следващите месеци от студ, глад и епидемии умират общо 1100.</p>
                            <p>Отцелелите от зверствата на поробителите и ужасите на войната се завръщат и заварват родния си град в руини. И отново непримиримият български дух им помага да съградят от пепелищата нов град. Но преди да издигнат домовете си, възстановяват училището и църквите си, защото знаят, че духовността е тази сила, която крепи човека през всичките му изпитания, и ни запазва на този ветровит крастопът, като народ и държавност.</p>
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

export default KaloferHistory;