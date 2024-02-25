import { useState } from 'react'
import ResumeBuilder from './ResumeBuilder'
import Preloader from './Preloader'

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
