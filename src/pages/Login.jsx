import React,{ useState } from 'react'

function Login() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleLogin = (e) => {
      e.preventDefault();
    }
  return (
    <div className='signup_form'>
        <div className='signup_form_wrapper'>
            <form onSubmit={handleLogin}>
            <div>
               <label>Email</label><br></br>
               <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter your Email' />
               </div>
               <div>
               <label>Password</label><br></br>
               <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Enter your Password' />
               </div>
            </form>
        </div>
    </div>
  )
}

export default Login