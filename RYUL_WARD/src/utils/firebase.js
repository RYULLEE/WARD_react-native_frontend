import * as firebase from 'firebase';
import config from '../../firebase.json';
import 'firebase/firestore';

const app = firebase.initializeApp(config)

const Auth = app.auth();

export const login = async({email, password}) => {
    const {user} = await Auth.signInWithEmailAndPassword(email, password);
    return user;
};

export const signup = async({email, password, name}) => {
    const {user} = await Auth.createUserWithEmailAndPassword(email, password);
    await user.updateProfile({
      displayName: name,
    });
    return user;
};

export const logout = async() => {
  return await Auth.signOut();
};

export const DB = firebase.firestore();

