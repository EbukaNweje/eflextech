import { db } from "../Base";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const functionServiceCollectionRef = collection(db, "UserRegister");
class FunctionService {
  addForm = (newuser) => {
    return addDoc(functionServiceCollectionRef, newuser);
  };

  updateForm = (id, updatedUser) => {
    const bookDoc = doc(db, "UserRegister", id);
    return updateDoc(bookDoc, updatedUser);
  };

  deleteForm = (id) => {
    const userDoc = doc(db, "UserRegister", id);
    return deleteDoc(userDoc);
  };

  getAllForm = () => {
    return getDocs(functionServiceCollectionRef);
  };

  getForm = (id) => {
    const bookDoc = doc(db, "UserRegister", id);
    return getDoc(bookDoc);
  };
}

export default new FunctionService();