import Chip from "../UI/Chip";
import MasterDetailTable from "../UI/MasterDetailTable";
import classes from "./SimplePost.module.scss";
import image from "../../images/flag-uk.png";
import Gallery from "../UI/Gallery";
import ModalBootstrap from "../UI/ModalBootstrap";
import CarouselBootstrap from "../UI/CarouselBootstrap";
import { Fragment, useState } from "react";
import Image from "../UI/Image/Image";
import CustomizedTimeLine from "../UI/CustomizedTimeLine";
import History from "./History";
import DetailContent from "../UI/MasterDetailTable/DetailContent";
import DetailText from "../UI/MasterDetailTable/DetailText";
import AccordionList from "../UI/AccordionList";

const SimplePost = (props) => {
  const { children } = props;
  return (
    <section className={classes.post} id="section2">
      {children}
    </section>
  );
};

export default SimplePost;
