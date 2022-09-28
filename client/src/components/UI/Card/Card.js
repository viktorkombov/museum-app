import classes from './Card.module.scss';

const Card = props => {
    const cardClasses = props.cardClasses?.length ? props.cardClasses.map(cardClass => classes[cardClass]) : [];
    return (
        <div className={`${classes.card} ${cardClasses.join(' ')}`} style={{ width: props.width || '100%' }}>
            {props.img && <section className={classes.header}>
                <div className={classes['img-wrapper']}>
                    <img src={props.img} alt="" />
                </div>
            </section>}
            <section className={classes.body}>
                <section className={classes['title-wrapper']}>
                    <h4 className={classes.title}>
                        {props.title}
                    </h4>
                </section>
                <section className={classes['content-wrapper']}>
                    <p className={classes.content}>
                        {props.content}
                    </p>
                </section>
                <section className={classes['button-wrapper']}>
                    <button onClick={props.onButtonClicked}>
                        {props.button}
                    </button>
                </section>
            </section>
        </div>
    );
}

export default Card;