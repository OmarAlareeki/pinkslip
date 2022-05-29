import React, { useState } from 'react';
import fire from '../../config/fire-config';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Nav from '../../components/Nav'

const userProfilePage = props => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [notify, setNotification] = useState('');
    const router = useRouter();
    const user = fire.auth().currentUser;

    fire.auth()
        .onAuthStateChanged((user) => {
            if (user) {
                setLoggedIn(true)
            } else {
                setLoggedIn(false)
            }
        })

    const handleLogout = () => {
        fire.auth()
            .signOut()
            .then(() => {
                setNotification('Logged out')
                setTimeout(() => {
                    setNotification('')
                }, 2000)
            });
        router.push('/')
    }
    return (
        <>
            <Nav />
            {notify}
            <div>
                {!loggedIn
                    ?
                    <div>
                        <Link href="/users/register">
                            <a>Register</a>
                        </Link> | <Link href="/users/login">
                            <a> Login</a>
                        </Link>
                    </div>
                    :
                    <div style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center',
                        justifyContent: 'start', margin: '10px'
                    }}>
                        <div style={{ width: '400px', }}>
                            <img src={user.photoURL} style={{ borderRadius: '50%' }} />
                            <h2>{user.email}</h2>
                            <h2>{user.displayName}</h2>
                            <h2>{user.providerID}</h2>
                            <button onClick={handleLogout}>Logout</button>
                        </div>

                    </div>

                }
            </div>
        </>
    )
}

export default userProfilePage
