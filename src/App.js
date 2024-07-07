import { Routes, Route } from 'react-router-dom'
import { Main, Login, Register, Navbar } from './components'
import { useEffect } from 'react'
import AuthService from './service/auth'
import { useDispatch } from 'react-redux'
import { signUserSuccess } from './slice/auth'
import { getItem } from './helpers/persistance-storage'

const App = () => {
	const dispatch = useDispatch()

	const getUser = async () => {
		try {
			const response = await AuthService.getUser()
			console.log(response);
			dispatch(signUserSuccess(response.user))
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(() => {
		const token = getItem('token')
		if (token) {
			getUser()
		}
	}, [])
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</div>
	)
}

export default App
