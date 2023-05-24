import React,{ useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeerror, userlogin } from '../redux/actions/productsAction';
import { useNavigate } from 'react-router-dom';

function Login() {
    const user = useSelector(state => state.userreducer.user[0])
    
    const [username,setUsername] = useState('shyam');
    const [password,setPassword] = useState('shyam@123');
    const [isError,setIsError] = useState(false)

    const router = useNavigate()
    if(user?.isAuthenticate == true && user?.isloggedin == true){
      router('/');
    }

     //console.log("user ",user)
    const dispatch = useDispatch()
    const body = {
      username:username,
      password:password
    }

    const removeerrorpopup = () => {
      setTimeout(() => {
        setIsError(false)
        dispatch(removeerror({error:false}))
      },2000)
    }

    
    const handleLogin = (e) => {
      e.preventDefault();
      dispatch(userlogin(body))
    }
    useEffect(() => {
      if(user?.error == true){
        setIsError(true)
        removeerrorpopup()
      }
    },[user.error])
  return (
    <div className='signup_form'>
        <div className='signup_form_wrapper'>
          { isError == true && (
            <div className='wrong_cred'><p>Wrong Credentials</p></div>
          )}
            <form onSubmit={handleLogin}>
            <div>
               <label>Username</label><br></br>
               <input value={username} onChange={(e) => setUsername(e.target.value)} type='text' placeholder='Enter your Username' />
               </div>
               <div>
               <label>Password</label><br></br>
               <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Enter your Password' />
               </div>
               <div className='login_button_container'><button className='login_button'>Login</button></div>
            </form>
        </div>
    </div>
  )
}

export default Login