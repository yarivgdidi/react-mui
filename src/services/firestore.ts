import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs, QuerySnapshot, onSnapshot} from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

initializeApp(firebaseConfig);
export const db = getFirestore();

export const createDoc = async (collectionName: string, payload: any) => {
    try {
        const docRef = await addDoc(collection(db, collectionName), payload);
        console.log("Document written with ID: ", docRef.id);
        return docRef;
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};
export const queryCollection = async(collectionName: string): Promise<QuerySnapshot> => {
    const querySnapshot = await getDocs(collection(db,collectionName));
    console.log(`Got ${querySnapshot.docs.length} docs` )
    return querySnapshot;
}

export const streamCollection = (collectionName: string, setterCallback: any) => {
   return onSnapshot(collection(db,collectionName), (querySnapshot) => {
       setterCallback(querySnapshot.docs)

    });


}
