//Import Images
import athlete from './img/athlete-small.png';
import athlete3 from './img/athletesmall3.jpg';
import athlete2 from './img/athlete-small2.jpg';
import athlete11 from './img/athlete1.png';
import athlete22 from './img/athlete2.jpg';
import athlete33 from './img/athlete3.jpg';

export const MovieState = () => {
	return [
		{
			title: 'The Athlete',
			mainImg: athlete,
			secondaryImg: athlete11,
			url: '/work/athlete',
			awards: [
				{
					title: 'Who is a gym trainer?',
					description:
						'“A gym trainer, also known as a fitness trainer or personal trainer, is a professional who provides guidance, support, and instruction to individuals or groups in a gym or fitness setting. Their primary role is to help clients achieve their fitness goals, improve their physical health, and adopt a sustainable and effective exercise routine.”',
				},
				{
					title: 'What does a gym trainer do?',
					description:
						'“Gym trainers are required to work with people/clients of all ages. You need to be friendly and encouraging to retain your clients. You also need to listen to what the client is saying to determine their fitness level and the desired goals they are looking for.”',
				},

			],
		},
		{
			title: 'Athlete',
			mainImg: athlete3,
			url: '/work/athlete',
			secondaryImg: athlete33,
			awards: [
				{
					title: 'Who is a gym trainer?',
					description:
						'“A gym trainer, also known as a fitness trainer or personal trainer, is a professional who provides guidance, support, and instruction to individuals or groups in a gym or fitness setting. Their primary role is to help clients achieve their fitness goals, improve their physical health, and adopt a sustainable and effective exercise routine.”',
				},
				{
					title: 'What does a gym trainer do?',
					description:
						'“Gym trainers are required to work with people/clients of all ages. You need to be friendly and encouraging to retain your clients. You also need to listen to what the client is saying to determine their fitness level and the desired goals they are looking for.”',
				},

			],
		},
		{
			title: 'Athlete',
			mainImg: athlete2,
			url: '/work/athlete',
			secondaryImg: athlete22,
			awards: [
				{
					title: 'Who is a gym trainer?',
					description:
						'“A gym trainer, also known as a fitness trainer or personal trainer, is a professional who provides guidance, support, and instruction to individuals or groups in a gym or fitness setting. Their primary role is to help clients achieve their fitness goals, improve their physical health, and adopt a sustainable and effective exercise routine.”',
				},
				{
					title: 'What does a gym trainer do?',
					description:
						'“Gym trainers are required to work with people/clients of all ages. You need to be friendly and encouraging to retain your clients. You also need to listen to what the client is saying to determine their fitness level and the desired goals they are looking for.”',
				},

			],
		},
	];
};
