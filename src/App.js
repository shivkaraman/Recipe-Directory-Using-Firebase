// Styles 
import './App.css'

//Page components
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Recepie from './pages/recepie/Recepie'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import ThemeSelector from './components/ThemeSelector'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'

function App() {
	const { mode } = useTheme()
	return (
		<div className={`App ${mode}`}>
			<BrowserRouter>
				<Navbar/>
				<ThemeSelector/>
				<Routes>
					<Route path='/' element={ <Home/> }/>
					<Route path='/create' element={ <Create/> }/>
					<Route path='/recipes/:id' element={ <Recepie/> }/>
					<Route path='/search' element={ <Search/> }/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App