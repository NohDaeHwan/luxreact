import React from 'react'
import { Grid, Link } from '@mui/material';
import MuiTypography from '@mui/material/Typography';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography
} from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import SearchSection from 'layout/MainLayout/Header/SearchSection';
import { SelectField } from './SelectField';

function CustomerDetailSubCard({user}) {
    return (
    <SubCard title="회원 정보" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
    {/* <Grid container direction="column" spacing={1}>
    <Grid item>
        <SelectField></SelectField>
    </Grid>
    <Grid item>
        <SearchSection />
    </Grid>
    </Grid> */}


    {/* <Card {...props}> */}
    <Grid container 
        sx={{
        justifyContent : 'start',
        // alignItems: 'center',
        display: 'flex',
        flexDirection: 'row'
        }}>
    <CardContent>
    <Grid item
        sx={{
        justifyContent : 'start',
        // alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
        }}
    >
        <Avatar
        src={user.avatar}
        sx={{
            height: 100,
            mb: 2,
            width: 100
        }}
        />
        <Typography
        color="textPrimary"
        gutterBottom
        variant="h2"
        >
        {user.name}
        </Typography>
        <Typography
        color="textSecondary"
        variant="body2"
        >
        회원등급 : {`${user.city} ${user.country}`}
        </Typography>
        <Typography
        color="textSecondary"
        variant="body2"
        >
        가입일 : {user.timezone}
        </Typography>
    </Grid>
    <Grid item
        sx={{
        justifyContent : 'start',
        // alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
        }}
    >
        <Avatar
        src={user.avatar}
        sx={{
            height: 100,
            mb: 2,
            width: 100
        }}
        />
        <Typography
        color="textPrimary"
        gutterBottom
        variant="h2"
        >
        {user.name}
        </Typography>
        <Typography
        color="textSecondary"
        variant="body2"
        >
        회원등급 : {`${user.city} ${user.country}`}
        </Typography>
        <Typography
        color="textSecondary"
        variant="body2"
        >
        가입일 : {user.timezone}
        </Typography>
    </Grid>
    </CardContent>
    <Divider />
    {/* <CardActions>
    <Button
        color="primary"
        fullWidth
        variant="text"
    >
        Upload picture
    </Button>
    </CardActions> */}
</Grid>
</SubCard>
  )
}

export default CustomerDetailSubCard;



  