class DateTime {
	private currentDate: Date;
	private tomorrowDate: Date;

	constructor() {
		this.currentDate = new Date();
		this.tomorrowDate = new Date();
		this.tomorrowDate.setDate(this.currentDate.getDate() + 1);
	}

	getDay = (dt: string): string => {
		const date = new Date(dt);
		const formatter = new Intl.DateTimeFormat('en', { weekday: 'long' });
		return formatter.format(date);
	};

	getDate = (dt: string, isRelative?: boolean): string => {
		if (isRelative) {
			if (this.isSameDate(dt, this.currentDate)) return 'Today';
			else if (this.isSameDate(dt, this.tomorrowDate)) return 'Tomorrow';
		}
		return this.formatDate(new Date(dt));
	};

	getMeridiem = (dateString: string): string => {
		const date = new Date(dateString);
		const formatter = new Intl.DateTimeFormat('en', {
			hour: 'numeric',
			minute: 'numeric',
			hour12: true,
		});
		const timeString = formatter.format(date);
		return timeString.slice(-2);
	};

	getTimeIn12HourFormat = (dateString: string): string => {
		const time = this.getTime(dateString);
		return `${time}`.toUpperCase();
	};

	getCurrentDate = (): string => {
		const today: Date = new Date();

		const day: string = new Intl.DateTimeFormat('en', {
			day: 'numeric',
		}).format(today);
		const month: string = new Intl.DateTimeFormat('en', {
			month: 'short',
		}).format(today);
		const year: string = new Intl.DateTimeFormat('en', {
			year: 'numeric',
		}).format(today);

		const suffix: string = this.getOrdinalSuffix(parseInt(day));

		const formattedDate: string = `${month} ${day}${suffix}, ${year}`;
		return formattedDate;
	};

	getCurrentTime = (hoursFormat: 12 | 24 = 12): string => {
		const today: Date = new Date();

		let hours: number = today.getHours();
		const minutes: number = today.getMinutes();
		const seconds: number = today.getSeconds();

		if (hoursFormat === 12) hours = hours % 12 || 12;

		const formattedTime: string = `${this.padNumber(hours)}:${this.padNumber(
			minutes
		)}:${this.padNumber(seconds)}`;
		return formattedTime;
	};

	getCurrentTimeZone = (): string => {
		const today: Date = new Date();
		const timeZoneOffsetMinutes: number = today.getTimezoneOffset();

		const hoursOffset: number = Math.floor(
			Math.abs(timeZoneOffsetMinutes) / 60
		);
		const minutesOffset: number = Math.abs(timeZoneOffsetMinutes) % 60;

		const sign: string = timeZoneOffsetMinutes < 0 ? '+' : '-';
		const formattedTimeZone: string = `${sign}${this.padNumber(
			hoursOffset
		)}:${this.padNumber(minutesOffset)}`;

		return formattedTimeZone;
	};

	private padNumber(num: number): string {
		return num.toString().padStart(2, '0');
	}

	private getOrdinalSuffix = (day: number): string => {
		if ((day >= 4 && day <= 20) || (day >= 24 && day <= 30)) {
			return 'th';
		} else {
			return ['st', 'nd', 'rd'][(day % 10) - 1] || 'th';
		}
	};

	private formatDate(date: Date): string {
		const formatter = new Intl.DateTimeFormat('en-IN', {
			day: '2-digit',
			month: '2-digit',
			year: '2-digit',
		});
		return formatter.format(date);
	}

	private getTime = (dt: string): string => {
		const date = new Date(dt);
		const formatter = new Intl.DateTimeFormat('en-IN', {
			hour: '2-digit',
			minute: '2-digit',
		});
		return formatter.format(date);
	};

	private isSameDate(dateString: string, compareDate: Date): boolean {
		const date = new Date(dateString);
		return (
			date.getDate() === compareDate.getDate() &&
			date.getMonth() === compareDate.getMonth() &&
			date.getFullYear() === compareDate.getFullYear()
		);
	}
}

export default new DateTime();
