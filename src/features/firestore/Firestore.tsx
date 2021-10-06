// https://blog.logrocket.com/react-hooks-with-firebase-firestore/
import { Page } from "../../app/layout/Page";
import {useEffect, useState} from "react";
import { queryCollection } from '../../services/firestore'

import { DocumentData } from "firebase/firestore"
import {CreateGroceries} from "./CreateGroceries";

export function Firestore(){
    const initialGroceryList: DocumentData = []
    const [ groceryList, setGroceryList] = useState(initialGroceryList);

    useEffect(   () => {
       queryCollection('delme').then((results)=> {
            setGroceryList(results)
        }).catch(err => {
            console.log(err)
       })
    }, []);

    return (

        <Page>
            <h1>firestore</h1>
            <CreateGroceries></CreateGroceries>
            <pre>{groceryList}</pre>
        </Page>
    )
}