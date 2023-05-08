// Styles 
import './App.css'

//Page components
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Recepie from './pages/recepie/Recepie'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import ThemeSelector from './components/ThemeSelector'


import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'

function App() {
	const { mode } = useTheme()
	return (
		<div className={`App ${mode}`}>
			<BrowserRouter>
				<Navbar/>
				<ThemeSelector/>
				<Switch>
					<Route exact path='/'>
						<Home/>
					</Route>
					<Route path='/create'>
						<Create/>
					</Route>
					<Route path='/recipes/:id'>
						<Recepie/>
					</Route>
					<Route path='/search'>
						<Search/>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App