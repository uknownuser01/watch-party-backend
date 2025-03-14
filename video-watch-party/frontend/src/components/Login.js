import React, { useState, useEffect } from "react";
import { auth, signInWithGoogle, logout } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Login = ({ setUser }) => {
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user ? { name: user.displayName, email: user.email, photo: user.photoURL } : null);
        });
    }, []);

    return (
        <div>
            {auth.currentUser ? (
                <div>
                    <img src={auth.currentUser.photoURL} alt="Profile" width="40" />
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <button onClick={signInWithGoogle}>Login with Google</button>
            )}
        </div>
    );
};

export default Login;
