import History from '../History';
import Image from '../../UI/Image';
import classes from './ThreeColumnsPage.module.scss';
import { Fragment } from 'react';

const ThreeColumnsPage = props => {
    return (
        <Fragment>
            <History className={classes.header} />
            <section className={classes['page-wrapper']}>
                <article className={classes['first-section']}>
                    <h3>Снимките на Ботев</h3>
                    <Image type="page" rec={{ src: "https://muzeibotev.com/clients/152/files/images/B-Odesa.jpg" }} />
                    <div className={classes['image-title']}> Христо Ботев с българи ученици в Одеса, краят на април 1865 г.</div>
                    <p>Първата, най-малко известна фотография на Христо Ботев.</p>
                    <p>Ботев е първият, седнал в дясно.</p>
                   
                </article>
                <article className={classes['second-section']}>
                <Image type="page" rec={{ src: "https://muzeibotev.com/clients/152/files/images/Botev-foto.jpg" }} />
                    <div className={classes['image-title']}>Христо Ботев, май 1875 г., Букурещ.</div>
                    <p>Най-известната фотография на Ботев е правена в ателието на фотографа Тома Хитров. От нея са запазени най-много копия.</p>
                </article>
                <article className={classes['third-section']}>
                    <Image type="page" rec={{ src: "https://muzeibotev.com/clients/152/files/images/sn_19botev.jpg" }} />
                    <div className={classes['image-title']}>Христо Ботев, Никола Славков и Иван Драсов, септември 1875 г., Букурещ</div>
                </article>
                <article className={classes['forth-section']}>
                    <div className={classes['flex-wrapper__gray']}>
                        <div className={classes['image-wrapper']}>
                            <Image type="page" rec={{ src: "https://muzeibotev.com/clients/152/files/images/sn_26bratya.jpg" }} />
                            <div className={classes['image-title']}>Христо Ботев и братята му Стефан, Кирил и Боян, април или май 1876 г.</div>
                        </div>
                        <div>
                            <p>Последната снимка на Христо Ботев.</p>
                        </div>
                    </div>
                </article>
            </section>
        </Fragment>
    )
}

export default ThreeColumnsPage;