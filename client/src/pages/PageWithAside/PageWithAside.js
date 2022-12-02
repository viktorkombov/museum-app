import Post from '../../components/Layouts/Post';
import PostAside from '../../components/Layouts/Post/PostAside';
import PostBody from '../../components/Layouts/Post/PostBody';
import PostContent from '../../components/Layouts/Post/PostContent';
import AccordionList from '../../components/UI/AccordionList';
import Card from '../../components/UI/Card';
import classes from './PageWithAside.module.scss';

const PageWithAside = props => {
    const content = `Първата поетична творба на Христо Ботев – стихотворението „Майце си” е публикувано във Славейковия вестник „Гайда”, г. ІІІ, брой 19 от 15.ІV. 1867 г.

    Последното стихотворение на Христо Ботев е „Обесването на Васил Левски”. За пръв път то е публикувано в стенен „Календар за 1876 г.” (Каледарът е загубен)
    
    Единствената издадена приживе стихосбирка с Ботева поезия е “Песни и стихотворения от Ботйова и Стамболова”, отпечатана през есента на 1875 г.`
    return (
        <Post>
            <PostBody>
                <PostContent></PostContent>
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
    );
}

export default PageWithAside;