import classes from './Header.module.scss';
import logo from '../../../images/botev-logo.png';
import NavBarDropDown from '../../UI/NavBarDropDown';
import { useContext, useEffect, useState } from 'react';
import { Add, ExitToApp, FacebookRounded, Instagram, Menu, Person, Phone, YouTube } from '@mui/icons-material';
import IconRounded from '../../UI/IconRounded';
import { navigationItems, navigationItemsWitoutDropdowns } from '../../../utils/data';
import { IconButton } from '@mui/material';
import NavDrawer from '../../UI/NavDrawer';
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../contexts/auth-context';
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

const textItem = (text) => <span className={classes['navigation-text-item']}>{text}</span>;

const Header = () => {
  const [colorChange, setColorchange] = useState(false);
  const [openNavDrawer, setOpenNavDrawer] = useState(false);
  const auth = useContext(AuthContext);

  const location = useLocation();
  useEffect(() => {
    if (openNavDrawer) {
      setOpenNavDrawer(false);
    }
  }, [location]);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenNavDrawer(open);
  };

  const closeDrawer = () => {
    setOpenNavDrawer(false);
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      !colorChange && setColorchange(true);
    }
    else {
      colorChange && setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);

  const baseItems = {
    classList: {
      active: classes.active,
      textItem: classes['navigation-text-item'],
      dropDownArrow: classes['navigation-dropdown-arrow'],
      toggleWrapper: classes['navigation-toggle-wrapper']
    }
  }

  const museumItems = Object.assign(navigationItems.museum, baseItems);

  const botevItems = Object.assign(navigationItems.botev, baseItems);

  const kaloferItems = Object.assign(navigationItems.kalofer, baseItems);

  const aboutUsItems = Object.assign(navigationItems.aboutUs, baseItems);

  return (
    <div className={classes['header-wrapper']}>
      {auth.token && <div className={classes.auth}>
        <ul className={classes['auth-desktop']}>
          <li><Link to="/profile">Административен панел</Link></li>
          <li><Link to="/posts/new">Създай нова публикация</Link></li>
          <li><Link onClick={() => auth.logout()}>Изход</Link></li>
        </ul>
        <ul className={classes['auth-mobile']}>
          <li><Link to="/profile"><Person /></Link></li>
          <li><Link to="/posts/new"><Add /></Link></li>
          <li><Link onClick={() => auth.logout()}><ExitToApp /></Link></li>
        </ul>
      </div>}
      <header className={colorChange ? `${classes.header} ${classes['header--scrolled']}` : classes.header}>
        <div className={classes['pseudo-header']}></div>
        <div className={classes['header-container']}>
          <Link to="/" className={classes['logo-link']}>
            <section className={classes.logo}>
              <article className={classes['logo-image__wrapper']}>
                <img src={logo} alt="logo" />
              </article>
              <article className={classes['logo-text']}>
                <div>Национален музей</div>
                <div>"Христо Ботев"</div>
                <div>гр. Калофер</div>
              </article>
            </section>
          </Link>
          <nav className={classes.navigation}>
            <div>
              <motion.ul
                variants={container}
                initial="hidden"
                animate="show"
                className={classes['navigation-icons']}>
                <motion.li variants={item} className={`${classes['navigation-list-item']}`}><Link to={navigationItemsWitoutDropdowns.botevaCheta.botevaCheta.link}>{textItem(navigationItemsWitoutDropdowns.botevaCheta.botevaCheta.title)}</Link></motion.li>
                <motion.li variants={item} className={`${classes['navigation-list-item']}`}><Link to={navigationItemsWitoutDropdowns.botevPoetJournalist.botevPoetJournalist.link}>{textItem(navigationItemsWitoutDropdowns.botevPoetJournalist.botevPoetJournalist.title)}</Link></motion.li>
                <motion.li variants={item} className={`${classes['navigation-list-item']} ${classes['icon-list-item']}`}><IconRounded link="phone" icon={<Phone />} /></motion.li>
                <motion.li variants={item} className={`${classes['navigation-list-item']} ${classes['icon-list-item']}`}><IconRounded link="facebook" icon={<FacebookRounded />} /></motion.li>
                <motion.li variants={item} className={`${classes['navigation-list-item']} ${classes['icon-list-item']}`}><IconRounded link="youtube" icon={<YouTube />} /></motion.li>
                <motion.li variants={item} className={`${classes['navigation-list-item']} ${classes['icon-list-item']}`}><IconRounded link="instagram" icon={<Instagram />} /></motion.li>
                <motion.li variants={item} className={`${classes['navigation-list-item']} ${classes['icon-list-item']}`}><IconRounded link="lang" icon="en" lang /></motion.li>
              </motion.ul>
              <motion.ul
                variants={container}
                initial="hidden"
                animate="show"
                className={classes['navigation-main']}>
                <motion.li variants={item} className={`${classes['navigation-list-item']}`}><Link to="/">{textItem('Начало')}</Link></motion.li>
                <motion.li variants={item} className={`${classes['navigation-list-item']}`}><NavBarDropDown dropDownItems={museumItems} /></motion.li>
                <motion.li variants={item} className={`${classes['navigation-list-item']}`}><NavBarDropDown dropDownItems={botevItems} /></motion.li>
                <motion.li variants={item} className={`${classes['navigation-list-item']}`}><NavBarDropDown dropDownItems={kaloferItems} /></motion.li>
                <motion.li variants={item} className={`${classes['navigation-list-item']}`}><NavBarDropDown dropDownItems={aboutUsItems} /></motion.li>
                <motion.li variants={item} className={`${classes['navigation-list-item']}`}><Link to="/news">{textItem('Новини')}</Link></motion.li>
              </motion.ul>
            </div>
          </nav>
          <div className={classes['toggle-nav-drawer']}>
            <IconButton aria-label="delete" onClick={toggleDrawer(true)}>
              <Menu sx={{ color: 'white', fontSize: '3rem' }} />
            </IconButton>
            <NavDrawer closeDrawer={closeDrawer} toggleDrawer={toggleDrawer} open={openNavDrawer} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;