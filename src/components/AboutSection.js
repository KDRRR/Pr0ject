import { motion } from 'framer-motion';
import home1 from '../img/home1.jpg';
import { About, Description, Image, Hide } from '../styles';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from './Wave';

const AboutSection = () => {
	return (
		<About>
			<Description>
				<motion.div className='title'>
					<Hide>
						<motion.h2 variants={titleAnim}>We work to make</motion.h2>
					</Hide>
					<Hide>
						<motion.h2 variants={titleAnim}>
							your <span>dreams</span> come
						</motion.h2>
					</Hide>
					<Hide>
						<motion.h2 variants={titleAnim}>true.</motion.h2>
					</Hide>
				</motion.div>
				<motion.p variants={fade}>
					Contact us if you wanna be like Arnold Schwarzenegger. We
					have professionals with amazing skills.
				</motion.p>
				<motion.button variants={fade}>Contact Us.</motion.button>
			</Description>
			<Image>
				<motion.img
					variants={photoAnim}
					initial='hidden'
					animate='show'
					src={home1}
				/>
				<Wave></Wave>
			</Image>
		</About>
	);
};

export default AboutSection;
