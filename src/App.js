import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWorkers from './pages/OurWorkers';
import MovieDetail from './pages/MovieDetail';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const App = () => {
	const location = useLocation();
	return (
		<div className='className'>
			<GlobalStyle />
			<Nav />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.key}>
					<Route path='/' exact>
						<AboutUs></AboutUs>
					</Route>
					<Route path='/work' exact>
						<OurWorkers></OurWorkers>
					</Route>
					<Route path='/work/:id'>
						<MovieDetail></MovieDetail>
					</Route>
					<Route path='/contact'>
						<ContactUs></ContactUs>
					</Route>
				</Switch>
			</AnimatePresence>
		</div>
	);
};
export default App;
