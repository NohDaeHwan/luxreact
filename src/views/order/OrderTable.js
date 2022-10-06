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

const OrderTable = ({customers, ...rest}) => {

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
                주문번호
            </TableCell>
            <TableCell>
                상품명
            </TableCell>
            <TableCell>
                판매가격
            </TableCell>
            <TableCell>
                주문자명
            </TableCell>
            <TableCell>
                휴대폰번호
            </TableCell>
            <TableCell>
                주문상태
            </TableCell>
            <TableCell>
                업데이트날짜
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
                <NavLink to="/order/orderdetail">
                <Typography
                color="textPrimary"
                variant="body1"
                >
                {/* {customer.name} */}
                202209301
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
                99,999
                </TableCell>
                <TableCell>
                <NavLink to="/customer/customerdetail">
                            <Typography
                            color="textPrimary"
                            variant="body1"
                            >
                            {/* {customer.name} */}
                            구나방
                            </Typography>
                </NavLink>
                {/* {customer.phone} */}
                </TableCell>
                <TableCell>
                {/* {format(customer.createdAt, 'dd/MM/yyyy')} */}
                010-9025-5155
                </TableCell>
                <TableCell>
                {/* {format(customer.createdAt, 'dd/MM/yyyy')} */}
                주문완료
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
export default OrderTable;
