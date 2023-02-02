import { FacebookRounded, Phone } from '@mui/icons-material';
import { Accordion, AccordionSummary, Box, List, ListItem, ListItemButton, ListItemText, Typography, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { navigationItems } from '../../../utils/data';
import IconRounded from '../IconRounded';

import classes from './NavDrawerMobile.module.scss';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}

const portalElement = document.getElementById('overlays');

const NavDrawerMobile = (props) => {
    const [lang, setLang] = useState('bg');
    const navigate = useNavigate();

    const onLangIconClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        props.onClose();
        const path = lang === 'en' ? '/bg/nachalo' : '/en/home';
        navigate(path);
    }

    const accordions = ['museum', 'botev', 'kalofer', 'aboutUs'];

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {ReactDOM.createPortal(<nav className={classes['mobile-nav']}>
                <Box className={classes['drawer-box']} sx={{ width: '370px', "*": { fontFamily: '"Comfortaa", sans-serif !important' } }} role="presentation">
                    <List>
                        <List>
                            <ListItem >
                                <Box>
                                    <ul className={classes['social-networks-links']}>
                                        <li className={classes['icon-list-item']}><IconRounded onClick={props.onClose} link="telephone" icon={<Phone />} /></li>
                                        <li className={classes['icon-list-item']}><IconRounded onClick={props.onClose} link="facebook" icon={<FacebookRounded />} /></li>
                                        <li className={classes['icon-list-item']}><IconRounded icon={lang === 'bg' ? 'en' : 'bg'} lang onClick={onLangIconClick} /></li>
                                    </ul>
                                </Box>
                            </ListItem>
                            <ListItem >
                                <ListItemButton  onClick={props.onClose} component={Link} to="/bg/nachalo">
                                    <ListItemText primary="Начало" />
                                </ListItemButton>
                            </ListItem>
                            {accordions.map(accordion => <ListItem>
                                <Accordion
                                    key={accordion}
                                    square
                                    disableGutters
                                    className={classes.accordion}
                                    TransitionProps={{ timeout: 0 }}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography sx={{ pr: "2rem" }}>{navigationItems[accordion].name}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <List>
                                            {navigationItems[accordion].items.map(item => <ListItem key={item.name} disablePadding>
                                                <ListItemButton  onClick={props.onClose} component={Link} to={item.link}>
                                                    <ListItemText primary={item.name} />
                                                </ListItemButton>
                                            </ListItem>)}
                                        </List>
                                    </AccordionDetails>
                                </Accordion>
                            </ListItem>)}
                            <ListItem >
                                <ListItemButton  onClick={props.onClose} component={Link} to="/bg/boteva-cheta">
                                    <ListItemText primary="Ботева чета" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem >
                                <ListItemButton  onClick={props.onClose} component={Link} to="/bg/botev-poet-publitsist">
                                    <ListItemText primary="Ботев - поет и публицист" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </List>
                </Box>
            </nav>, portalElement)}
        </Fragment>
    );
}

export default NavDrawerMobile;