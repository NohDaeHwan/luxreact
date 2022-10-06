import React from 'react'
import { Grid, Link } from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import SearchSection from 'layout/MainLayout/Header/SearchSection';
import { SelectField } from './SelectField';

function AppraisalSearchBar() {
    return (
    <SubCard title="검색 조건" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
    <Grid container direction="column" spacing={1}>
    <Grid item>
        <SelectField></SelectField>
    </Grid>
    <Grid item>
        <SearchSection />
    </Grid>
    </Grid>
</SubCard>
  )
}

export default AppraisalSearchBar;