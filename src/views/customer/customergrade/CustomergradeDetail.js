import React from 'react'
import MainCard from 'ui-component/cards/MainCard'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Avatar from 'ui-component/extended/Avatar'
import Input from '@mui/material/Input'
import { NavLink } from 'react-router-dom'


function CustomergradeDetail() {
  return <MainCard title="등급 수정">
    <Box>
        <Table>
        <TableHead>
            <TableRow>
            <TableCell>
                등급레벨
            </TableCell>
            <TableCell>
                등급명
            </TableCell>
            <TableCell>
                할인율
            </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {/* {customers.slice(0, limit).map((customer) => ( */}
            <TableRow
                hover
                // key={customer.id}
                // selected={selectedCustomerIds.indexOf(customer.id) !== -1}
            >
                <TableCell>
                <Box
                    sx={{
                    alignItems: 'center',
                    display: 'flex'
                    }}
                >
                    <Avatar
                    // src={customer.avatarUrl}
                    sx={{ mr: 2 }}
                    >
                    {/* {getInitials(customer.name)} */}
                    </Avatar>
                    {/* {customer.name} */}
                    {/* <Input defaultValue="Hello world" inputProps={ariaLabel} /> */}
                    <Input 
                    defaultValue="등급레베루"
                    onChange={(e)=>{e.target.value}}
                    />
                </Box>
                </TableCell>
                <TableCell>
                {/* {customer.email} */}
                <Input defaultValue="등급며므"
                onChange={(e)=>{e.target.value}}
                />
                </TableCell>
                <TableCell>
                {/* {`${customer.address.city}`} */}
                <Input defaultValue="디스카운또"
                onChange={(e)=>{e.target.value}}
                />
                </TableCell>
            </TableRow>
            {/* ))} */}
        </TableBody>
        </Table>
    </Box>
  <Grid container sx={{ pt: 2, "justifyContent":"center" }} >
      <Grid item>
          <NavLink to="/customer/customergrade" style={{"textDecoration":"none"}}>
            <Button variant="contained"
            sx={{backgroundColor: 'contained.light', "marginRight":"8px"}}
            >수정</Button>
          </NavLink>
          <NavLink to="/customer/customergrade" style={{"textDecoration":"none"}}>
          <Button variant="contained"
          color="error"
          sx={{backgroundColor: 'error.light'}}
          >삭제</Button>
          </NavLink>
      </Grid>
  </Grid>
</MainCard>
}

export default CustomergradeDetail