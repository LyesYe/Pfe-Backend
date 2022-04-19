import React,{Component} from 'react';
import Users from './Users.jsx'
import axios from 'axios';
import { useState } from 'react'


const Dashboard = () => {



	const [user, setUser] = useState('')

	const getUsers = () => {
		axios.get("http://localhost:3001/user/",{
			headers : {
	   Authorization:'Bearer '+localStorage.getItem('token')
		}
	   }).then((res)=>{
			console.log(res.data);
			console.log(res.data[0].email);
			setUser(res.data[0].email)
		})
	}


	return (
		<div>
			<button onClick={getUsers}>Get users</button>
			   {/* <Users id={4} name="Charmander" type="fire" base_experience={62} /> */}
			   {user}
		</div>
	);
}

export default Dashboard;
