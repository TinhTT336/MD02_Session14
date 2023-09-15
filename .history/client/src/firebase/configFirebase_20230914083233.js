import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD0Zt2OZZXnhp_y5Hbwztrgq-8yceFDboU",
  authDomain: "project-md02.firebaseapp.com",
  projectId: "project-md02",
  storageBucket: "project-md02.appspot.com",
  messagingSenderId: "1049986641086",
  appId: "1:1049986641086:web:83898ee5306dc048c982ef",
};

// Initialize Firebase - khoi tai firebase
const app = initializeApp(firebaseConfig);

//tao tham chieu den dich vu luu tru duoc su dung de tham chieu trong toan bo ung dung
const store = getStorage(app);

// export ra ben ngoai de su dung
export { store };
