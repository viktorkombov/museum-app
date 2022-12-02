import Header from '../components/Layouts/Header';
import CarouselBootstrap from '../components/UI/CarouselBootstrap';
import { Fragment, useState } from 'react';
import Footer from '../components/Layouts/Footer';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import classes from '../App.module.scss';
import Home from '../pages/Home';
import Post from '../components/Layouts/Post';
import NavDrawer from '../components/UI/NavDrawer';
import ThreeColumnsPage from '../components/Layouts/ThreeColumnsPage';
import ScrollToTop from '../components/UI/ScrollToTop';
import ThreeCardsView from '../components/Layouts/ThreeCardsView/ThreeCardsView';
import History from '../components/Layouts/History';
import SectionHeader from '../components/UI/SectionHeader/SectionHeader';
import TwoCardsView from '../components/Layouts/TwoCardsView';
import AccordionList from '../components/UI/AccordionList';
import PageWithAside from '../pages/PageWithAside';
import FloatingImagesPage from '../components/Layouts/FloatingImagesPage/FloatingImagesPage';
import HBNMuseum from '../pages/HBNMuseum';
import School from '../pages/School';
import GridView from '../components/Layouts/GridView';
import TwoColumnsView from '../components/Layouts/TwoColumnsView';
import BotevaCheta from '../pages/BotevaCheta';
import Contacts from '../pages/Contacts';
import BotevPoetPublisher from '../pages/BotevPoetPublisher';
import BotevaChetaHomePage from '../pages/BotevaChetaHomePage/BotevaChetaHomePage';
import BoteviChetnitsi from '../pages/BoteviChetnitsi/BoteviChetnitsi';
import Rodoslovie from '../pages/Rodoslovie';
import Letopis from '../pages/Letopis';
import Photographs from '../pages/Photographs';
import Belongings from '../pages/Belongings';
import Documents from '../pages/Documents';
import Paintings from '../pages/Paintings';
import KaloferHistory from '../pages/KaloferHistory';
import Memorials from '../pages/Memorials';
import KaloferskaDantela from '../pages/KaloferskaDantela';
import Landmarks from '../pages/Landmarks';
import WorkingHours from '../pages/WorkingHours';
import InformationForVisitors from '../pages/InformationForVisitors';
import Publications from '../pages/Publications';
import { AnimatePresence } from 'framer-motion';
const AnimatedRoutes = props => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname} >
                <Route path="/" exact element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route />
                <Route path="/boteva-cheta" element={<BotevaChetaHomePage />} exact />
                <Route path="/boteva-cheta/history" element={<BotevaCheta />} />
                <Route path="/boteva-cheta/participants" element={<BoteviChetnitsi />} />
                <Route path="/museum/botev-house" element={<HBNMuseum />} />
                <Route path="/museum/school" element={<School />} />
                <Route path="/hristo-botev/rodoslovie" exact element={<Rodoslovie />} />
                <Route path="/hristo-botev/letopis" exact element={<Letopis />} />
                <Route path="/hristo-botev/photos" exact element={<Photographs />} />
                <Route path="/hristo-botev/belongings" exact element={<Belongings />} />
                <Route path="/hristo-botev/documents" exact element={<Documents />} />
                <Route path="/hristo-botev/botev-in-fine-arts" exact element={<Paintings />} />
                <Route path="/kalofer/history" exact element={<KaloferHistory />} />
                <Route path="/kalofer/memorials" exact element={<Memorials />} />
                <Route path="/kalofer/dantela" exact element={<KaloferskaDantela />} />
                <Route path="/kalofer/landmarks" exact element={<Landmarks />} />
                <Route path="/about-us/working-hours" exact element={<WorkingHours />} />
                <Route path="/about-us/contacts" exact element={<Contacts />} />
                <Route path="/about-us/information-for-visitors" exact element={<InformationForVisitors />} />
                <Route path="/about-us/publications" exact element={<Publications />} />
            </Routes >
        </AnimatePresence>
    );
}

export default AnimatedRoutes;