import React, { useState } from 'react'

const AuthContext = React.createContext({
    token:'',
    enteredEmail:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}

}
)

export const AuthContextProvider=(props)=>{
const initialToken = localStorage.getItem('token');
const [token,setToken] = useState(initialToken);
const [newMail,setNewMail] = useState('');

const userIsLoggedIn = !!token;


const loginHandler=(token,email)=>{
    setToken(token);
    let newEmail='';
    for(let i=0;i<email.length;i++)
    {
      if(email[i]!=='@' && email[i]!=='.')
      {
        newEmail= newEmail+email[i];
      }else{
        continue;
      }
    }
    setNewMail(newEmail);
    localStorage.setItem('token',token);
    localStorage.setItem('email',newEmail);
 
}

const logoutHandler=()=>{
    setToken(null);
    setNewMail(null);
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    
}

const contextValue={
    token:token,
    enteredEmail:newMail,
    isLoggedIn:userIsLoggedIn,
    login:loginHandler,
    logout:logoutHandler
}

 return <AuthContext.Provider value={contextValue}>
    {props.children}
 </AuthContext.Provider>
}


export default AuthContext;