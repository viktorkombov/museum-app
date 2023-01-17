import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense, useContext } from 'react';
import LoadingPage from '../pages/LoadingPage';
import BotevPoems from '../pages/BotevPoems';
import Newspapers from '../pages/Newspapers';
import Welcome from '../pages/Welcome';
import Asix from '../pages/Asix';
import Auth from '../pages/Auth';
import { AuthContext } from '../contexts/auth-context';
import AdminPanel from '../pages/AdminPanel';
import EditPost from '../pages/EditPost';

const Home = lazy(() => import('../pages/Home'));
const HBNMuseum = lazy(() => import('../pages/HBNMuseum'));
const School = lazy(() => import('../pages/School'));
const GridView = lazy(() => import('../components/Layouts/GridView'));
const BotevaCheta = lazy(() => import('../pages/BotevaCheta'));
const Contacts = lazy(() => import('../pages/Contacts'));
const BotevPoetPublisher = lazy(() => import('../pages/BotevPoetPublisher'));
const BotevaChetaHomePage = lazy(() => import('../pages/BotevaChetaHomePage/BotevaChetaHomePage'));
const BoteviChetnitsi = lazy(() => import('../pages/BoteviChetnitsi/BoteviChetnitsi'));
const Rodoslovie = lazy(() => import('../pages/Rodoslovie'));
const Letopis = lazy(() => import('../pages/Letopis'));
const Photographs = lazy(() => import('../pages/Photographs'));
const Belongings = lazy(() => import('../pages/Belongings'));
const Documents = lazy(() => import('../pages/Documents'));
const Paintings = lazy(() => import('../pages/Paintings'));
const NewPost = lazy(() => import('../pages/NewPost'));
const Memorials = lazy(() => import('../pages/Memorials'));
const KaloferskaDantela = lazy(() => import('../pages/KaloferskaDantela'));
const Landmarks = lazy(() => import('../pages/Landmarks'));
const WorkingHours = lazy(() => import('../pages/WorkingHours'));
const InformationForVisitors = lazy(() => import('../pages/InformationForVisitors'));
const Publications = lazy(() => import('../pages/Publications'));
const BuyersProfile = lazy(() => import('../pages/BuyersProfile'));
const Partners = lazy(() => import('../pages/Partners'));
const KaloferHistory = lazy(() => import('../pages/KaloferHistory'));

