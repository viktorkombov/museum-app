import { Fragment } from "react";

const PostAside = props => {
    const {children} = props;

    return (
        <Fragment>
            {children}
        </Fragment>
    )
}

export default PostAside;