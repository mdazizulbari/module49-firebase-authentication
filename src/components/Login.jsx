import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    console.log("sign in click");
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
        if (!loggedInUser.email && loggedInUser?.providerData.length) {
          console.log("user email is not directly provided");
          if (loggedInUser.providerData[0].email) {
            loggedInUser.email = loggedInUser.providerData[0].email;
            setUser(loggedInUser);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signed Out");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Please login</h2>
      {user ? (
        <button onClick={() => handleSignOut()}>Sign Out</button>
      ) : (
        <>
          <button onClick={() => handleGoogleSignIn()}>
            Sign in with Google
          </button>
          <button onClick={() => handleGithubSignIn()}>
            Sign in with Git Hub
          </button>
        </>
      )}
      {user && (
        <div className="">
          <h3>User Name: {user.displayName}</h3>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
