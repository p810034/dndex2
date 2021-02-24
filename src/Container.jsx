//import { SourceBox } from './SourceBox';
import { TargetBox } from './TargetBox';
import ContainedButtons from './components/Button';
import Inputs from './components/Inputs';
import Draggable from 'react-draggable';

export const Container = () => {
    return (<>
			<div style={{ overflow: 'hidden', clear: 'both', marginTop: '1.5rem' }}>
                <Draggable>
                <div style={{ overflow: 'hidden', clear: 'both', marginTop: '1.5rem' }}>
			        <Inputs />
                </div>
                </Draggable>
                <Draggable>
                <div style={{ overflow: 'hidden', clear: 'both', marginTop: '1.5rem' }}>
			        <ContainedButtons />
                </div>
                </Draggable>
                <div style={{ float: 'left' }}>
					<TargetBox />
				</div>
			</div>
		</>);
};
