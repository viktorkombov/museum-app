import { Fragment } from 'react';
import TwoCardsView from '../../components/Layouts/TwoCardsView';
import img from '../../images/museum.jpg';
import inc from '../../images/inc.jpg';
import classes from './BotevaChetaHomePage.module.scss';
import CarouselBootstrap from '../../components/UI/CarouselBootstrap';

const BotevaChetaHomePage = props => {
    return (
        <Fragment>
            <CarouselBootstrap type="withCard" items={[{ src: img, title: "150 години от смъртта на Ботев" }, { src: inc, title: "150 години от смъртта на Ботев" }]} />
            <TwoCardsView>
                <h2>Ботев - поет и публицист</h2>
            </TwoCardsView>
        </Fragment>
    );
}

export default BotevaChetaHomePage;