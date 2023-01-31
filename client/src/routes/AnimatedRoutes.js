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
import HomeEN from '../pagesEN/HomeEN/HomeEN';
import WelcomeEN from '../pagesEN/WelcomeEN';
import InformationForVisitorsEN from '../pagesEN/InformationForVisitorsEN';
import ContactsEN from '../pagesEN/ContactsEN';
import BotevaCheta from '../pages/BotevaCheta/BotevaCheta';
import BotevaChetaHomePage from '../pages/BotevaChetaHomePage/BotevaChetaHomePage';

const Home = lazy(() => import('../pages/Home'));
const HBNMuseum = lazy(() => import('../pages/HBNMuseum'));
const School = lazy(() => import('../pages/School'));
const GridView = lazy(() => import('../components/Layouts/GridView'));
const Contacts = lazy(() => import('../pages/Contacts'));
const BotevPoetPublisher = lazy(() => import('../pages/BotevPoetPublisher'));
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
                <Route path="/" exact element={<Navigate to="/bg/nachalo" />} />
                <Route path="/bg/profile" element={<AdminPanel />} exact />
                <Route path="/bg/nachalo" element={<Home />} />
                <Route />
                <Route path="/loading" element={<LoadingPage />} exact />
                <Route path="/bg/dobre-doshli" element={<Welcome />} exact />


                {/* News */}
                <Route path="/bg/novini" element={<GridView />} exact />
                <Route path="/bg/novini/create" element={<NewPost />} exact />
                <Route path="/bg/novini/:postId" element={<Asix />} exact />
                <Route path="/bg/novini/:postId/edit" element={<EditPost />} exact />

                {/* Boteva Cheta */}
                <Route path="/bg/boteva-cheta" element={<BotevaChetaHomePage />} exact />
                <Route path="/bg/boteva-cheta/istoria" element={<BotevaCheta />} />
                <Route path="/bg/boteva-cheta/botevi-chetnitsi" element={<BoteviChetnitsi />} />

                {/* Boteva Poet and Journalist */}
                <Route path="/bg/botev-poet-zhurnalist" element={<BotevPoetPublisher />} exact />
                <Route path="/bg/botev-poet-zhurnalist/stihotvorenia" element={<BotevPoems />} />
                <Route path="/bg/botev-poet-zhurnalist/publitsistika" element={<Newspapers />} />

                {/* Museum */}
                <Route path="/bg/muzei/muzei-hristo-botev" element={<HBNMuseum />} />
                <Route path="/bg/muzei/uchilishte" element={<School />} />

                {/* Hristo Botev */}
                <Route path="/bg/hristo-botev/rodoslovie" exact element={<Rodoslovie />} />
                <Route path="/bg/hristo-botev/letopis" exact element={<Letopis />} />
                <Route path="/bg/hristo-botev/snimki" exact element={<Photographs />} />
                <Route path="/bg/hristo-botev/lichni-veshti" exact element={<Belongings />} />
                <Route path="/bg/hristo-botev/dokumenti" exact element={<Documents />} />
                <Route path="/bg/hristo-botev/botev-v-izobrazitelnoto-izkustvo" exact element={<Paintings />} />

                {/* Kalofer */}
                <Route path="/bg/kalofer/istoria" exact element={<KaloferHistory />} />
                <Route path="/bg/kalofer/pametnitsi" exact element={<Memorials />} />
                <Route path="/bg/kalofer/dantela" exact element={<KaloferskaDantela />} />
                <Route path="/bg/kalofer/priroda-i-turizam" exact element={<Landmarks />} />

                {/* About Us */}
                <Route path="/bg/za-nas/rabotno-vreme" exact element={<WorkingHours />} />
                <Route path="/bg/za-nas/kontakti" exact element={<Contacts />} />
                <Route path="/bg/za-nas/za-posetiteli" exact element={<InformationForVisitors />} />
                <Route path="/bg/za-nas/izdania" exact element={<Publications />} />
                <Route path="/bg/za-nas/profil-na-kupuvacha" exact element={<BuyersProfile />} />
                <Route path="/bg/za-nas/partnyori" exact element={<Partners />} />

                {/* EN */}
                <Route path="/en/home" element={<HomeEN />} exact />
                <Route path="/en/information-for-visitors" exact element={<InformationForVisitorsEN />} />
                <Route path="/en/contacts" exact element={<ContactsEN />} />
                <Route path="/en/welcome" element={<WelcomeEN />} exact />
            </>
        );
    } else {
        routes = (
            <>
                <Route path="/" exact element={<Navigate to="/bg/nachalo" />} />
                <Route path="/bg/profile" element={<AdminPanel />} exact />
                <Route path="/bg/nachalo" element={<Home />} />
                <Route />
                <Route path="/loading" element={<LoadingPage />} exact />
                <Route path="/bg/dobre-doshli" element={<Welcome />} exact />


                {/* News */}
                <Route path="/bg/novini" element={<GridView />} exact />
                <Route path="/bg/novini/create" element={<NewPost />} exact />
                <Route path="/bg/novini/:postId" element={<Asix />} exact />
                <Route path="/bg/novini/:postId/edit" element={<EditPost />} exact />

                {/* Boteva Cheta */}
                <Route path="/bg/boteva-cheta" element={<BotevaChetaHomePage />} exact />
                <Route path="/bg/boteva-cheta/istoria" element={<BotevaCheta />} />
                <Route path="/bg/boteva-cheta/botevi-chetnitsi" element={<BoteviChetnitsi />} />

                {/* Boteva Poet and Journalist */}
                <Route path="/bg/botev-poet-zhurnalist" element={<BotevPoetPublisher />} exact />
                <Route path="/bg/botev-poet-zhurnalist/stihotvorenia" element={<BotevPoems />} />
                <Route path="/bg/botev-poet-zhurnalist/publitsistika" element={<Newspapers />} />

                {/* Museum */}
                <Route path="/bg/muzei/muzei-hristo-botev" element={<HBNMuseum />} />
                <Route path="/bg/muzei/uchilishte" element={<School />} />

                {/* Hristo Botev */}
                <Route path="/bg/hristo-botev/rodoslovie" exact element={<Rodoslovie />} />
                <Route path="/bg/hristo-botev/letopis" exact element={<Letopis />} />
                <Route path="/bg/hristo-botev/snimki" exact element={<Photographs />} />
                <Route path="/bg/hristo-botev/lichni-veshti" exact element={<Belongings />} />
                <Route path="/bg/hristo-botev/dokumenti" exact element={<Documents />} />
                <Route path="/bg/hristo-botev/botev-v-izobrazitelnoto-izkustvo" exact element={<Paintings />} />

                {/* Kalofer */}
                <Route path="/bg/kalofer/istoria" exact element={<KaloferHistory />} />
                <Route path="/bg/kalofer/pametnitsi" exact element={<Memorials />} />
                <Route path="/bg/kalofer/dantela" exact element={<KaloferskaDantela />} />
                <Route path="/bg/kalofer/priroda-i-turizam" exact element={<Landmarks />} />

                {/* About Us */}
                <Route path="/bg/za-nas/rabotno-vreme" exact element={<WorkingHours />} />
                <Route path="/bg/za-nas/kontakti" exact element={<Contacts />} />
                <Route path="/bg/za-nas/za-posetiteli" exact element={<InformationForVisitors />} />
                <Route path="/bg/za-nas/izdania" exact element={<Publications />} />
                <Route path="/bg/za-nas/profil-na-kupuvacha" exact element={<BuyersProfile />} />
                <Route path="/bg/za-nas/partnyori" exact element={<Partners />} />

                {/* EN */}
                <Route path="/en/home" element={<HomeEN />} exact />
                <Route path="/en/information-for-visitors" exact element={<InformationForVisitorsEN />} />
                <Route path="/en/contacts" exact element={<ContactsEN />} />
                <Route path="/en/welcome" element={<WelcomeEN />} exact />
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