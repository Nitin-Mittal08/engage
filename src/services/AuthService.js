import axios from "axios";

export const logInService = (loginDetails) => axios.post("/api/auth/login", loginDetails);

export const signUpService = (signupDetails) => axios.post("/api/auth/signup",signupDetails);