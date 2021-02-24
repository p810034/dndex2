//import { SourceBox } from './SourceBox';
import { TargetBox } from './TargetBox';
import { Box } from './Box';
export const Container = () => {
    return (<>
			<div style={{ overflow: 'hidden', clear: 'both', marginTop: '1.5rem' }}>
                <div style={{ overflow: 'hidden', clear: 'both', marginTop: '1.5rem' }}>
			        <Box />
                </div>
                <div style={{ float: 'left' }}>
					<TargetBox />
				</div>
			</div>
		</>);
};
