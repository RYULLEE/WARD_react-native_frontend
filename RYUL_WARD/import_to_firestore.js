
// Imports
const firestoreService = require('firestore-export-import');
const firebaseConfig = require('./firebase.json');
const serviceAccount = require('./serviceAccount.json');


const app = firebase.initializeApp(firebaseConfig)
// JSON To Firestore
const jsonToFirestore = async () => {
  try {
    console.log('Initialzing Firebase');
    await firestoreService.initializeApp(serviceAccount, firebaseConfig.databaseURL);
    console.log('Firebase Initialized');

    await firestoreService.restore('./data-clean/firebase/timing_data.json');
    console.log('Upload Success');
  }
  catch (error) {
    console.log(error);
  }
};

jsonToFirestore();