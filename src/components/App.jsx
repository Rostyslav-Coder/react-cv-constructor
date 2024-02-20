import { useState } from 'react'
import Content from './Content'
import Preloader from './Preloader'
import '../styles/App.css'

const App = () => {
	const [start, setStart] = useState(false)

	const handleClick = () => {
		setStart(!start)
	}

	if (!start) {
		return (
			<Preloader onClick={handleClick} />
		)
	}
	return <Content />
}

export default App
