import classes from './History.module.scss';

const History = props => {
    const propsClasses = props.className ? props.className : '';
    return (
        <section id="content" className={`${classes.header} ${propsClasses}`}>
            <div className={classes["header-container"]}>
                <article>
            Начало &gt; Новини &gt; 
                    <span className={classes.strong}>
                        Изложба за Христо Ботев по случай 175-годишнината от рождението му
                    </span>
                </article>
            </div>
        </section>
    )
}

export default History;