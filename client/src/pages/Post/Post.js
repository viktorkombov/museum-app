import Aside from '../../components/Layouts/Aside';
import SimplePost from '../../components/Layouts/SimplePost';
import classes from './Post.module.scss';

const Post = props => {
    return <section className={classes.article}>
        <SimplePost/>
        <Aside/>
    </section>
}

export default Post;