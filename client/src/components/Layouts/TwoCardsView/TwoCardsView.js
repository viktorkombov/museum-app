import SideImageCard from '../../UI/SideImageCard';
import image from '../../../images/museum.jpg';
import image1 from '../../../images/uchilishte.jpg';
import classes from './TwoCardsView.module.scss';
import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import { Children } from 'react';
import Delimiter from '../../UI/Delimiter';

const TwoCardsView = props => {
    const { whiteHeader, className } = props;
    const children = Children.toArray(props.children);
    return (
        <section id="content" className={`${classes['page-wrapper']} ${className ? className : ''}`}>
            <SectionHeader white={whiteHeader}>
                {children[0]}
                {!whiteHeader && <Delimiter white/>}
            </SectionHeader>
            <section className={classes['cards-wrapper']}>
                <div className={classes.card}>
                    <SideImageCard link="/boteva-cheta/participants" image={image} title={'Национален музей "Христо Ботев"'} content={'Разгледайте Национален музей "Христо Ботев"'} />
                </div>
                <div className={classes.card}>
                    <SideImageCard link="/boteva-cheta/history" image={image1} title={'Даскал Ботевото училище'} content={'Разгледайте Даскал Ботевото училище'} />
                </div>
            </section>
            {children[1]}
            {whiteHeader && <Delimiter white/>}
        </section>
    );
}

export default TwoCardsView;