const AnimatedRoutes = props => {
    const location = useLocation();
    const auth = useContext(AuthContext);

    let routes;

    if (auth.token) {
        routes = (
            <>
                <Route path="/" exact element={<Navigate to="/home" />} />
                <Route path="/posts/new" element={<NewPost />} exact />
                <Route path="/profile" element={<AdminPanel />} exact />
                <Route path="/home" element={<Home />} />
                <Route />
                <Route path="/news" element={<GridView />} exact />
                <Route path="/loading" element={<LoadingPage />} exact />
                <Route path="/Welcome" element={<Welcome />} exact />
                


                <Route path="/posts/1" element={<Asix />} exact />

                {/* Boteva Cheta */}
                <Route path="/boteva-cheta" element={<BotevaChetaHomePage />} exact />
                <Route path="/boteva-cheta/history" element={<BotevaCheta />} />
                <Route path="/boteva-cheta/participants" element={<BoteviChetnitsi />} />

                {/* Boteva Poet and Journalist */}
                <Route path="/botev-poet-journalist" element={<BotevPoetPublisher />} exact />
                <Route path="/botev-poet-journalist/poems" element={<BotevPoems />} />
                <Route path="/botev-poet-journalist/publications" element={<Newspapers />} />

                {/* Museum */}
                <Route path="/museum/botev-house" element={<HBNMuseum />} />
                <Route path="/museum/school" element={<School />} />

                {/* Hristo Botev */}
                <Route path="/hristo-botev/rodoslovie" exact element={<Rodoslovie />} />
                <Route path="/hristo-botev/letopis" exact element={<Letopis />} />
                <Route path="/hristo-botev/photos" exact element={<Photographs />} />
                <Route path="/hristo-botev/belongings" exact element={<Belongings />} />
                <Route path="/hristo-botev/documents" exact element={<Documents />} />
                <Route path="/hristo-botev/botev-in-fine-arts" exact element={<Paintings />} />

                {/* Kalofer */}
                <Route path="/kalofer/history" exact element={<KaloferHistory />} />
                <Route path="/kalofer/memorials" exact element={<Memorials />} />
                <Route path="/kalofer/dantela" exact element={<KaloferskaDantela />} />
                <Route path="/kalofer/landmarks" exact element={<Landmarks />} />

                {/* About Us */}
                <Route path="/about-us/working-hours" exact element={<WorkingHours />} />
                <Route path="/about-us/contacts" exact element={<Contacts />} />
                <Route path="/about-us/information-for-visitors" exact element={<InformationForVisitors />} />
                <Route path="/about-us/publications" exact element={<Publications />} />
                <Route path="/about-us/buyers-profile" exact element={<BuyersProfile />} />
                <Route path="/about-us/Partners" exact element={<Partners />} />
            </>
        );
    } else {
        routes = (
            <>
                <Route path="/" exact element={<Navigate to="/home" />} />
                <Route path="/auth" element={<Auth />} exact />
                <Route path="/home" element={<Home />} />
                <Route />
                <Route path="/news" element={<GridView />} exact />
                <Route path="/loading" element={<LoadingPage />} exact />
                <Route path="/Welcome" element={<Welcome />} exact />


                <Route path="/posts/1" element={<Asix />} exact />
                <Route path="/posts/:postId/edit" element={<EditPost />} />

                {/* Boteva Cheta */}
                <Route path="/boteva-cheta" element={<BotevaChetaHomePage />} exact />
                <Route path="/boteva-cheta/history" element={<BotevaCheta />} />
                <Route path="/boteva-cheta/participants" element={<BoteviChetnitsi />} />

                {/* Boteva Poet and Journalist */}
                <Route path="/botev-poet-journalist" element={<BotevPoetPublisher />} exact />
                <Route path="/botev-poet-journalist/poems" element={<BotevPoems />} />
                <Route path="/botev-poet-journalist/publications" element={<Newspapers />} />

                {/* Museum */}
                <Route path="/museum/botev-house" element={<HBNMuseum />} />
                <Route path="/museum/school" element={<School />} />

                {/* Hristo Botev */}
                <Route path="/hristo-botev/rodoslovie" exact element={<Rodoslovie />} />
                <Route path="/hristo-botev/letopis" exact element={<Letopis />} />
                <Route path="/hristo-botev/photos" exact element={<Photographs />} />
                <Route path="/hristo-botev/belongings" exact element={<Belongings />} />
                <Route path="/hristo-botev/documents" exact element={<Documents />} />
                <Route path="/hristo-botev/botev-in-fine-arts" exact element={<Paintings />} />

                {/* Kalofer */}
                <Route path="/kalofer/history" exact element={<KaloferHistory />} />
                <Route path="/kalofer/memorials" exact element={<Memorials />} />
                <Route path="/kalofer/dantela" exact element={<KaloferskaDantela />} />
                <Route path="/kalofer/landmarks" exact element={<Landmarks />} />

                {/* About Us */}
                <Route path="/about-us/working-hours" exact element={<WorkingHours />} />
                <Route path="/about-us/contacts" exact element={<Contacts />} />
                <Route path="/about-us/information-for-visitors" exact element={<InformationForVisitors />} />
                <Route path="/about-us/publications" exact element={<Publications />} />
                <Route path="/about-us/buyers-profile" exact element={<BuyersProfile />} />
                <Route path="/about-us/Partners" exact element={<Partners />} />
            </>
        );
    }

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname} >
                {routes}
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;