// https://blog.logrocket.com/react-hooks-with-firebase-firestore/
import { Page } from "../../app/layout/Page";
import {CreateGroceryList} from "./CreateGroceryList";
import {Container, CssBaseline, Typography} from "@mui/material";
import {ListGroceryList} from "./ListGroceryList";

export function Firestore(){
    return (

        <Page>
            <Container component="main">
                <CssBaseline />
                    <Typography component="h1" variant="h2">Firestore</Typography>
                    <CreateGroceryList></CreateGroceryList>
                    <ListGroceryList></ListGroceryList>
            </Container>
        </Page>
    )
}