import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

export default function MezonPage() {
    return (
        <Box sx={{ display: 'flex' }} m={4} p={3} >

            <Card sx={{ maxWidth: 345, m: 4 }} >
                <CardMedia
                    component="img"
                    alt="À propos"
                    height="500"
                    image="AnanouPortrait1.png"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        À propos
                    </Typography>
                    <Typography variant="body2" >
                        Apprenez tout ce qu'il y a à apprendre sur cette créature étrange!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href="/apropos" size="small">Apprenez-en davantage!</Button>
                </CardActions>
            </Card>
            <Card
                sx={{ maxWidth: 345, m: 4 }}
            >
                <CardMedia
                    component="img"
                    alt="Science"
                    height="500"
                    image="AnanouPortrait1.png"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        La Science!
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Apprenez tout ce qu'il y a à apprendre sur cette créature étrange!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href="/science" size="small">Apprenez-en davantage!</Button>
                </CardActions>
            </Card>
            <Card
                sx={{ maxWidth: 345, m: 4 }}
            >
                <CardMedia
                    component="img"
                    alt="Magasin"
                    height="500"
                    image="AnanouPortrait1.png"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Magasin
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Apprenez tout ce qu'il y a à apprendre sur cette créature étrange!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href="/magasin" size="small">Apprenez-en davantage!</Button>
                </CardActions>
            </Card>
            <Card
                sx={{ maxWidth: 345, m: 4 }}
            >
                <CardMedia
                    component="img"
                    alt="Témoignages"
                    height="500"
                    image="AnanouPortrait1.png"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Témoignages
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Apprenez tout ce qu'il y a à apprendre sur cette créature étrange!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href="/temoignages" size="small">Apprenez-en davantage!</Button>
                </CardActions>
            </Card>
        </Box>


    );
}
