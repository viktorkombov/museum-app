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

const Asix = props => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [postData, setPostData] = useState([]);
    const postId = useParams().postId;
    const images = [];
    const navigate = useNavigate();

    useEffect(() => {
        const fetchArtilces = async () => {
            try {
                const responseData = await sendRequest(
                    `http://localhost:5000/api/posts/${postId}`
                );
                setPostData(responseData);
            } catch (err) { }
        };
        fetchArtilces();
    }, []);

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
    }, [postData, navigate]);

    const postContent = postData.Content;

    const html = convertToHTML({
        blockToHTML: (block) => {
            if (block.type === 'PARAGRAPH') {
                return <p />;
            }
        },
        entityToHTML: (entity, originalText) => {
            if (entity.type === 'LINK') {
                return <a className={classes.anchor} href={entity.data.url}>{originalText}</a>;
            } else if (entity.type === 'IMAGE') {
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
    })(convertFromRaw(postContent));

    const dummyColumns = [
        {
            id: "Title",
            headerText: "Заглавие",
            sortable: true,
            numeric: false,
            classesOuter: `${classes["name-cell"]}`,
            classesInner: `${classes["header__text--name-title"]}`,
        },
        {
            id: "Date",
            headerText: "Дата на публикуване",
            classesOuter: `${classes["years-cell"]}`,
            classesInner: `${classes["header__text--years-old-title"]}`,
        },
        {
            id: '',
            template: row => {
                return (
                    <div className={classes['action-buttons']}>
                        <IconButton onClick={() => console.log('edit ' + row['ID'])}>
                            <Edit />
                        </IconButton>
                        <IconButton onClick={() => console.log('delete ' + row['ID'])}>
                            <Delete />
                        </IconButton>
                    </div>
                )
            }
        }
    ];

    return (
        <PageTransition>
            <CarouselBootstrap items={[{ src: "https://muzeibotev.com/clients/152/files/images/PC280963.JPG", title: "Изложба за Христо Ботев по случай 175-годишнината от рождението му" }]}></CarouselBootstrap>
            <PostEditContent />
            <Post>
                <PostBody>
                    <section className={classes.heading}>
                        <h1>{postData.Title}</h1>
                        <div className={classes.chips}>
                            <Chip iconLeft="timePosted">{convertToLocalDate(postData.Date)}</Chip>
                            <Chip iconLeft="visited">{postData.Count}</Chip>
                        </div>
                    </section>
                    <div dangerouslySetInnerHTML={{ __html: html }} className={classes.content}></div>
                </PostBody>
                <>
                    <div>Kur</div>
                </>
            </Post>
        </PageTransition>

    );
}

export default Asix;