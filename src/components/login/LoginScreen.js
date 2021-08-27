import React from 'react';

export const LoginScreen = ({ history }) => {
	const handleLogin = () => {
		history.replace('/');
	};
	return (
		<div className='container'>
			<h1>Login</h1>
			<hr />
			<button className='btn btn-dark' onClick={handleLogin}>
				Login
			</button>
		</div>
	);
};
