import logo from './logo.svg';
import Header from './components/Layouts/Header';
import CarouselBootstrap from './components/UI/CarouselBootstrap';
import { Fragment, Suspense, useEffect, useState } from 'react';
import Footer from './components/Layouts/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import classes from './App.module.scss';
import Home from './pages/Home';
import Post from './components/Layouts/Post';
import NavDrawer from './components/UI/NavDrawer';
import ScrollToTop from './components/UI/ScrollToTop';
import ThreeCardsView from './components/Layouts/ThreeCardsView/ThreeCardsView';
import History from './components/Layouts/History';
import SectionHeader from './components/UI/SectionHeader/SectionHeader';
import TwoCardsView from './components/Layouts/TwoCardsView';
import AccordionList from './components/UI/AccordionList';
import PageWithAside from './pages/PageWithAside';
import FloatingImagesPage from './components/Layouts/FloatingImagesPage/FloatingImagesPage';
import HBNMuseum from './pages/HBNMuseum';
import School from './pages/School';
import GridView from './components/Layouts/GridView';
import TwoColumnsView from './components/Layouts/TwoColumnsView';
import BotevaCheta from './pages/BotevaCheta';
import Contacts from './pages/Contacts';
import BotevPoetPublisher from './pages/BotevPoetPublisher';
import BotevaChetaHomePage from './pages/BotevaChetaHomePage/BotevaChetaHomePage';
import BoteviChetnitsi from './pages/BoteviChetnitsi/BoteviChetnitsi';
import Rodoslovie from './pages/Rodoslovie';
import Letopis from './pages/Letopis';
import Photographs from './pages/Photographs';
import Belongings from './pages/Belongings';
import Documents from './pages/Documents';
import Paintings from './pages/Paintings';
import KaloferHistory from './pages/KaloferHistory';
import Memorials from './pages/Memorials';
import KaloferskaDantela from './pages/KaloferskaDantela';
import Landmarks from './pages/Landmarks';
import WorkingHours from './pages/WorkingHours';
import InformationForVisitors from './pages/InformationForVisitors';
import Publications from './pages/Publications';
import AnimatedRoutes from './routes/AnimatedRoutes';
import useScrollTop from './hooks/useScrollTop';
import LoadingPage from './pages/LoadingPage';
import ErrorBoundary from './components/ErrorBoundaries/ErrorBoundary';
import { AuthContext } from './contexts/auth-context';
import { useAuth } from './hooks/auth-hook';

function App() {
  const { token, login, logout, userId } = useAuth();

  useScrollTop();

  useEffect(() => {
    setTimeout(() => {
      const loadingSpinnerWrapper = document.querySelector('.spinner-wrapper');
      if (loadingSpinnerWrapper) {
        loadingSpinnerWrapper.remove();
      }
    }, 200)
  }, [])

  return (
    <ErrorBoundary>
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          userId: userId,
          login: login,
          logout: logout
        }}
      >
        <Suspense fallback={
          <LoadingPage />
        }>
          <Header />
          <main className={classes.main}>
            <AnimatedRoutes />
          </main>
          <div className={classes['fake-footer']}></div>
          <ScrollToTop />
          <Footer />
        </Suspense>
      </AuthContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
