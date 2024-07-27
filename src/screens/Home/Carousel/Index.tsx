import Slider from 'react-slick';
import {
	CarouselImage,
	CarouselContainer,
	CarouselImagesContainer,
} from './Index.styled';

const Carousel = () => {
	const settings = {
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		dots: false,
		arrows: false,
		adaptiveHeight: true,
	};

	const carouselImages: Array<string> = [
		'anupam.png',
		// 'blastoff.webp',
		'deposit-bonus.png',
		'exclusive-2.png',
		'exclusive.png',
		'kajol.png',
		'kirti.png',
		'nawaz.png',
		'nawaz2.png',
		'neha.png',
		'nidhi.png',
		'raftaar.png',
		'suniel.png',
		'tamanna.png',
	];

	return (
		<CarouselContainer>
			<Slider {...settings}>
				{carouselImages.map(image => (
					<CarouselImagesContainer
						className='carousel__image-container'
						key={image}
					>
						<CarouselImage
							className='bg-image'
							src={`/assets/images/carousel/${image}`}
						/>
					</CarouselImagesContainer>
				))}
			</Slider>
		</CarouselContainer>
	);
};

export default Carousel;
