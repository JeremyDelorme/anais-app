import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MagasinPage() {
    return (
        <Box style={{ justifyContent: "center" }}>
            <Card>
                <CardMedia
                    component="img"
                    alt="vieilledjole"
                    height="700"
                    image="VieilleDjole.png"
                />
                <CardContent >
                    <Typography variant='h3' gutterBottom>
                        À propos
                    </Typography>
                    <Typography variant="h4" color="text.secondary">
                        Apprenez tout ce qu'il y a à apprendre sur cette créature étrange!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Apprenez-en davantage!</Button>
                </CardActions>
            </Card>
            <Card>
                <CardMedia
                    component="img"
                    alt="vieilledjole"
                    height="700"
                    image="VieilleDjole.png"
                />
                <CardContent >
                    <Typography variant='h3' gutterBottom>
                        À propos
                    </Typography>
                    <Typography variant="h4" color="text.secondary">
                        Apprenez tout ce qu'il y a à apprendre sur cette créature étrange!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Apprenez-en davantage!</Button>
                </CardActions>
            </Card>
            <Card>
                <CardMedia
                    component="img"
                    alt="vieilledjole"
                    height="700"
                    image="VieilleDjole.png"
                />
                <CardContent >
                    <Typography variant='h3' gutterBottom>
                        À propos
                    </Typography>
                    <Typography variant="h4" color="text.secondary">
                        Apprenez tout ce qu'il y a à apprendre sur cette créature étrange!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Apprenez-en davantage!</Button>
                </CardActions>
            </Card>
            <Card>
                <CardMedia
                    component="img"
                    alt="vieilledjole"
                    height="700"
                    image="VieilleDjole.png"
                />
                <CardContent >
                    <Typography variant='h3' gutterBottom>
                        À propos
                    </Typography>
                    <Typography variant="h4" color="text.secondary">
                        Apprenez tout ce qu'il y a à apprendre sur cette créature étrange!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Apprenez-en davantage!</Button>
                </CardActions>
            </Card>
        </Box>

    );
}
