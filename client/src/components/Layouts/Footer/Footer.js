import classes from './Footer.module.scss';

const Footer = props => {

    return (
        <footer className={classes.footer}>
            <div className="container1">
                <section className={classes['find-us']}>
                    <div className={classes['social-networks']}>
                        <h3>Свържете се с нас</h3>
                        <ul className={classes['social-networks-links']}>
                            <li className={classes['icon-list-item']}><a href="#"><div className={classes['icon-link']}><i class="fa fa-facebook"></i></div></a></li>
                            <li className={classes['icon-list-item']}><a href="#"><div className={classes['icon-link']}><i class="fa fa-youtube"></i></div></a></li>
                            <li className={classes['icon-list-item']}><a href="#"><div className={classes['icon-link']}><i class="fa fa-instagram"></i></div></a></li>
                            <li className={classes['icon-list-item']}><a href="#"><div className={`${classes['icon-link']} ${classes['icon-circle-lang']}`}><div className={classes.lang}>EN</div></div></a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className={classes.contacts}>
                            <li><span><i class="fa fa-map-marker" aria-hidden="true"></i></span> Адрес: гр. Калофер, пл. "Христо Ботев" 1</li>
                            <li><span><i class="fa fa-phone" aria-hidden="true"></i></span> Телефон: 03353 23 21</li>
                            <li><span><i class="fa fa-envelope" aria-hidden="true"></i></span> E-mail: hristo.botev@gmail.com</li>
                        </ul>
                    </div>
                </section>
            </div>
        </footer>
    );
}

export default Footer;