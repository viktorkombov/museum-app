import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { navigationItems } from '../../../utils/data'
import { Link, useLocation } from "react-router-dom";
const NavDrawer = ({ closeDrawer, toggleDrawer, open }) => {

    const accordions = ['museum', 'botev', 'kalofer', 'aboutUs'];

    return (
        <Drawer className="drawer" anchor="left" open={open} onClose={toggleDrawer(false)}>
            <Box className="drawer-box" sx={{ width: '370px', "*": { fontFamily: '"Comfortaa", sans-serif !important' } }} role="presentation">
                <List>
                    <List>
                        <ListItem >
                            <ListItemButton>
                                <ListItemText primary="Начало" />
                            </ListItemButton>
                        </ListItem>
                        {accordions.map(accordion => <ListItem>
                            <Accordion
                                key={accordion}
                                square
                                disableGutters
                                className="accordion"
                                TransitionProps={{timeout:0}}
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
                                            <ListItemButton component={Link} to={item.link}>
                                                <ListItemText primary={item.name} />
                                            </ListItemButton>
                                        </ListItem>)}
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                        </ListItem>)}
                    </List>
                </List>
            </Box>
        </Drawer>
    );
};
export default NavDrawer;
