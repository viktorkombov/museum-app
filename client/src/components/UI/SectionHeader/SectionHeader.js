import classes from './SectionHeader.module.scss';

const SectionHeader = ({ white, className, ...props }) => {
    const sectionHeaderClasses = !white ? classes.header : `${classes.header} ${classes['header--white']}`
    return (
        <section className={!props.className ? sectionHeaderClasses : `${sectionHeaderClasses} ${props.className}`}>
            <div className={`${classes['header-container']} ${className && className}`}>
                {props.children}
            </div>
        </section>
    );
}

export default SectionHeader;