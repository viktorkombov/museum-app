import classes from './Button.module.scss';

const Button = props => {

    return (
        <button onClick={props.onButtonClicked}>
            {props.children}
        </button>
    );
}

export default Button;