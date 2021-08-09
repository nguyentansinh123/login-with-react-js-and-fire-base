import './App.css';
import { useState , useEffect } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import { ToastContainer ,toast } from 'react-toastify';
import fire from './config/fire';
function App() {
  console.log(fire.auth())
  const [isLogin , setIsLogin]=useState(false)
  const [user , setUser]=useState({})

  //auth checking
  useEffect(()=>{
   fire.auth().onAuthStateChanged(user=>{
     if(user){
       setIsLogin(true)
       return setUser(user)
     }
   })
  },[isLogin , user])
  
  //register user
  const registerUser=({email , password})=>{
      fire.auth().createUserWithEmailAndPassword(email,password).then(res=>{
        setIsLogin(true)
        console.log(res)
        setUser(res.user)
      }).catch(err=>{
        if(err.code==="auth/email-already-in-use"){
          return toast.warning('email has already exist')
        }else{
          return toast.error('something went wrong')
        } 
      })
  }
   
  //Login user
  const SignInUser=({email , password})=>{
    fire.auth().signInWithEmailAndPassword(email,password).then(res=>{
      setIsLogin(true)
      setUser(res.user)
    }).catch(err=>{
      if(err.code==="auth/wrong-password"){
        return toast.warning('Wrong email or password')
      }
      else if(err.code === "auth/user-not-found"){
        return toast.warning('Please register')
      }else{
        return toast.error('something went wrong')
      }
    }) 
}
//log out

const logoutUser=()=>{
  fire.auth().signOut().then(res=>{
    setIsLogin(false)
    setUser(false)
  }).catch(err=>{
    console.log(err)
    return toast.error('something is wrong')
  })
}

  return (
    <div className="container">
      <ToastContainer/>
     <h1 className='text-center py-5 display-4 mx-2'> fire base login system</h1>

     <div className='row text-center'>
       {
         isLogin?(
           <div>
             <button onClick={logoutUser} >Log out</button>
             <h1>Welcome to home page</h1>
            </div>
         ):(
           <> 
           <Login SignInUser={SignInUser}/>
           <Register registerUser={registerUser}/>

           </>
         )
       }
     </div>
    </div>
  );
}

export default App;
