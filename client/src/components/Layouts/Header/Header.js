import classes from './Header.module.scss';
import logo from '../../../images/botev-logo.png';
import NavBarDropDown from '../../UI/NavBarDropDown';
import { useState } from 'react';
import { FacebookRounded, Instagram, Menu, Phone, YouTube } from '@mui/icons-material';
import IconRounded from '../../UI/IconRounded';
import { navigationItems } from '../../../helpers/data';
import { IconButton } from '@mui/material';
import NavDrawer from '../../UI/NavDrawer';
import { motion } from 'framer-motion'
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

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenNavDrawer(open);
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
    <header className={colorChange ? `${classes.header} ${classes['header--scrolled']}` : classes.header}>
      <div className={classes['pseudo-header']}></div>
      <div className={classes['header-container']}>
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
        <nav className={classes.navigation}>
          <div>
          <motion.ul
              variants={container}
              initial="hidden"
              animate="show"
               className={classes['navigation-icons']}>
               <motion.li variants={item} className={`${classes['navigation-list-item']}`}><a href="#">{textItem('Ботева чета')}</a></motion.li>
               <motion.li variants={item} className={`${classes['navigation-list-item']}`}><a href="#">{textItem('Ботев - поет и публицист')}</a></motion.li>
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
              <motion.li variants={item} className={`${classes['navigation-list-item']}`}><a href="#">{textItem('Начало')}</a></motion.li>
              <motion.li variants={item} className={`${classes['navigation-list-item']}`}><NavBarDropDown dropDownItems={museumItems} /></motion.li>
              <motion.li variants={item} className={`${classes['navigation-list-item']}`}><NavBarDropDown dropDownItems={botevItems} /></motion.li>
              <motion.li variants={item} className={`${classes['navigation-list-item']}`}><NavBarDropDown dropDownItems={kaloferItems} /></motion.li>
              <motion.li variants={item} className={`${classes['navigation-list-item']}`}><NavBarDropDown dropDownItems={aboutUsItems} /></motion.li>
              <motion.li variants={item} className={`${classes['navigation-list-item']}`}><a href="#">{textItem('Новини')}</a></motion.li>
            </motion.ul>
          </div>
        </nav>
        <div className={classes['toggle-nav-drawer']}>
          <IconButton aria-label="delete" onClick={toggleDrawer(true)}>
            <Menu sx={{ color: 'white', fontSize: '3rem' }} />
          </IconButton>
          <NavDrawer toggleDrawer={toggleDrawer} open={openNavDrawer} />
        </div>
      </div>
    </header>
  );
}

export default Header;