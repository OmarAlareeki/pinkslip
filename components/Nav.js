import React from 'react';
import { useRouter } from 'next/router';
import { FaUserCircle } from 'react-icons/fa';
import fire from '../config/fire-config'

const Nav = props => {
    const router = useRouter();
    const user = fire.auth().currentUser;

    const userPageRoute = () => {
        if (user) {
            router.push('/users/userProfilePage')
        } else {
            router.push('/users/login')
        }
    }

    return (
        <div style={{ background: '#f2f2f2', height: '55px', display: 'flex', justifyContent: 'space-between', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="187" height="47" viewBox="0 0 177 47">
                <text id="PINKSLIP" transform="translate(0 38)" fill="#707070" font-size="25" font-family="HelveticaNeue, Helvetica Neue"><tspan x="0" y="0">PINKSLIP</tspan></text>
            </svg>
            {!user ? <FaUserCircle style={{ fontSize: '40px', margin: '5px' }} onClick={userPageRoute} /> :
                <img src={user.photoURL} style={{
                    borderRadius: '50%',
                    margin: '5px',
                    border: '1px solid #dbdbdb',
                }} onClick={userPageRoute} />
            }
        </div>
    )
}

export default Nav
