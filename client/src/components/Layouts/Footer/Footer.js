import { Email, FacebookRounded, Instagram, Phone, Room, YouTube } from '@mui/icons-material';
import { useRef, useState } from 'react';
import { navigationItems } from '../../../helpers/data';
import { useResizeObserver } from '../../../helpers/userResizeObserver';
import IconRounded from '../../UI/IconRounded';
import classes from './Footer.module.scss';

const Footer = props => {
    const ref = useRef(null);
    // Optional callback to access the full DOMRect object if required.
    const optionalCallback = (entry) =>
        document.body.style.setProperty('--footer-height', (entry.height + 64) + 'px');

    // Access the width and the height returned from the observed element.
    useResizeObserver(ref, optionalCallback);

    return (
        <footer className={classes.footer} ref={ref}>
            <div className={classes.container}>
                <section className={classes['find-us']}>
                    <div className={classes['social-networks']}>
                        <h5>Свържете се с нас</h5>
                        <ul className={classes['social-networks-links']}>
                            <li className={classes['icon-list-item']}><IconRounded link="telephone" icon={<Phone />} large /></li>
                            <li className={classes['icon-list-item']}><IconRounded link="facebook" icon={<FacebookRounded />} large /></li>
                            <li className={classes['icon-list-item']}><IconRounded link="youtube" icon={<YouTube />} large /></li>
                            <li className={classes['icon-list-item']}><IconRounded link="instagram" icon={<Instagram />} large /></li>
                        </ul>
                    </div>
                    <div>
                        <ul className={classes.contacts}>
                            <li><Room /><span>Адрес: гр. Калофер, пл. "Христо Ботев" 1</span></li>
                            <li><Phone /><span>Телефон: 03353 23 21</span></li>
                            <li><Email /><span>E-mail: hristo.botev@gmail.com</span></li>
                        </ul>
                    </div>
                </section>
                <section className={classes['footer-nav']}>
                    <section className={classes['main-nav']}>
                        <div>
                            <h5>{navigationItems.museum.name}</h5>
                            <ul>
                                {navigationItems.museum.items.map(item => <li><a href={item.link}>{item.name}</a></li>)}
                            </ul>
                        </div>
                        <div>
                            <h5>{navigationItems.botev.name}</h5>
                            <ul>
                                {navigationItems.botev.items.map(item => <li><a href={item.link}>{item.name}</a></li>)}
                            </ul>
                        </div>
                        <div>
                            <h5>{navigationItems.kalofer.name}</h5>
                            <ul>
                                {navigationItems.kalofer.items.map(item => <li><a href={item.link}>{item.name}</a></li>)}
                            </ul>
                        </div>
                        <div>
                            <h5>{navigationItems.aboutUs.name}</h5>
                            <ul>
                                {navigationItems.aboutUs.items.map(item => <li><a href={item.link}>{item.name}</a></li>)}
                            </ul>
                        </div>
                    </section>
                    <ul className={classes['news']}>
                        <li><a href="#">Ботва чета</a></li>
                        <li><a href="#">Ботев - поет и публицист</a></li>
                        <li><a href="#">Новини</a></li>
                    </ul>
                </section>
            </div>
        </footer >
    );
}

export default Footer;