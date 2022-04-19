import React from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
	const history = useNavigate()

	const [email, setEmail] = useState('')
	const [username, setName] = useState('')
	const [first_Name, setFirst] = useState('')
	const [last_Name, setLast] = useState('')
	const [password, setPassword] = useState('')


	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:3001/auth/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				username,
				first_Name,
				last_Name,
				password,
			}),
		})

		const data = await response.json()
		console.log(data);
		console.log(data.status);
		if (data) {
			history('/login');
		}
	}


	return (
		<div>
			<h1>Register</h1>
			<form onSubmit={registerUser}>
				<input
					value={username}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Name"
				/>
				<br />
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input
					value={first_Name}
					onChange={(e) => setFirst(e.target.value)}
					type="text"
					placeholder="first_Name"
				/>
				<br />
				<input
					value={last_Name}
					onChange={(e) => setLast(e.target.value)}
					type="text"
					placeholder="last_Name"
				/>
				<br />
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<input type="submit" value="Register" />
			</form>
		</div>
	);
}

export default Register;
