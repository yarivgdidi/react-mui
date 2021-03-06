import {Box, Grid, TextField} from "@mui/material";
import {createDoc} from "../../services/firestore";
import React ,{FormEvent} from "react";
import {LoadingButton} from "@mui/lab";
import {selectUser} from "../user/userSlice";
import {useAppSelector} from "../../app/hooks";

const createGroceryList = async (event: FormEvent<HTMLFormElement>, userId: string, refs:any) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const name = data.get('listName');
    const category = data.get('category');
    const comment = data.get('listComment');
    const docRef = await createDoc( 'groceryLists', {
        name,
        category,
        comment,
        userId,
    })
    if (docRef) {
      console.log(event)
    }

}

export function CreateGroceryList () {
    const refs:any = {}
    const {id: userId} = useAppSelector(selectUser)
    const isFetching = false;
    return (
        <Box component="form" noValidate
             onSubmit={(event: FormEvent<HTMLFormElement>) => createGroceryList(event, userId, refs)} sx={{ mt: 3 }}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={3}>
                    <TextField
                        inputRef = {ref=> refs['listName'] = ref}
                        size="small"
                        autoComplete="listName"
                        name="listName"
                        required
                        fullWidth
                        id="listName"
                        label="List Name"
                        autoFocus
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        inputRef = {ref=>refs['category'] = ref}
                        size="small"
                        required
                        fullWidth
                        id="category"
                        label="Category"
                        name="category"
                        autoComplete="category"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        inputRef = {ref=>refs['listComment'] = ref}
                        size="small"
                        required
                        fullWidth
                        id="listComment"
                        label="Comment"
                        name="listComment"
                        autoComplete="listComment"
                    />
                </Grid>

                <Grid item xs={12} sm={3}>
                    <LoadingButton
                        sx={{ mt: '-1px' }}
                        size="large"
                        type="submit"
                        fullWidth
                        variant="contained"
                        loading={isFetching}

                    >
                        Create List
                    </LoadingButton>
                </Grid>
            </Grid>
        </Box>

    )
}