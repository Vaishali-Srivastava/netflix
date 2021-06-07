import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../../seed';

// we need to somehow seed the database

// we need a config here
const config = {
    apiKey: "AIzaSyBY4qTWSO6heF4-z-nLmQPIx18wUMHIHBY",
    authDomain: "netflix-bcde4.firebaseapp.com",
    projectId: "netflix-bcde4",
    storageBucket: "netflix-bcde4.appspot.com",
    messagingSenderId: "739475279565",
    appId: "1:739475279565:web:f9fa956f85366e5c126384"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };

