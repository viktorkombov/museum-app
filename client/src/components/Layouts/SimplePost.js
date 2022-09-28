import Chip from '../UI/Chip';
import MasterDetailTable from '../UI/MasterDetailTable';
import classes from './SimplePost.module.scss';

const SimplePost = props => {
    function createData(imageUrl, name, born, died, content) {
        return {
            imageUrl,
            name,
            born,
            died,
            content
        };
    }

    const originalRows = [
        createData(
            'https://muzeibotev.com/clients/152/files/images/snimki%20004.jpg',
            'Христо Ботев Петков',
            { date: '6 януари, 1848 г.', place: 'Калофер' },
            { date: '2 юни, 1876 г.', place: 'Врачански балкан' },
            `Роден е на 6 януари 1848 година (25 декември 1847 година стар стил) в Калофер, в семейството на даскал Ботьо Петков (1815 – 1869) и Иванка Ботева (1823 – 1911).[2] Съществуват и други хипотези за родното му място, които днес се отхвърлят от изследователите – че той е „из Карлово“, както пише в едно официално писмо на Найден Геров, или че е роден в село Осен, както споменава самият Ботев в статията си „Примери от турското правосъдие“.[3]`
        ),
        createData(
            'https://muzeibotev.com/clients/152/files/images/73.jpg',
            'Никола Войновски',
            { date: '6 януари, 1848 г.', place: 'Калофер' },
            { date: '2 юни, 1876 г.', place: 'Врачански балкан' },
            'Войновски е избран за войвода на четата и под негово ръководство тя води последния си бой в района на с. Лютиброд. Остатъкът от дружината се разпада на части. По това време към него се присъединяват Димитър Тодоров – Димитрото и още няколко оцелели четници от Ботевата чета и тръгват към Троянския балкан. С 15 души Войновски се добира до Троянския балкан. На 13 юни 1876 г. в района на с. Шипково четата е разбита окончателно. Никола Войновски е убит на 15 юни /28 юни по нов стил/ 1876 г., ударен в гърдите. Смъртоносно ранен успява да пропълзи десетина метра, като подкрепял своите другари с думите:"Дръжте се, момчета!" Така разказва Димитър Тодоров, който е бил ранен в ръката и е станал свидетел на гибелта на Никола Войновски.'
        ),
        createData(
            'https://muzeibotev.com/clients/152/files/images/67.jpg',
            'Георги Апостолов Минчев',
            { date: '6 януари, 1848 г.', place: 'Калофер' },
            { date: '2 юни, 1876 г.', place: 'Врачански балкан' },
            'Георги Апостолов е роден е през юни 1853 г. в семейството на богат търговец на абаджийска стока и откупвач на натуралния десятък от Ески Заара. Завършва училище в родния си град. Бил е счетоводител в търговска кантора и търговец. Член на Старозагорския частен революционен комитет на ВРО, основан от Васил Левски. Участва в подготовката на Старозагорското въстание (1875). След неуспеха му избягва в Румъния.'
        ),
        createData(
            'https://muzeibotev.com/clients/152/files/images/65.jpg',
            'Никола Обретенов',
            { date: '6 януари, 1848 г.', place: 'Калофер' },
            { date: '2 юни, 1876 г.', place: 'Врачански балкан' },
            'Никола Обретенов е роден на 28 май 1849 г. в град Русе. Семейството е на Тихо Обретенов (заможен и просветен за времето си българин, който е обсъждал „народните български дела“ с Раковски) и на прочутата Тонка Обретенова. Има четирима братя и две сестри. Всичките са неразривно свързани с националноосвободителните борби на българския народ. Братята му Ангел Обретенов и Петър Обретенов са четници в четата на Хаджи Димитър и Стефан Караджа. По-малкия му брат Георги е убит като четник в Сливенската чета на Стоил войвода (1876).'
        ),
    ];

    return (
        <section className={classes.post} id="section2">
            <section className={classes.header}>
                <div className={classes['header-container']}>
                    <article>
            Начало > Новини > <strong>Изложба за Христо Ботев по случай 175-годишнината от рождението му</strong>
                    </article>
                    {/* <article>
            <ul>
              <li><span><i class="fa fa-clock-o" aria-hidden="true"></i></span>Работно време: всеки ден от 8.00 до 17.00 ч.</li>
              <li><span><i class="fa fa-ticket" aria-hidden="true"></i></span>Билети - за възрастни - 4 лв.,</li>
              <li><span style={{ visibility: 'hidden' }}><i class="fa fa-ticket" aria-hidden="true"></i>Билети - </span>за деца и пенсионери - 2 лв.</li>
              <li><span><i class="fa fa-comment" aria-hidden="true"></i></span>Беседа - 10 лв. (до 25 души)</li>
            </ul>
          </article> */}
                </div>
            </section>
            <section className={classes.body}>
                <h2 className={classes.heading}>Изложба за Христо Ботев по случай 175-годишнината от рождението му</h2>
                <div className={classes.chips}>
                    <Chip iconLeft='author'>Виктор Комбов</Chip>
                    <Chip iconLeft='timePosted'>12 юни 2022 г., 01:09 ч.</Chip>
                    <Chip iconLeft='visited'>32112</Chip>
                </div>
                <div className={classes['post-content']}>
                    <MasterDetailTable originalRows={originalRows} />
                    {/* <p>Роден е на 6 януари 1848 година (25 декември 1847 година стар стил) в Калофер, в семейството на даскал Ботьо Петков (1815 – 1869) и Иванка Ботева (1823 – 1911).[2] Съществуват и други хипотези за родното му място, които днес се отхвърлят от изследователите – че той е „из Карлово“, както пише в едно официално писмо на Найден Геров, или че е роден в село Осен, както споменава самият Ботев в статията си „Примери от турското правосъдие“.[3]</p>
                    Бащата на Ботев Ботьо Петков е учител, книжовник и обществен деец, който учи в Одеса, съставя и превежда учебници, а майка му е от скромно калоферско семейство.[4] Освен Христо Ботев, двамата имат още осем деца: Ана (1850 – 1867), Петко (1852 – 1872), Стефан (1854 – 1890), Кирил (1856 – 1944), Тота (1859 – 1864), Генко (1861 – 1863), Генко (1863 – 1866) и Боян (1866 – 1885).[5]
                    Националният музей „Христо Ботев“ в Калофер Според някои източници Христо Ботев е роден в стая на калоферското училище, в която живеят родителите му. Малко по-късно в Калофер е построено ново училище и семейството наема къща на Генко Филов, в която Ботев прекарва първите няколко години от живота си. Тази къща е унищожена по време на Руско-турската война, но през 1940-те години е възстановена и превърната в Национален музей „Христо Ботев“.[6]
                    През 1854 година Ботьо Петков не успява да се споразумее с калоферската община за заплащането си и се премества в Карлово. Там семейството живее в къщата на майка му в Табашката махала, а Христо Ботев тръгва на училище, като негов учител е баща му. През 1858 година Ботьо Петков обвинява управата на карловската община, че се опитва да си присвои пари, завещани за училището, след което се връща в Калофер. Общината се опитва неуспешно да го настани в къща на живеещия в Цариград търговец Христо Тъпчилещов, след което семейството се настанява в къща на хаджи Нестор. След връщането им в Калофер Христо Ботев постъпва в местното трикласно училище, където учител е баща му.[7]
                    В Одеса и връщане в Калофер Датите са по Юлианския календар (стар стил), освен ако не е указано иначе.
                    Още от 1857 година Ботьо Петков се опитва да изпрати сина си да учи в Русия с помощта на Найден Геров, негов познат от Одеса, който е станал известен просветен деец и руски вицеконсул в Пловдив. Това се осъществява едва през есента на 1863 година, когато Христо Ботев получава стипендия от руското правителство и заминава през Пловдив и Цариград за Одеса, където пристига на 14 ноември.[8]
                    В Одеса Христо Ботев се свързва с Одеско българско настоятелство, до което има препоръчително писмо от Найден Геров, и неговия член Никола Тошков, заможен търговец, роден в Калофер и познат на баща му. Той постъпва във Втора гимназия като „волнослушател“, тъй като не е достатъчно добре подготвен за редовен ученик, и се настанява в нейния пансион, където по това време живеят още десетина български ученици.[9]
                    Още с постъпването си в гимназията Ботев трудно се вписва в учебната дейност – той непрекъснато се оплаква от строгата дисциплина, налагането на която включва и физически наказания, но в същото време често отсъства от занятия, участва в сбивания със съученици и се отнася високомерно към повечето си учители. През 1864 година той напуска училищния пансион и започва да живее самостоятелно в различни квартири. Въпреки настоятелните писма на баща му и опитите на Никола Тошков да му повлияе, той занемарява училището и с ексцентричното си поведение отблъсква българската общност в Одеса, като мнозина нейни представители ограничават контактите си с него.[10]
                    Макар че не посещава често училището, Ботев прекарва дълго време в различни библиотеки, най-вече в Българската библиотека „Юрий Венелин“, която се помещава в дома на Тошков. Чете главно руски автори, като е особено впечатлен от Николай Чернишевски и Иван Тургенев. Запознава се с филолога Виктор Григорович, на когото помага с руски преводи на български народни песни. Според неговия съученик Киро Тулешков, още през лятото на 1864 година Ботев работи върху своето стихотворение „Майце си“, консултирайки се с Григорович, и дори по това време го изпраща на Петко Славейков в Цариград. Достоверността на това сведение не е изяснена, тъй като стихотворението е публикувано от Славейков едва няколко години по-късно.[11] */}
                </div>
            </section>
        </section>
    );
}

export default SimplePost;