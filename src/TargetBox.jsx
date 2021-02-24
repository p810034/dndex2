import { useState } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import Draggable from 'react-draggable';
const style = {
    border: '1px solid gray',
    height: '30rem',
    width: '30rem',
    padding: '2rem',
    textAlign: 'center',
};

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
    return (
        
            <div ref={drop} style={style}>
			    <br />
                {hasDropped && <input type="text" name="text" />}
			    <div>{children}</div>
		    </div>
        
        );
};