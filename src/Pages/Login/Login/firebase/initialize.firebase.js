import { initializeApp } from 'firebase/app';
import firebaseConfig from './config.firebase';

const firebaseInitialize = () => {
  initializeApp(firebaseConfig);
};

export default firebaseInitialize;
