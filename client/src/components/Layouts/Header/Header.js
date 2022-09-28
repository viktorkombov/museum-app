import classes from './Header.module.scss';
import logo from '../../../images/botev-logo.png';
import NavBarDropDown from '../../UI/NavBarDropDown';
import { useState } from 'react';
import { FacebookOutlined, FacebookSharp, Instagram, Search, YouTube } from '@mui/icons-material';

const textItem = (text) => <span className={classes['navigation-text-item']}>{text}</span>;

const iconItem = (link, icon, lang) => (
  <a href={link}>
    <div className={`${classes['icon-circle']} ${lang ? classes['icon-circle-lang'] : ''}`}>
      {!lang ? icon : <div className={classes.lang}>{icon}</div>}
    </div>
  </a>);

const Header = () => {
  const [colorChange, setColorchange] = useState(false);
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

  const museumItems = Object.assign({
    buttonText: 'Музей',
    items: ['Национален музей "Христо Ботев"', 'Даскал Ботевото училище']
  }, baseItems);

  const botevItems = Object.assign({
    buttonText: 'Христо Ботев',
    items: ['Родословие', 'Летопис', 'Снимки на Ботев', 'Лични вещи', 'Документи', 'Ботев в изобразителното изкуство'],
  }, baseItems);


  const kaloferItems = Object.assign({
    buttonText: 'Калофер',
    items: ['История', 'Паметници на културата', 'Калоферската дантела', 'Природа и туризъм']
  }, baseItems);

  const aboutUsItems = Object.assign({
    buttonText: 'За нас',
    items: ['Работно време', 'Профил на купувача', 'Дейности и услуги', 'Издания', 'Събития', 'Партньори', 'Контакти']
  }, baseItems);
  
  return (
    <header className={colorChange ? `${classes.header} ${classes['header--scrolled']}` : classes.header}>
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
            <ul className={classes['navigation-icons']}>
              <li className={`${classes['navigation-list-item']}`}><a href="#">{textItem('Ботева чета')}</a></li>
              <li className={`${classes['navigation-list-item']}`}><a href="#">{textItem('Ботев - поет и публицист')}</a></li>
              <li className={`${classes['navigation-list-item']} ${classes['icon-list-item']}`}>{iconItem('facebook', <FacebookOutlined />)}</li>
              <li className={`${classes['navigation-list-item']} ${classes['icon-list-item']}`}>{iconItem('youtube', <YouTube />)}</li>
              <li className={`${classes['navigation-list-item']} ${classes['icon-list-item']}`}>{iconItem('instagram', <Instagram />)}</li>
              <li className={`${classes['navigation-list-item']} ${classes['icon-list-item']}`}>{iconItem('lang', 'EN', true)}</li>
            </ul>
            <ul className={classes['navigation-main']}>
              <li className={`${classes['navigation-list-item']}`}><a href="#">{textItem('Начало')}</a></li>
              <li className={`${classes['navigation-list-item']}`}><NavBarDropDown dropDownItems={museumItems} /></li>
              <li className={`${classes['navigation-list-item']}`}><NavBarDropDown dropDownItems={botevItems} /></li>
              <li className={`${classes['navigation-list-item']}`}><NavBarDropDown dropDownItems={kaloferItems} /></li>
              <li className={`${classes['navigation-list-item']}`}><NavBarDropDown dropDownItems={aboutUsItems} /></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;