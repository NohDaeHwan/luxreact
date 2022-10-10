import React from 'react'
import MainCard from 'ui-component/cards/MainCard'
import CustomerDetailSubCard from './CustomerDetailSubCard'
import CustomerGradeHistory from './CustomerGradeHistory';
import Grid from '@mui/material/Grid'

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
  timezone: 'GTM-7'
  };

function CustomerDetail() {
  return (
    <MainCard title="회원 상세">
    <Grid container sx={{'flexDirection':'column'}}>
      <Grid item mb={2}>
        <CustomerDetailSubCard user={user}></CustomerDetailSubCard>
      </Grid>
      <Grid item>
        <CustomerGradeHistory user={user}></CustomerGradeHistory>
      </Grid>
    </Grid>
    {/* <CustomerSearchBar></CustomerSearchBar> */}
    {/* <CustomerTable customers={customers}></CustomerTable> */}
</MainCard>
  )
}

export default CustomerDetail