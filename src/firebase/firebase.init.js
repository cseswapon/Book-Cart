import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const initializationApp = () => {
  return initializeApp(firebaseConfig);
};
export default initializationApp;