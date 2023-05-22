import React , {useEffect, useState} from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
function createData(email, teamname , rounds ,time) {
  return { email,teamname,rounds,time};
}

const Leaderboard = ()=>{
  const [rows,setrows] = useState([]);
  const [loading,setloading] = useState(true);
    useEffect(()=>{
        axios.get('https://technexuslogin-default-rtdb.firebaseio.com/allcandidate.json')
        .then(
            response => {
              
              var temp = [];
              var email = [];
                for(const obj in response.data){
                    let t = {
                        ...response.data[obj],
                        id:obj
                    }
                    
                    email.push(t.email);
                    temp.push(createData(t.email,t.teamname,t.Rounds,t.time))
                }
                temp.sort(function (a,b){
                  return a.time.localeCompare(b.time);
                })
                temp.sort(function (a,b){
                  return b.rounds - a.rounds
                })
                setrows(temp);
                setloading(false);
                
            }
        )
    },[]);
    
    return (
      <React.Fragment>
      
        {loading?
          <Box color="#CC6666" style={{textAlign:'center',maxWidth:'420px',margin:'50px auto',marginTop:'50px'}}>
        <CircularProgress color="inherit"  />
    </Box>:
    <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>email</StyledTableCell>
                <StyledTableCell align="center">Team name</StyledTableCell>
                <StyledTableCell align="center">Rounds cleared</StyledTableCell>
                <StyledTableCell align="center">time</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow
                  key={row.email}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <StyledTableCell component="th" scope="row">
                    {row.email}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.teamname}</StyledTableCell>
                  <StyledTableCell align="center">{row.rounds}</StyledTableCell>
                  
                  <StyledTableCell align="center">{row.time}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>}
        </React.Fragment>
        )
}

export default Leaderboard;