import React from 'react'
import { Grid, Link } from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import SearchSection from 'layout/MainLayout/Header/SearchSection';
import { SelectField } from './SelectField';

function CustomerSearchBar() {
    return (
    <SubCard title="검색 조건" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
    <Grid container direction="column" spacing={1}>
    <Grid item>
        <MuiTypography variant="button" display="block" gutterBottom>
            button text
        </MuiTypography>
    </Grid>
    <Grid item>
        <MuiTypography variant="caption" display="block" gutterBottom>
            caption text
        </MuiTypography>
    </Grid>
    <Grid item>
        <MuiTypography variant="overline" display="block" gutterBottom>
            overline text
        </MuiTypography>
    </Grid>
    <Grid item>
        <MuiTypography
            variant="body2"
            color="primary"
            component={Link}
            href="https://berrydashboard.io"
            target="_blank"
            display="block"
            underline="hover"
            gutterBottom
        >
            https://berrydashboard.io
        </MuiTypography>
    </Grid>
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

export default CustomerSearchBar;