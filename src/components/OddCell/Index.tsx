import { OddCellContainer, OddValue, OddSize } from './Index.styled';

interface OddCellProps {
	odd: string | any;
	size?: string | any;
	color: 'blue' | 'red';
	type:
	| 'team1back'
	| 'drawback'
	| 'team2back'
	| 'team1lay'
	| 'drawlay'
	| 'team2lay';
	OddsData?: any;
	allData?: any;
	SelectionIdForAll?: any;
	isStandBy?: boolean
}

const OddCell = (props: OddCellProps) => {
	const { odd = 1.05, size, color, type, allData, SelectionIdForAll, isStandBy } = props;

	const handleOddsData = (vl: any, allData: any, SelectionIdForAll: any, color: any,size:any) => {
		console.log(vl, allData, "kjuhygtfvb");

		props.OddsData({ vl, allData, SelectionIdForAll, color ,size})
	}

	console.log(size, "ccsdcdcfsdfsdfsdfs")


	return (
		<OddCellContainer
			data-odd-type={type}
			className={`odd ${type}`}
			color={color}
			type={type}
			onClick={() => handleOddsData(odd, allData, SelectionIdForAll, color,size)}
		>
			{!isStandBy && <>
				<OddValue className='odd__value' >{odd}</OddValue>
				<OddSize className='odd__size'>{size || 0}</OddSize>
			</>}
		</OddCellContainer>
	);
};

export default OddCell;
