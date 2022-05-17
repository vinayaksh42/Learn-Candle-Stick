import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function leaderSlot({ image, name, score }) {
    return (
        <Grid container spacing={2} direction="row" justify="centre">
            <Grid item xs={12} md={4} sm={6}>
                <div style={{ textAlign: "center" }}>
                    <img id="boardprofile" src={image} alt="profile" />
                </div>
            </Grid>
            <Grid item xs={12} md={4} sm={6}>
                <div style={{ textAlign: "center" }}>
                    <Typography sx={{ fontSize: 20 }} color="text.secondary" >
                        {name}
                    </Typography>
                </div>
            </Grid>
            <Grid item xs={12} md={4} sm={6}>
                <div style={{ textAlign: "center" }}>
                    <Typography sx={{ fontSize: 20 }} color="text.secondary" >
                        {score}
                    </Typography>
                </div>
            </Grid>
        </Grid>
    )
}
