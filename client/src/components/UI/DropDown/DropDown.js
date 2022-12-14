import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Fade from 'react-bootstrap/Fade';
import { Link } from 'react-router-dom';

import classes from './DropDown.module.scss';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href=""
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
    </a>
));

const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        const [value, setValue] = useState('');

        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <ul className={classes["dropdown-items"]}>
                    {React.Children.toArray(children).filter(
                        (child, i) =>
                            (!value || child.props.children.toLowerCase().startsWith(value)) && i !== 0,
                    )}
                </ul>
            </div>
        );
    },
);

const DropDown = props => {
    const [isActive, setIsActive] = useState(false);
    const [show, setShow] = useState(false);

    const showDropdown = (e) => {
        setShow(!show);
        setIsActive(!show)
    }
    const hideDropdown = e => {
        setShow(false);
        setIsActive(false);
    }

    const onToggle = (show, ui) => {
        console.log('asd')
        setIsActive(show);
    }

    return (
        <Dropdown onToggle={onToggle} className={isActive ? props.activeClass : ''} show={show} onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown} >
        {/* <Dropdown onToggle={onToggle} className={isActive ? props.activeClass : ''}> */}
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                {React.Children.toArray(props.children)[0]}
            </Dropdown.Toggle>
            <Fade in={isActive}>
                <Dropdown.Menu as={CustomMenu} className={classes['dropdown-menu']}>
                    {React.Children.toArray(props.children).map((child, i, array) => {
                        const itemClassList = [classes['dropdown-item']];
                        if (i === array.length - 1) {
                            itemClassList.push(classes['dropdown-item--last'])
                        }
                        if (i === 1) {
                            itemClassList.push(classes['dropdown-item--first'])
                        }
                        return <Dropdown.Item onClick={hideDropdown} as={Link} to={child.props.to} className={itemClassList.join(' ')} eventKey={i}>
                            <span>{child}</span></Dropdown.Item>
                    })}
                </Dropdown.Menu>
            </Fade>
        </Dropdown>
    );
}

export default DropDown;