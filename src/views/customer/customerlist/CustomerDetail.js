import React from 'react'
import MainCard from 'ui-component/cards/MainCard'
import CustomerDetailSubCard from './CustomerDetailSubCard'

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
      <CustomerDetailSubCard user={user}></CustomerDetailSubCard>
    {/* <CustomerSearchBar></CustomerSearchBar> */}
    {/* <CustomerTable customers={customers}></CustomerTable> */}
</MainCard>
  )
}

export default CustomerDetail