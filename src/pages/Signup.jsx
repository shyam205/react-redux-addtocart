import React from 'react'
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { signupuser } from '../redux/actions/productsAction';

function Signup() {
    const Users = useSelector(state => state);

    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmpassword,setConfirmpassword] = useState('');

    const dispatch = useDispatch()
    console.log("User ",Users)

    const body = {
        username,
        email,
        password,
        confirmpassword
    }

    const handleSignup = (e) => {
      e.preventDefault();
      console.log("body ",body)
      dispatch(signupuser(body))
    }
  return (
    <div className='signup_form'>
        <div className='signup_form_wrapper'>
            <form onSubmit={handleSignup}>
                <div>
                <label>Username</label><br></br>
               <input value={username} onChange={(e) => setUsername(e.target.value)} type='text' placeholder='Enter your Username' />
               </div>
               <div>
               <label>Email</label><br></br>
               <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter your Email' />
               </div>
               <div>
               <label>Password</label><br></br>
               <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Enter your Password' />
               </div>
               <div>
               <label>Confirs password</label><br></br>
               <input value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} type='password' placeholder='Enter your Confirm Password' />
               </div>
               <button className='signup_submit_button'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Signup