import {Button} from "@mui/material";
import {createDoc} from "../../services/firestore";

const createGroceries = async () => {
    console.log('click')
    const doc = await createDoc('delme', {
        aaa: 123,
        bbb: 1234
    })
    console.log(doc)
}

export function CreateGroceries () {

    return (
        <Button onClick={createGroceries}>
            Create
        </Button>
    )
}