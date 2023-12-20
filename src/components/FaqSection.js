import styled from 'styled-components';
import { About } from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';

const FaqSection = () => {
	const [element, controls] = useScroll();
	return (
		<Faq
			variants={scrollReveal}
			ref={element}
			animate={controls}
			initial={'hidden'}>
			<h2>
				AnyQuestions <span>FAQ</span>
			</h2>
			<AnimateSharedLayout>
				<Toggle title='How Do I Start?'>
					<div className='answer'>
						<p>How To Start Going To The Gym For Beginners.</p>
						<p>
							Rest for up to 90 seconds between exercises as needed. If you start working up a good sweat in 5-10 minutes you know. Start with light weights and build up slowly over time.
						</p>
					</div>
				</Toggle>
				<Toggle title={'Daily Schedule.'}>
					<div className='answer'>
						<p>Sample Daily Gym Schedule for Beginners.</p>
						<p>
							Monday: 30 minutes of cardio (jogging or using the elliptical), 30 minutes of strength training (using dumbbells or weight machines)
						</p>
						<p>
							Tuesday: Rest day or low-intensity workout (yoga or stretching)
						<p>
							Wednesday: 30 minutes of cardio (biking or swimming), 30 minutes of strength training (using resistance bands or bodyweight exercises)						</p>
						</p>
						<p>
							Thursday: Rest day or low-intensity workout (yoga or stretching)
						</p>
						<p>
							Friday: 30 minutes of cardio (running or using the elliptical), 30 minutes of strength training (using dumbbells or weight machines)						</p>
						<p>
							Saturday: Rest day or low-intensity workout (yoga or stretching)
						</p>
						<p>
							Sunday: Rest day
						</p>
					</div>
				</Toggle>
				<Toggle title={'Different Payment Methods.'}>
					<div className='answer'>
						<p>KASPI RED</p>
						<p>
						CASH
						</p>
						<p>CARD
						</p>
					</div>
				</Toggle>
				<Toggle title={'What Product do you offer.'}>
					<div className='answer'>
						<p>
							We provide the best fitness club services in the city.
						</p>
					</div>
				</Toggle>
			</AnimateSharedLayout>
		</Faq>
	);
};

const Faq = styled(About)`
	display: block;
	span {
		display: block;
	}
	h2 {
		padding-bottom: 2rem;
		font-weight: lighter;
	}
	.faq-line {
		background: #cccccc;
		height: 0.2rem;
		margin: 2rem 0rem;
		width: 100%;
	}
	.question {
		padding: 3rem 0rem;
		cursor: 2rem 0rem;
	}
	.answer {
		padding: 2rem 0rem;
		p {
			padding: 1rem 0rem;
		}
	}
`;

export default FaqSection;
