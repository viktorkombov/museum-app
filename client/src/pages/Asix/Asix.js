import { convertFromRaw, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { useEffect } from 'react';
import { useState } from 'react';
import MasterDetailTable from '../../components/UI/MasterDetailTable';

import CarouselBootstrap from '../../components/UI/CarouselBootstrap';

import PageTransition from '../../components/UI/PageTransition';
import { useHttpClient } from '../../hooks/http-hook';
import { Fragment } from 'react';
import Image from '../../components/UI/Image';
import PostEditContent from '../../components/UI/PostEditContent';
import Chip from '../../components/UI/Chip';
import { convertToLocalDate } from '../../utils/functions';
import Post from '../../components/Layouts/Post'
import PostContent from '../../components/Layouts/Post/PostContent';
import { convertToHTML } from 'draft-convert';
import classes from './Asix.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import PostBody from '../../components/Layouts/Post/PostBody';
import { IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import ModalBootstrap from '../../components/UI/ModalBootstrap';
import PostSummary from '../../components/UI/PostSummary';
import PostAside from '../../components/Layouts/Post/PostAside';
import LoadingSpinner from '../../components/UI/LoadingSpinner';

const Asix = props => {
    const [postData, setPostData] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const postId = useParams().postId;
    const navigate = useNavigate();
    const images = [];

    useEffect(() => {
        const fetchArtilces = async () => {
            try {
                const mainArticle = await sendRequest(
                    `http://localhost:5000/api/posts/${postId}`
                );
                setPostData(mainArticle);
            } catch (err) { }
        };
        fetchArtilces();
    }, []);

    const onImageClick = (index) => {
        setImageIndex(index);
        setShowModal(true);
    };


    useEffect(() => {
        const myDomain = 'http://localhost:5000';
        document.querySelectorAll('.' + classes.anchor).forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                if (anchor.href.includes(myDomain)) {
                    e.preventDefault();
                    navigate(anchor.href?.replace(myDomain, ''))
                }
            });
        });
        document.querySelectorAll('.' + classes['image-wrapper']).forEach((image, i) => {
            image.addEventListener('click', () => {
                onImageClick(i);
            });
        });
    }, [postData, navigate]);

    const postContent = postData.Content;
    console.log(postData);

    const html = postContent ? convertToHTML({
        blockToHTML: (block) => {
            if (block.type === 'PARAGRAPH') {
                return <p />;
            }
        },
        entityToHTML: (entity, originalText) => {
            if (entity.type === 'LINK') {
                return <a className={classes.anchor} href={entity.data.url}>{originalText}</a>;
            } else if (entity.type === 'IMAGE') {
                images.push({ src: 'http://localhost:5000/' + entity.data.src, title: entity.data.alt });
                return (<div>
                    <div className={classes['image-wrapper']}>
                        <img
                            src={'http://localhost:5000/' + entity.data.src}
                            alt={entity.data.alt}
                        />
                    </div>
                    <div className='image-title'>
                        {entity.data.alt}
                    </div>
                </div>);
            }
            return originalText;
        }
    })(convertFromRaw(postContent)) : '';

    console.log(images);
    return (
        <PageTransition>
            <CarouselBootstrap items={[{ src: 'http://localhost:5000/' + postData.CoverImage, title: postData.Title }]}></CarouselBootstrap>
            {/* <PostEditContent /> */}
            <Post>
                {!isLoading ? (
                    <PostBody history={{ nachalo: 'Начало', novini: 'Новини', currentPage: postData.Title }}>
                        <Fragment>
                            <section className={classes.heading}>
                                <h1>{postData.Title}</h1>
                                <div className={classes.chips}>
                                    <Chip iconLeft="timePosted">{convertToLocalDate(postData.Date)}</Chip>
                                    <Chip iconLeft="visited">{postData.Count}</Chip>
                                </div>
                            </section>
                            <div dangerouslySetInnerHTML={{ __html: html }} className={classes.content}></div>
                            <ModalBootstrap show={showModal} close={() => setShowModal(false)}>
                                <CarouselBootstrap
                                    items={images}
                                    index={imageIndex}
                                    type="gallery"
                                ></CarouselBootstrap>
                            </ModalBootstrap>
                        </Fragment>
                    </PostBody>
                ) : <LoadingSpinner/>}
                <PostAside id={postId} />
            </Post>
        </PageTransition>

    );
}

export default Asix;