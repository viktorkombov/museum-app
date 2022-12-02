import classes from './Card.module.scss';

const Card = props => {
    const { media } = props;
    const cardClasses = props.cardClasses?.length ? props.cardClasses.map(cardClass => classes[cardClass]) : [];
    return (
        <div className={`${classes.card} ${media && classes['card-media']} ${props.light && classes['card-light']} ${cardClasses.join(' ')}`} style={{
            backgroundImage: props.img ? `url(${props.img})`: 'none',
            backgroundSize: 'cover',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: props.width || '100%', maxWidth: props.maxWidth || '100%'
        }}>
            {props.img && <section className={classes.header}>
                <div className={classes['backdrop-gradient']}>
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