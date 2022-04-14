import React from 'react';
import { useState } from 'react'


const Login = () => {
	
	const [username, setName] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:3001/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username,
				password,
			}),
		})

		const data = await response.json()
		console.log(response.status);

		if (response.status == 201) {
			localStorage.setItem('token', data.token)
			alert('Login successful')
			window.location.href = '/dashboard'
		} else {
			alert('Please check your username and password')
		}
		
	}





	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={loginUser}>
				<input
					value={username}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="username"
				/>
				<br />
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<input type="submit" value="Login" />
			</form>
		</div>
	);
}

export default Login;
