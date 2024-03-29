import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Import storage functions

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyBX1uu7oUaNZHg0WD6C9mls7SoHQTPIs98",
  authDomain: "profile-eb12f.firebaseapp.com",
  projectId: "profile-eb12f",
  storageBucket: "profile-eb12f.appspot.com",
  messagingSenderId: "300953728761",
  appId: "1:300953728761:web:f7295957bc4daad0375428",
  measurementId: "G-QMWJTB5KWK"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const messagesRef = collection(firestore, 'messages');
const orderedQuery = query(messagesRef, orderBy('createdAt', 'asc'));
const storage = getStorage(app); // Initialize storage

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>Chat Room</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle successful sign-in
        console.log("User signed in:", result.user.displayName);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error signing in with Google:", error);
      });
  };
}