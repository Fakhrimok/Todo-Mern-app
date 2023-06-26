import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import Layout from '../components/Layout';
import useAuth from '../hooks/useAuth';
import classes from './Auth.module.scss';

function Auth() {
	const { auth } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (auth) {
			navigate('/');
		}
	}, [auth, navigate]);

	return (
		<Layout>
			<div >
				<div className={classes.form_header}>
					<h1>ToDoList</h1>
				</div>
				<div className={classes.form_container}>
					<Login />
					<Register />
				</div>
			</div>
		</Layout>
	);
}

export default Auth;
