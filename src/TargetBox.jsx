import { useState } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
const style = {
    border: '1px solid gray',
    height: '15rem',
    width: '15rem',
    padding: '2rem',
    textAlign: 'center',
};
function getStyle(backgroundColor) {
    return {
        border: '1px solid rgba(0,0,0,0.2)',
        minHeight: '8rem',
        minWidth: '8rem',
        color: 'white',
        backgroundColor,
        padding: '2rem',
        paddingTop: '1rem',
        margin: '1rem',
        textAlign: 'center',
        float: 'left',
        fontSize: '1rem',
    };
}

export const TargetBox = ({children}) => {
    const [hasDropped, setHasDropped] = useState(false);
    const [hasDroppedOnChild, setHasDroppedOnChild] = useState(false);
    const [{ isOver, isOverCurrent }, drop] = useDrop(() => ({
        accept: ItemTypes.BOX,
        drop(item, monitor) {
            const didDrop = monitor.didDrop();
            if (didDrop) {
                return;
            }
            setHasDropped(true);
            setHasDroppedOnChild(didDrop);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            isOverCurrent: monitor.isOver({ shallow: true }),
        }),
    }), [setHasDropped, setHasDroppedOnChild]);
    let backgroundColor = 'rgba(0, 0, 0, .5)';
    if (isOverCurrent || (isOver)) {
        backgroundColor = 'darkgreen';
    }
    return (<div ref={drop} style={style}>
			<br />
			{hasDropped && <span>dropped {hasDroppedOnChild && ' on child'}</span>}
            {hasDropped && <input type="button" value="Click me" onclick="msg()" />}
			<div>{children}</div>
		</div>);
};