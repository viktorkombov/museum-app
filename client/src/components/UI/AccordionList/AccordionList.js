import { Accordion, AccordionDetails, AccordionSummary, Paper, Typography } from '@mui/material';
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import classes from './AccordionList.module.scss';
import SearchInput from '../SearchInput';
import { useState } from 'react';

const data = [{
    title: 'Майце си', content: `Ти ли си, мале, тъй жално пела,
ти ли си мене три годин клела,
та скитник ходя злочестен ази
и срещам това, що душа мрази?

Бащино ли съм пропил имане,
тебе ли покрих с дълбоки рани,
та мойта младост, мале, зелена
съхне и вехне люто язвена?!

Весел ме гледат мили другари,
че с тях наедно и аз се смея,
но те не знаят, че аз веч тлея,
че мойта младост слана попари!

Отде да знаят? Приятел нямам
да му разкрия що в душа тая;
кого аз любя и в какво вярвам -
мечти и мисли - от що страдая.

Освен теб, мале, никого нямам,
ти си за мене любов и вяра;
но тука вече не се надявам
тебе да любя: сърце догаря!

Много аз, мале, много мечтаях
щастие, слава да видим двама,
сила усещах - що не желаях?
Но за вси желби приготви яма!

Една сал клета, една остана:
в прегръдки твои мили да падна,
та туй сърце младо, таз душа страдна
да се оплачат тебе горкана...

Баща и сестра и братя мили
аз да прегърна искам без злоба,
пък тогаз нека измръзнат жили,
пък тогаз нека изгния в гроба!`}, {
    title: 'Qайце си', content: `Ти ли си, мале, тъй жално пела,
ти ли си мене три годин клела,
та скитник ходя злочестен ази
и срещам това, що душа мрази?

Бащино ли съм пропил имане,
тебе ли покрих с дълбоки рани,
та мойта младост, мале, зелена
съхне и вехне люто язвена?!

Весел ме гледат мили другари,
че с тях наедно и аз се смея,
но те не знаят, че аз веч тлея,
че мойта младост слана попари!

Отде да знаят? Приятел нямам
да му разкрия що в душа тая;
кого аз любя и в какво вярвам -
мечти и мисли - от що страдая.

Освен теб, мале, никого нямам,
ти си за мене любов и вяра;
но тука вече не се надявам
тебе да любя: сърце догаря!

Много аз, мале, много мечтаях
щастие, слава да видим двама,
сила усещах - що не желаях?
Но за вси желби приготви яма!

Една сал клета, една остана:
в прегръдки твои мили да падна,
та туй сърце младо, таз душа страдна
да се оплачат тебе горкана...

Баща и сестра и братя мили
аз да прегърна искам без злоба,
пък тогаз нека измръзнат жили,
пък тогаз нека изгния в гроба!`}];

data.push({ title: 'kk', content: 'jj' })

const AccordionList = props => {
    const [records, setRecords] = useState(data);
    const [expandedPanels, setExpandedPanels] = useState([]);

    const requestSearch = (searchedVal) => {
        setExpandedPanels([]);
        const filteredRows = data.filter((rec) => {
            return rec.title.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setRecords(filteredRows);
    };

    const handleChange = (id) => (event, expanded) => {
        let currExpanded;
        if (expanded) {
            currExpanded = expandedPanels.concat(id);
        } else {
            currExpanded = expandedPanels.filter(expandedPandelId => expandedPandelId !== id);
        }
        setExpandedPanels(currExpanded);
    };

    return (
        <Paper
            sx={{
                width: "100%",
                minHeight: `calc(${data.length + 1} * 47px)`,
                "*": { fontFamily: '"Comfortaa", sans-serif !important' },
            }}
            elevation={1}
        >
            <SearchInput placeHolder="Търси по заглавие" requestSearch={requestSearch} />
            {records.length ? records.map((rec, i) => (
                <Accordion disableGutters TransitionProps={{ timeout: 0 }} expanded={expandedPanels.includes(`panel${rec.title}`)} onChange={handleChange(`panel${rec.title}`)}>
                    <AccordionSummary
                        sx={{
                            bgcolor: '#F8F8F8',
                            flexDirection: 'row-reverse',
                            '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                                transform: 'rotate(90deg)',
                            },
                            '& .MuiAccordionSummary-content': {
                                marginLeft: '1rem',
                            },
                        }}
                        className={expandedPanels.includes(`panel${rec.title}`) && classes.active}
                        key={rec.title}
                        focusRipple
                        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
                        aria-controls={`panel${i + 1}a-content`}
                        id={`panel${i + 1}a-header`}
                    >
                        <div className={classes['summary-background']}></div>
                        <Typography sx={{ zIndex: 1, width: '40%', flexShrink: 0, mr: '1rem', lineHeight: 'inherit'}}>{rec.title}</Typography>
                        <Typography sx={{ color: 'text.secondary', fontSize: '0.8rem', lineHeight: 'inherit' }}>Букурещ, 1872 г.</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{bgcolor: '#faf0e6'}}>
                        <Typography>
                            {rec.content.split('\n').map(p => <p>{p}</p>)}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            )) : <div className={classes['no-results']}><p>Няма открити резултати</p></div>}
        </Paper>
    )
}

export default AccordionList;