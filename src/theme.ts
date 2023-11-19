import { ThemeOptions, lighten } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Theme {
		palette: {
			grey: {
				100: string;
				200: string;
				300: string;
				400: string;
				500: string;
				600: string;
				700: string;
				800: string;
				900: string;
				1000: string;
				1100: string;
				1200: string;
				light: string;
				main: string;
			};
			primary: {
				100: string;
				200: string;
				300: string;
				400: string;
				500: string;
				light: string;
				main: string;
			};
			accent: {
				100: string;
				200: string;
				300: string;
				400: string;
				main: string;
			};
			back: {
				100: string;
				main: string;
			};
			lay: {
				100: string;
				main: string;
			};
			blue: {
				100: string;
				200: string;
				300: string;
				400: string;
			};
			text: {
				primary: string;
			};
			background: {
				default: string;
				alt: string;
			};
		};
	}

	interface ZIndex {
		secondaryNav: number;
	}

	interface Theme {
		zIndex: ZIndex;
	}
}

declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
		'outlined-accent': true;
		'contained-accent': true;
		accent: true;
	}
}

export const tokensLight = {
	grey: {
		100: '#E9EBEE',
		200: '#DEDBD7',
		300: '#DDDDDD',
		400: '#D9D2D2',
		500: '#99A0A2',
		600: '#7C7C7C',
		700: '#666666',
		800: '#3E3E3E',
		900: '#232323',
		1000: '#142326',
		1100: '#0F2327',
		1200: '#022327',
		light: '#dddddd',
		main: '#DDDDDD',
	},
	primary: {
		100: '#5C996F',
		200: '#497958',
		300: '#257B23',
		400: '#1E8067',
		500: '#026B4F',
		light: '#5C996F',
		main: '#1E8067',
	},
	accent: {
		100: '#FCEDCA',
		200: '#F8B144',
		300: '#F4D821',
		400: '#C95C54',
		main: '#F4D821',
	},
	back: {
		100: '#A7D8FD',
		main: '#A7D8FD',
	},
	lay: {
		100: '#F9C9D4',
		main: '#F9C9D4',
	},
	blue: {
		100: '#3E0F54',
		200: '#367CEB',
		300: '#1E3F5A',
		400: '#005BA2',
	},
	text: {
		primary: '#000000',
	},
	background: {
		default: '#ECEAEA',
		alt: '#131515',
	},
};

export const themeSettings = (): ThemeOptions => ({
	palette: {
		...tokensLight,
	},
	typography: {
		fontFamily: ['Lato', 'Roboto', 'Helvetica Neue', 'sans-serif'].join(','),
		button: {
			fontWeight: 600,
			fontFamily: 'Lato',
		},
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: 'outlined-accent' },
					style: {
						background: 'transparent',
						border: `1px solid ${tokensLight.accent.main}`,
						':hover': {
							background: tokensLight.accent.main,
						},
					},
				},
				{
					props: { variant: 'contained-accent' },
					style: {
						background: tokensLight.accent.main,
						border: `1px solid ${tokensLight.accent.main}`,
					},
				},
				{
					props: { variant: 'accent' },
					style: {
						background: tokensLight.accent[300],
						borderRadius: '2px',
						fontSize: '1.2rem',
						fontWeight: 400,
						color: '#333333',
						whiteSpace: 'nowrap',
						padding: '1.3rem 1.8rem',

						':hover': {
							background: lighten(tokensLight.accent[300], 0.1),
						},
					},
				},
			],
			styleOverrides: {
				root: {
					borderRadius: '4px',
					padding: '1.5rem 5rem',
					fontSize: '1.4rem',
					fontWeight: 700,
				},
			},
		},
		MuiCheckbox: {
			styleOverrides: {
				root: {
					padding: '0.5rem',
					color: `${tokensLight.blue[200]}!important`,
				},
			},
		},
	},
	zIndex: {
		// secondaryNav: 3000,
	},
});
