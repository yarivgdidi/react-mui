import { collection, query, where, limit, getDocs } from "firebase/firestore";
import {User} from "./userSlice";
import {db, createDoc} from "../../services/firestore";


export async function signup(user: User): Promise<{ data:User; status: number }>{
    const { firstName, lastName, email, password } = user;
    // todo - encrypt password
    // todo - generate real JWT token - this should have been done in auth server
    const docRef = await createDoc( 'users', { firstName, lastName, email, password })
    if (docRef) {
        const token = `token: ${docRef}`
        const id = docRef.id
        return {
            status: 200,
            data: { id,firstName, lastName, email, token }
        }
    }
    throw new Error ('Unable to sign up')
}

export async function signin({ email, password }: User): Promise<{ data:User; status: number }>{

    const q = query(collection(db, "users"), where("email", "==", email), limit(1));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length === 1) {
        // todo - encrypt password
        // todo - generate real JWT token\
        const id =  querySnapshot.docs[0].id;
        const { firstName, lastName, password: storedPassword } =  querySnapshot.docs[0].data()
        if(storedPassword === password) {
            const token = `token: ${id}`
            console.log( 'signin', id,firstName, lastName, email, token )
            return {
                status: 200,
                data: { id,firstName, lastName, email, token }
            }
        }

    }
    throw new Error ('Unable to sign in');
}
