import { useState } from 'react'
import ResumeBuilder from './ResumeBuilder'
import Preloader from './Preloader'
import '../styles/App.css'

const App = () => {
	const [start, setStart] = useState(false)

	const handleClick = () => {
		setStart(!start)
	}

	if (!start) {
		return <Preloader onClick={handleClick} />
	}
	return (
		<ResumeBuilder />
	)
}

export default App
