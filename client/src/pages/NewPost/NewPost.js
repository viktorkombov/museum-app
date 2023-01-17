import { Fragment } from 'react';
import PostEditContent from '../../components/UI/PostEditContent';
import SectionHeader from '../../components/UI/SectionHeader/SectionHeader';
import classes from './NewPost.module.scss';

const NewPost = props => {

    return (
        <Fragment>
            <SectionHeader style={{paddingTop: '12rem'}}>
                <h2>Нова публикация</h2>
            </SectionHeader>
            <PostEditContent />
        </Fragment>
    );
}

export default NewPost;