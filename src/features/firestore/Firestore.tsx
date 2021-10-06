// https://blog.logrocket.com/react-hooks-with-firebase-firestore/
import { Page } from "../../app/layout/Page";
import React, {useEffect, useState} from "react";
import { queryCollection } from '../../services/firestore'

import { DocumentData } from "firebase/firestore"
import {CreateGroceryList} from "./CreateGroceryList";
import {Container, CssBaseline, Typography} from "@mui/material";

export function Firestore(){
    const initialGroceryList: DocumentData = {}
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
            <Container component="main">
                <CssBaseline />
                    <Typography component="h1" variant="h2">firestore</Typography>
                    <CreateGroceryList></CreateGroceryList>
            </Container>
        </Page>
    )
}