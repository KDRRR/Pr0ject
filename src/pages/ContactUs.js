import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation';
import styled from 'styled-components';
import ScrollTop from '../components/ScrollTop';

const ContactUs = () => {
	return (
		<ContactStyle
			variants={pageAnimation}
			initial='hidden'
			animate='show'
			exit='exit'
			style={{ background: '#fff' }}>
			<Title>
				<Hide>
					<motion.h2 variants={titleAnim}>Contact-Us</motion.h2>
				</Hide>
			</Title>
			<div>
				<Hide>
					<Social variants={titleAnim}>
						<Circle></Circle>
						<h2>Phone number: 8(705)-112-11-03</h2>
					</Social>
				</Hide>
				<Hide>
					<Social variants={titleAnim}>
						<Circle></Circle>
						<h2>Email: Prikolushn@gmail.com</h2>
					</Social>
				</Hide>
				<Hide>
					<Social variants={titleAnim}>
						<Circle></Circle>
						<h2>Instagram: Sparta_gym_offical</h2>
					</Social>
				</Hide>
			</div>
			<ScrollTop></ScrollTop>
		</ContactStyle>
	);
};

const ContactStyle = styled(motion.div)`
	padding: 5rem 10rem;
	color: #353535;
	min-height: 90vh;
	@media (max-width: 1500px) {
		font-size: 1rem;
		padding: 2rem 2rem;
	}
`;

const Title = styled.div`
	margin-bottom: 4rem;
	color: black;
	@media (max-width: 5300px) {
		margin-top: 5rem;
	}
`;

const Hide = styled.div`
	overflow: hidden;
`;

const Circle = styled.div`
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
	background: #353535;
`;

const Social = styled(motion.div)`
	display: flex;
	align-items: center;
	h2 {
		margin: 2rem;
	}
`;

export default ContactUs;
