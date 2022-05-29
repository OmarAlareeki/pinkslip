// pages/users/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import fire from '../../config/fire-config';

const Login = () => {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [notify, setNotification] = useState('');

	const router = useRouter();

	const handleLogin = (e) => {
		e.preventDefault();

		if (username.length > 8 && password.length > 6) {
			fire.auth()
				.signInWithEmailAndPassword(username, password)
				.catch((err) => {
					console.log(err.code, err.message)
					setNotification(err.message)
					setTimeout(() => {
						setNotification('')
					}, 2000)
				})
			setUsername('')
			setPassword('')
			router.push("/")
		} else {
			alert('username or password is not correct')
		}

	}

	const handleGoogleLogin = () => {
		var provider = new fire.auth.GoogleAuthProvider();
		fire.auth()
			.signInWithPopup(provider)
			.then((result) => {
				var credential = result.credential;
				// This gives you a Google Access Token. You can use it to access the Google API.
				var token = credential.accessToken;
				// The signed-in user info.
				var user = result.user;
				// ...
			})
		setNotification('Successful login!')
		setTimeout(() => {
			setNotification('')
		}, 7500)
		setTimeout(() => {
			router.push('/')
		}, 8000)

	}

	return (
		<div>
			<h1>Login</h1>
			{notify}
			<form onSubmit={handleLogin}>
				Email<input type="text" value={username}
					onChange={({ target }) => setUsername(target.value)} />
				<br />
				Password<input type="password" value={password}
					onChange={({ target }) => setPassword(target.value)} />
				<br />
				<button type="submit">Login</button>
			</form>
			<button onClick={handleGoogleLogin}>Google Login</button>
			<div>
				<p>Don't have an account yet</p>
				<button onClick={() => { router.push("/users/register") }}>Register</button>
			</div>
		</div>
	)
}
export default Login