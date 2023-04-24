import React from 'react';

import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function AproposPage() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="pokeball"
                height="140"
                image="AnanouPortrait1.png"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Apwopo
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Apprenez tout ce qu'il y a à apprendre sur cette créature étrange!
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Apprenez-en davantage!</Button>
            </CardActions>
        </Card>

    );
}
