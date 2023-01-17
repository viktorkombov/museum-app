import LoadingSpinner from '../../components/UI/LoadingSpinner';
import classes from './LoadingPage.module.scss';

const LoadingPage = () => {
    return (<div className={classes.container}>
        <LoadingSpinner />
    </div>)
}

export default LoadingPage;