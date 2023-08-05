import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

import { logInService, signUpService } from "../services/AuthService";

const AuthContext = createContext();

export function AuthProvider({children}){
    const [loggedInUserDetails, setLoggedInUserDetails] = useState({
        token: JSON.parse(localStorage.getItem("token")),
        user: JSON.parse(localStorage.getItem("user")),
      });

    const handleUserDetails = (token, user) => {
       setLoggedInUserDetails((prev) => ({
        ...prev, token, user
       }));
    }

    const logoutUser = () => {
        setLoggedInUserDetails((prev) => ({...prev, token:"", user:null}));
        localStorage.clear();
        toast.success("Logged out successfully!")

    }
    const loginUser = async(loginDetails) => {
       try{
         const response = await logInService(loginDetails);
         const {
            data: { foundUser, encodedToken },
            status,
          } = response;

         if(status===200){
            localStorage.setItem("token", JSON.stringify(encodedToken));
            localStorage.setItem("user", JSON.stringify(foundUser));
            handleUserDetails(encodedToken, foundUser);
            return foundUser;
         }
       }catch(err){
        console.error(err);
       }

    }

    const signUpUser = async(signupDetails) => {
        try{
             const response = await signUpService(signupDetails);
             const { createdUser, encodedToken } = response.json();

             if(response.status===201){
                handleUserDetails(encodedToken, createdUser);
                return createdUser;
             }
        }catch(err){
            console.error(err);
        }

    }
    return <AuthContext.Provider value={{...loggedInUserDetails, loginUser, signUpUser, handleUserDetails, logoutUser}}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);