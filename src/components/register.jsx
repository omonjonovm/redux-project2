import { useState } from "react"
import { logo } from "../constants"
import { Input } from '../ui'
import { useDispatch, useSelector } from "react-redux"
import { signUserFailure, signUserStart, signUserSuccess } from "../slice/auth"
import AuthService from "../service/auth"
import {ValidationError} from "./"
const Register = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()
	const { isLoading } = useSelector(state => state.auth)

	const registerHandler = async (e) => {
		e.preventDefault()
		dispatch(signUserStart())
		const user = { username: name, email, password }
		try {
			const response = await AuthService.userRegister(user)
			dispatch(signUserSuccess(response.user))
		} catch (error) {
			dispatch(signUserFailure(error.response.data.errors))
		}
	}
	return (
		<form className="container text-center">
			<main className="form-signin w-25 m-auto">
				<img className="mb-4" src={logo} alt="" width="92" height="97" />
				<h1 className="h3 mb-3 fw-normal">Please register</h1>
				<ValidationError />
				<Input label={"Username"} state={name} setState={setName} />
				<Input label={"Email address"} state={email} setState={setEmail} />
				<Input label={"Password"} state={password} setState={setPassword} />
				<button
					className="btn btn-primary mt-2  w-100 py-2"
					type="submit"
					onClick={registerHandler}
					disabled={isLoading}
				>
					{isLoading ? 'Loading...' : 'Sign in'}
				</button>
			</main>
		</form>
	)
}

export default Register
