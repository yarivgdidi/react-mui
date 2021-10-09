import {useEffect, useState} from "react";
import {queryCollection, streamCollection} from "../../services/firestore";
import {DocumentData} from "firebase/firestore";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export function ListGroceryList() {
    const initialGroceryList: DocumentData = []
    const [groceryList, setGroceryList] = useState(initialGroceryList);

    // Read once is redundent
    // useEffect(() => {
    //     queryCollection('groceryLists').then((results) => {
    //         setGroceryList(results.docs)
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // }, []);

    useEffect(() => {
        streamCollection('groceryLists', setGroceryList)
    }, []);


    const rows =  groceryList.map((item: any) => item.data())

    return (

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Comment</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row: any) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell >{row.category}</TableCell>
                            <TableCell >{row.comment}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        // <div>
        //     List
        //      { groceryList.map( (item: any) => {
        //          console.log(item.data())
        //          console.log(list)
        //         return ( <div key={item.data().name} >{ item.data().name }</div>)
        //
        //     })}
        // </div>
    )
}