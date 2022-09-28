import PostSummary from '../../UI/PostSummary';
import classes from './Aside.module.scss';

const Aside = props => {
    const heading = 'Новини';
    const summaries = Array(5).fill({
        date: '2.09.2022 г.',
        title: 'Новина',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequuntur quia odit ex earum vel?'
    });
    return (
        <section className={classes.aside}>
            <section className={classes['fake-header']}></section>
            <section className={classes.body}>
                <h3 className={classes.heading}>{heading}</h3>
                {summaries.map((summary, i, array) => i < array.length - 1 ? <PostSummary summary={summary}/> : <PostSummary summary={summary} isLastSummary={true} />)}
            </section>
        </section>
    );
}

export default Aside;