import { useEffect, useState } from 'react';
import dateService from '../../services/dateTime';
import {
	NavbarDate,
	NavbarDateTimeContainer,
	NavbarTime,
	NavbarTimeZone,
} from './Index.styled';

interface DateTimeInfo {
	date: string;
	time: string;
	timezone: string;
}

const NavbarDateTime = () => {
	const [dateTime, setDateTime] = useState<DateTimeInfo>({} as DateTimeInfo);

	useEffect(() => {
		const updateTime = () => {
			const newDateTime = {
				date: dateService.getCurrentDate(),
				time: dateService.getCurrentTime(24),
				timezone: dateService.getCurrentTimeZone(),
			};

			setDateTime(newDateTime);
		};

		const timeInMs = 1000; // 1s
		const intervalId = setInterval(updateTime, timeInMs);
		updateTime(); // Initial time update;

		// Clean up interval on component unmount
		return () => clearInterval(intervalId);
	}, []);

	return (
		<NavbarDateTimeContainer>
			<NavbarDate>{dateTime.date}</NavbarDate>
			<NavbarTime>{dateTime.time}</NavbarTime>
			<NavbarTimeZone>( {dateTime.timezone} v )</NavbarTimeZone>
		</NavbarDateTimeContainer>
	);
};

export default NavbarDateTime;
