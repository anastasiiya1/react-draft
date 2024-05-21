import { useId, useState } from 'react';

const LoginForm = ( ) => {

	const [values, setValues] = useState({
		login:'',
		password:'',
	})

	const handleLoginChange =(e) => {
		setValues({
			...values,
			login: e.target.value,
		})
	}

	const handlePwdChange = (e) => {
		setValues({
			...values,
			password: e.target.value,
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		setValues({
			login: '',
			password: '',
		})
	}
	const id = useId();


	return(
		<>
		<form onSubmit={handleSubmit}>
			<input type='text' name='login' id={id} onChange={handleLoginChange}/>
			<input type='password' name='password' onChange={handlePwdChange}/>
			<button type='submit'>Log in</button>
		</form>
		</>
	)
}

export default LoginForm