export const isBetOpened = (gameStatus: string) => {
	const regex = /^(suspended|ball running)$/i;

	return !(regex.test(gameStatus) && gameStatus.trim() !== '');
};
