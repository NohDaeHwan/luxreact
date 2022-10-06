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

const BrandTable = ({customers, ...rest}) => {
    const [limit, setLimit] = useState(10);

    return (
    <Box {...rest}>
    <Box>
        <Table>
        <TableHead>
            <TableRow>
            <TableCell>
                번호
            </TableCell>
            <TableCell>
                브랜드명
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
                        <NavLink to="/product/branddetail">
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
export default BrandTable;
