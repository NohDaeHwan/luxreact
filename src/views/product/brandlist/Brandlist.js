import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import BrandTable from './BrandTable';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const customers = [
    {
        id: uuid(),
        address: {
        country: 'USA',
        state: 'West Virginia',
        city: 'Parkersburg',
        street: '2849 Fulton Street'
        },
        avatarUrl: '/static/images/avatars/avatar_3.png',
        createdAt: 1555016400000,
        email: 'ekaterina.tankova@devias.io',
        name: 'Ekaterina Tankova',
        phone: '304-428-3097'
    },
    {
        id: uuid(),
        address: {
        country: 'USA',
        state: 'Bristow',
        city: 'Iowa',
        street: '1865  Pleasant Hill Road'
        },
        avatarUrl: '/static/images/avatars/avatar_4.png',
        createdAt: 1555016400000,
        email: 'cao.yu@devias.io',
        name: 'Cao Yu',
        phone: '712-351-5711'
    },
    {
        id: uuid(),
        address: {
        country: 'USA',
        state: 'Georgia',
        city: 'Atlanta',
        street: '4894  Lakeland Park Drive'
        },
        avatarUrl: '/static/images/avatars/avatar_2.png',
        createdAt: 1555016400000,
        email: 'alexa.richardson@devias.io',
        name: 'Alexa Richardson',
        phone: '770-635-2682'
    },
    {
        id: uuid(),
        address: {
        country: 'USA',
        state: 'Ohio',
        city: 'Dover',
        street: '4158  Hedge Street'
        },
        avatarUrl: '/static/images/avatars/avatar_5.png',
        createdAt: 1554930000000,
        email: 'anje.keizer@devias.io',
        name: 'Anje Keizer',
        phone: '908-691-3242'
    },
    {
        id: uuid(),
        address: {
        country: 'USA',
        state: 'Texas',
        city: 'Dallas',
        street: '75247'
        },
        avatarUrl: '/static/images/avatars/avatar_6.png',
        createdAt: 1554757200000,
        email: 'clarke.gillebert@devias.io',
        name: 'Clarke Gillebert',
        phone: '972-333-4106'
    },
    ];

function Customergrade() {
    return <MainCard title="브랜드 설정">
        <BrandTable customers={customers}/>
        <Grid container sx={{ pt: 2, "justifyContent":"end" }} >
        <Grid item>
            <NavLink to="/product/branddetail" style={{"textDecoration":"none"}}>
                <Button variant="contained"
                sx={{backgroundColor: 'contained.light', "marginRight":"8px"}}
                >등록</Button>
            </NavLink>
        </Grid>
    </Grid>
</MainCard>
}

export default Customergrade;


