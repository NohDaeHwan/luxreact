import { useState } from 'react';
import {
Box,
Button,
Card,
CardContent,
CardHeader,
Divider,
Grid,
TextField
} from '@mui/material';

const states = [
{
value: 'alabama',
label: 'Alabama'
},
{
value: 'new-york',
label: 'New York'
},
{
value: 'san-francisco',
label: 'San Francisco'
}
];

export const SelectField = (props) => {
const [values0, setValues0] = useState({
firstName: 'Katarina',
lastName: 'Smith',
email: 'demo@devias.io',
phone: '',
state: 'Alabama',
country: 'USA'
});

const [values01, setValues01] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
    });

const [values1, setValues1] = useState({
firstName: 'Katarina',
lastName: 'Smith',
email: 'demo@devias.io',
phone: '',
state: 'Alabama',
country: 'USA'
});

const [values2, setValues2] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
    });

const [values3, setValues3] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
    });

const [values4, setValues4] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
    });

const handleChange0 = (event) => {
setValues0({
    ...values0,
    [event.target.name]: event.target.value
});
};

const handleChange01 = (event) => {
    setValues01({
        ...values01,
        [event.target.name]: event.target.value
    });
    };

return (
<form
    autoComplete="off"
    noValidate
    {...props}
>
    <Card>
    <CardContent>
        <Grid
        container
        spacing={3}
        >
        <Grid
            item
            md={6}
            xs={12}
        >
            <TextField
            fullWidth
            label="경매상태"
            name="state"
            onChange={handleChange0}
            required
            select
            SelectProps={{ native: true }}
            value={values0.state}
            variant="outlined"
            >
            {states.map((option) => (
                <option
                key={option.value}
                value={option.value}
                >
                {option.label}
                </option>
            ))}
            </TextField>
        </Grid>
        <Grid
            item
            md={6}
            xs={12}
        >
            <TextField
            fullWidth
            label="기준날짜"
            name="state"
            onChange={handleChange01}
            required
            select
            SelectProps={{ native: true }}
            value={values01.state}
            variant="outlined"
            >
            {states.map((option) => (
                <option
                key={option.value}
                value={option.value}
                >
                {option.label}
                </option>
            ))}
            </TextField>
        </Grid>
        </Grid>
    </CardContent>
    </Card>
</form>
);
};
