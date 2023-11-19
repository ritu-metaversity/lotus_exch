import { IconContainer, IconImage } from './Index.styled';

interface IconProps {
	isSvgIcon?: boolean;
	src: string;
	width?: string | number;
	height?: string | number;
}

const Icon = (props: IconProps) => {
	const { isSvgIcon, src, width, height } = props;

	return (
		<IconContainer className='icon' width={width} height={height}>
			{isSvgIcon ? (
				<svg>
					<use href={src} xlinkHref={src} />
				</svg>
			) : (
				<IconImage src={src} alt='' />
			)}
		</IconContainer>
	);
};

export default Icon;
