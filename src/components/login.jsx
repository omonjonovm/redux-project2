import { useEffect, useState } from "react"
import { logo } from "../constants"
import { Input } from "../ui"
import { useDispatch, useSelector } from "react-redux"
import AuthService from "../service/auth"
import { signUserFailure, signUserStart, signUserSuccess } from "../slice/auth"
import { ValidationError } from "./"
import { useNavigate } from "react-router-dom"

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()
	const { isLoading, loggedIn } = useSelector(state => state.auth)
	const navigate = useNavigate()


	const loginHandler = async (e) => {
		e.preventDefault()
		dispatch(signUserStart())
		const user = { email, password }
		try {
			const response = await AuthService.userLogin(user)
			dispatch(signUserSuccess(response.user))
			navigate('/')
		} catch (error) {
			dispatch(signUserFailure(error.response.data.errors))
		}
	}
	useEffect(() => {
		if (loggedIn) {
			navigate('/')
		}
	}, [loggedIn])
	return (
		<form className="container text-center">
			<main className="form-signin w-25 m-auto">
				<img className="mb-4" src={logo} alt="" width="92" height="97" />
				<h1 className="h3 mb-3 fw-normal">Please login</h1>
				<ValidationError />
				<Input label={"Email address"} state={email} setState={setEmail} />
				<Input label={"Password"} state={password} setState={setPassword} />

				<button
					className="btn btn-primary mt-2  w-100 py-2"
					onClick={loginHandler}
					disabled={isLoading}
					type="submit"
				>
					{isLoading ? 'Loading...' : 'Sign in'}
				</button>
			</main>
		</form>
	)
}

export default Login
