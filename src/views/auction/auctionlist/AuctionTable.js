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

const AuctionTable = ({customers, ...rest}) => {

    const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);

    const handleSelectAll = (event) => {
        let newSelectedCustomerIds;

        if (event.target.checked) {
        newSelectedCustomerIds = customers.map((customer) => customer.id);
        } else {
        newSelectedCustomerIds = [];
        }

        setSelectedCustomerIds(newSelectedCustomerIds);
    };

    const handleSelectOne = (event, id) => {
        const selectedIndex = selectedCustomerIds.indexOf(id);
        let newSelectedCustomerIds = [];

        if (selectedIndex === -1) {
        newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
        } else if (selectedIndex === 0) {
        newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
        } else if (selectedIndex === selectedCustomerIds.length - 1) {
        newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
        } else if (selectedIndex > 0) {
        newSelectedCustomerIds = newSelectedCustomerIds.concat(
            selectedCustomerIds.slice(0, selectedIndex),
            selectedCustomerIds.slice(selectedIndex + 1)
        );
        }

        setSelectedCustomerIds(newSelectedCustomerIds);
    };

    const handleLimitChange = (event) => {
        setLimit(event.target.value);
    };

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    return (
    <Box {...rest}>
    <Box>
        <Table>
        <TableHead>
            <TableRow>
            <TableCell>
                경매번호
            </TableCell>
            <TableCell>
                상품명
            </TableCell>
            <TableCell>
                기존가격
            </TableCell>
            <TableCell>
                시작가격
            </TableCell>
            <TableCell>
                종료가격
            </TableCell>
            <TableCell>
                경매상태
            </TableCell>
            <TableCell>
                경매시작날짜
            </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {customers.slice(0, limit).map((customer) => (
            <TableRow
                hover
                key={customer.id}
            >
                <TableCell>
                <NavLink to="/auction/auctiondetail">
                <Typography
                color="textPrimary"
                variant="body1"
                >
                {/* {customer.name} */}
                120220930
                </Typography>
                </NavLink>
                </TableCell>
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
                        <NavLink to="/product/productdetail">
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
                {/* {customer.phone} */}
                90,000
                </TableCell>
                <TableCell>
                89,999
                {/* {customer.phone} */}
                </TableCell>
                <TableCell>
                {/* {format(customer.createdAt, 'dd/MM/yyyy')} */}
                109,999
                </TableCell>
                <TableCell>
                    <Typography
                    color="textPrimary"
                    variant="body1"
                    >
                    {/* {customer.name} */}
                    경매전
                    </Typography>
                {/* {customer.phone} */}
                </TableCell>
                <TableCell>
                {format(customer.createdAt, 'dd/MM/yyyy')}
                </TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </Box>
    <TablePagination
    component="div"
    count={customers.length}
    onPageChange={handlePageChange}
    onRowsPerPageChange={handleLimitChange}
    page={page}
    rowsPerPage={limit}
    rowsPerPageOptions={[5, 10, 25]}
    />
    </Box>
    )
}
export default AuctionTable;
