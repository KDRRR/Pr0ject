import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ScrollTop from '../components/ScrollTop';
import athlete1 from '../img/athlete-small.png';
import athlete2 from '../img/athlete-small2.jpg';
import athlete3 from '../img/athletesmall3.jpg';
import { motion } from 'framer-motion';
import {
	sliderContainer,
	pageAnimation,
	fade,
	photoAnim,
	lineAnim,
	slider,
} from '../animation';
import { useScroll } from '../components/useScroll';

const OurWorkers = () => {
	const [element, controls] = useScroll();
	const [element2, controls2] = useScroll();
	return (
		<Work
			variants={pageAnimation}
			initial='hidden'
			animate='show'
			exit='exit'
			style={{ background: '#fff' }}>
			<ScrollTop></ScrollTop>
			<motion.div variants={sliderContainer}>
				<Frame1 variants={slider}></Frame1>
				<Frame2 variants={slider}></Frame2>
				<Frame3 variants={slider}></Frame3>
				<Frame4 variants={slider}></Frame4>
			</motion.div>
			<Movie>
				<motion.h2 variants={fade}>The Athlete</motion.h2>
				<motion.div variants={lineAnim} className='line'></motion.div>
				<Link to='/work/athlete'>
					<Hide>
						<motion.img variants={photoAnim} src={athlete1} alt='athlete' />
					</Hide>
				</Link>
			</Movie>
			<Movie ref={element} variants={fade} animate={controls} initial='hidden'>
				<motion.h2 variants={fade}>The Athlete</motion.h2>
				<motion.div variants={lineAnim} className='line'></motion.div>
				<Link to='/work/athlete'>
					<Hide>
						<motion.img variants={photoAnim} src={athlete2} alt='athlete2' />
					</Hide>
				</Link>
			</Movie>
			<Movie
				ref={element2}
				variants={fade}
				animate={controls2}
				initial='hidden'>
				<motion.h2 variants={fade}>The Athlete</motion.h2>
				<motion.div variants={lineAnim} className='line'></motion.div>
				<Link to='/work/athlete'>
					<Hide>
						<motion.img variants={photoAnim} src={athlete3} alt='athlete3' />
					</Hide>
				</Link>
			</Movie>
		</Work>
	);
};

const Work = styled(motion.div)`
	min-height: 100vh;
	overflow: hidden;
	padding: 5rem 10rem;
	h2 {
		padding: 1rem 0rem;
	}
	@media (max-width: 1300px) {
		padding: 2rem 2rem;
	}
`;
const Movie = styled(motion.div)`
	padding-bottom: 10rem;
	.line {
		height: 0.5rem;
		background: #23d997;
		margin-bottom: 3rem;
	}
	img {
		width: 100%;
		height: 70vh;
		object-fit: cover;
	}
`;

const Hide = styled.div`
	overflow: hidden;
`;

const Frame1 = styled(motion.div)`
	position: fixed;
	left: 0;
	top: 10%;
	width: 100%;
	height: 100vh;
	background: #fffebf;
	z-index: 2;
`;

const Frame2 = styled(Frame1)`
	background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
	background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
	background: #8effa0;
`;

export default OurWorkers;
