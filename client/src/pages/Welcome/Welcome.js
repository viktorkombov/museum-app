import { Fragment } from 'react';
import FloatingImagesPage from '../../components/Layouts/FloatingImagesPage/FloatingImagesPage';
import Post from '../../components/Layouts/Post';
import PostAside from '../../components/Layouts/Post/PostAside';
import PostBody from '../../components/Layouts/Post/PostBody';
import Card from '../../components/UI/Card';
import CarouselBootstrap from '../../components/UI/CarouselBootstrap';


import classes from './Welcome.module.scss';

const Welcome = props => {
    return (
        <Fragment>
            <CarouselBootstrap items={[{ src: "https://static.dir.bg/uploads/images/2019/01/08/1633107/768x.jpg?_=1546936270", title: "Добре дошли" }]}></CarouselBootstrap>
            <Post>
                <PostBody>
                    <FloatingImagesPage withoutStyledFirstLetter>
                        <Fragment>
                            <h2>Добре дошли</h2>
                            <div style={{ paddingBottom: '2rem', position: 'relative' }}>
                                <p><strong>Добре дошли!</strong></p>
                                <p>Добре дошли на сайта на Национален музей „Христо Ботев”, Калофер.В него ще намерите исторически данни за патрона на музея - гениален поет, публицист, мислител, хуманист, револиционер и войвода.</p>
                                <p><i>Актуална информация за музейните обекти и постоянните експозиции, за дейността на музея, за предстоящи събития, за историята и забележителностите на град Калофер и пленяващата му природа. Вярваме, че ще ви бъдем полезни!</i></p>          
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
        </Fragment>

    );
}

export default Welcome;