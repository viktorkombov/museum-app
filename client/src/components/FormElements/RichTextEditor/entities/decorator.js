import { CompositeDecorator } from "draft-js";

function findLinkEntities(contentBlock, callback, contentState) {
    contentBlock.findEntityRanges(
        (character) => {
            const entityKey = character.getEntity();
            return (
                entityKey !== null &&
                contentState.getEntity(entityKey).getType() === 'LINK'
            );
        },
        callback
    );
}

const Link = (props) => {
    const { url } = props.contentState.getEntity(props.entityKey).getData();
    return (
        <a href={url}>
            {props.children}
        </a>
    );
};


const decorator = new CompositeDecorator([
    {
        strategy: findLinkEntities,
        component: Link,
    },
]);

export default decorator;