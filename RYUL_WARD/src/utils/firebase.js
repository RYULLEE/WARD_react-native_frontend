import * as firebase from 'firebase';
import config from '../../firebase.json'

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

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };