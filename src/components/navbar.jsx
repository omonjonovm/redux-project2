import {Link} from 'react-router-dom'

const Navbar = () => {
	return (
		<div className='d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3'>
			<Link to={'/'}>
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png" alt="" width={'72px'} height={'60px'} />
			</Link>

			<nav className='d-inline-flex mt-2 mt-md-0 ms-md-auto'>
				<Link className='me-3 py-2 text-dark text-decoration-none' to={'/login'}>
					Login
				</Link>
				<Link className='me-3 py-2 text-dark text-decoration-none' to={'/register'}>
					Register
				</Link>
			</nav>
		</div>
	)
}

export default Navbar
