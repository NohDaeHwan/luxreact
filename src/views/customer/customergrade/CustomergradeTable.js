import React from 'react';
import { useState } from 'react';
import { format } from 'date-fns';
import {
    Avatar,
    Box,
    Card,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
} from '@mui/material';
import { NavLink, Routes, Route } from 'react-router-dom';

export const getInitials = (name = '') => name
    .replace(/\s+/, ' ')
    .split(' ')
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase())
    .join('');

const CustomergradeTable = ({customers, ...rest}) => {
    const [limit, setLimit] = useState(10);

    return (
    <Box {...rest}>
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
            {customers.slice(0, limit).map((customer) => (
            <TableRow
                hover
                key={customer.id}
                // selected={selectedCustomerIds.indexOf(customer.id) !== -1}
            >
                {/* <TableCell padding="checkbox">
                <Checkbox
                    checked={selectedCustomerIds.indexOf(customer.id) !== -1}
                    onChange={(event) => handleSelectOne(event, customer.id)}
                    value="true"
                />
                </TableCell> */}
                <TableCell>
                <Box
                    sx={{
                    alignItems: 'center',
                    display: 'flex'
                    }}
                >
                    <Avatar
                    src={customer.avatarUrl}
                    sx={{ mr: 2 }}
                    >
                    {getInitials(customer.name)}
                    </Avatar>
                        <NavLink to="/customer/customergradedetail">
                            <Typography
                            color="textPrimary"
                            variant="body1"
                            >
                            {customer.name}
                            </Typography>
                        </NavLink>
                </Box>
                </TableCell>
                <TableCell>
                {customer.email}
                </TableCell>
                <TableCell>
                {`${customer.address.city}`}
                </TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </Box>
    </Box>
    )
}
export default CustomergradeTable;
