import { ReactNode, SyntheticEvent, useState } from 'react';
import Box from '@mui/material/Box';
import MuiTab, { TabProps as MuiTabProps } from '@mui/material/Tab';
import { StyledTabs } from './Index.styled';

interface TabData {
	label: string;
	content: ReactNode;
	render?: (content: ReactNode, index?: number) => ReactNode;
	tabProps?: MuiTabProps;
}

interface TabProps {
	tabs: Array<TabData>;
	defaultActiveTab?: number;
	onTabChange?: (index: number) => void;
	contentRenderer?: (content: ReactNode, index?: number) => ReactNode;
}

const Tab = (props: TabProps) => {
	const { tabs, contentRenderer } = props;

	const [activeTabIndex, setActiveTabIndex] = useState(0);

	const handleTabChange = (_: SyntheticEvent, newActiveTabIndex: number) => {
		setActiveTabIndex(newActiveTabIndex);
	};

	const handleTabContentRender = (
		content: ReactNode,
		index: number,
		render?: (content: ReactNode, index?: number) => ReactNode
	): ReactNode => {
		if (render) return render(content, index);
		if (contentRenderer) return contentRenderer(content, index);

		return content;
	};

	return (
		<Box className='tab'>
			<StyledTabs
				value={activeTabIndex}
				onChange={handleTabChange}
				variant='scrollable'
			>
				{tabs.map(({ label, tabProps }, idx) => (
					<MuiTab key={idx} label={label} {...tabProps} />
				))}
			</StyledTabs>

			<Box className='tab__content'>
				{tabs.map(({ content, render }, idx) => (
					<Box display={activeTabIndex === idx ? 'block' : 'none'} key={idx}>
						{activeTabIndex === idx &&
							handleTabContentRender(content, idx, render)}
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default Tab;
