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
  measurementId: "G-QMWJTB5KWK"
};