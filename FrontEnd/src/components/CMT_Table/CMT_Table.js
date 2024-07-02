import { useSelector ,useDispatch } from "react-redux";
import { actions } from "../../redux/reducers/cmtReducer";
import { cmtSelector } from "../../redux/reducers/cmtReducer";

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button } from "@mui/material";
import { useState } from "react";

import "./CMT_Table.css"

function CMT_Table() {

    const {records}=useSelector(cmtSelector);
    const dispatch = useDispatch();


    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    return (
        <div>

            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer component={Paper} sx={{ maxHeight: 340 }}>
                <Table  sx={{ margin: "auto", '& thead tr:first-child': { borderTop: '1px solid #ddd' }}} stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow sx={{ '& > *': {textAlign: 'center' } }}>
                            <TableCell>Count</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Check In</TableCell>
                            <TableCell>Check Out</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Remove Entry</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {records
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((record, index) => (
                            <TableRow hover role="checkbox" key={index} sx={{ '& > *': { padding: '10px' , textAlign: 'center'   }, height: '60px' }}>
                                <TableCell>{record[0]}</TableCell>   
                                <TableCell>{record[1]}</TableCell>   
                                <TableCell>{record[2]}</TableCell>   
                                <TableCell>{record[3]}</TableCell>   
                                <TableCell>{record[4]}</TableCell>   
                                <TableCell>
                                    <Button onClick={() => dispatch(actions.status(index))}>
                                        {record[5]}
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button onClick={() => dispatch(actions.delete(index))}>
                                        {record[6]}
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={records.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />

        </Paper>
        </div>
    );
}

export default CMT_Table;
