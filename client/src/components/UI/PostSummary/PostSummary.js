import classes from './PostSummary.module.scss';
import EventIcon from '@mui/icons-material/Event';

const PostSummary = ({ summary, isLastSummary }) => {

    return (
        <a className={classes['link-wrapper']} href="#">
            <article className={`${classes.summary} ${isLastSummary ? classes['last-summary'] : ''}`}>
                <div className={classes.body}>
                    <div className={classes.date}><EventIcon fontSize='small' /><span>{summary.date}</span></div>
                    <h5 className={classes.title}>{summary.title}</h5>
                    <div>{summary.content}</div>
                </div>
            </article>
        </a>
    );
}

export default PostSummary;