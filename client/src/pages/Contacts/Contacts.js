import { FacebookRounded, Instagram, Phone, YouTube } from '@mui/icons-material';
import { Fragment } from 'react';
import TwoColumnsView from '../../components/Layouts/TwoColumnsView';
import CarouselBootstrap from '../../components/UI/CarouselBootstrap';
import IconRounded from '../../components/UI/IconRounded';
import classes from './Contacts.module.scss';

const Contacts = props => {
    return (
        <Fragment>
            <CarouselBootstrap items={[{ src: "https://muzeibotev.com/clients/152/files/images/PC280963.JPG", title: "Контакти" }]}></CarouselBootstrap>
            <TwoColumnsView>
                <h2>Контакти</h2>
                <Fragment>
                    <p><strong>Адрес:</strong> 4370 Калофер, ул. „Христо Ботев” № 5</p>
                    <p><strong>тел/факс:</strong> 03133/52-71 – екскурзоводи</p>
                    <p><strong>тел.</strong> 03133/54-07 – директор</p>
                    <p><strong>моб. тел.</strong> 088 666 38 38</p>
                    <p><strong>e-mail:</strong> musei_botev@abv.bg</p>
                    <br />
                    <p><strong>Социални мрежи:</strong></p>
                    <ul className={classes['social-networks-links']}>
                        <li className={classes['icon-list-item']}><IconRounded link="facebook" icon={<FacebookRounded />} large /></li>
                        <li className={classes['icon-list-item']}><IconRounded link="youtube" icon={<YouTube />} large /></li>
                        <li className={classes['icon-list-item']}><IconRounded link="instagram" icon={<Instagram />} large /></li>
                    </ul>
                </Fragment>
                <iframe width="100%" height="300" style={{ border: 0 }} loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJO7O5TAW7qUARjnOnBrBd1g0&key=AIzaSyBXvSkO_vTWQzKm8gANoDT1i3j7XS80p9E"></iframe>
            </TwoColumnsView>
        </Fragment>

    );
}

export default Contacts;