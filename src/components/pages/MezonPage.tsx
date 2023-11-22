import React from 'react';
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';

const originalCardData = {
    title: 'À propos',
    description: "Apprenez tout ce qu'il y a à apprendre sur cette créature étrange!",
    image: 'AnanouPortrait1.png',
    link: '/selon',
};

const cardData = Array.from({ length: 1 }, (_, index) => ({ ...originalCardData, id: index }));

const MezonPage = () => {
    React.useEffect(() => {
        const rootElement = document.getElementById('root');
        if (rootElement) {
            rootElement.style.height = '100vh';
            rootElement.style.display = 'flex';
            rootElement.style.justifyContent = 'center';
            rootElement.style.alignItems = 'center';
            rootElement.style.backgroundColor = '#ffd700'; // Warm yellow background
        }
    }, []);

    return (
        <>
            <CssBaseline />
            <Box sx={{ mx: 'auto', py: 6, px: 2, height: '100vh', overflow: 'auto', backgroundColor: '#ffd700' }}>
                <Grid container spacing={4} sx={{ justifyContent: 'center', alignItems: 'center', width: '100vw', px: 4 }}>
                    {cardData.map((card, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Card sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 4 }}>
                                <CardMedia component="img" alt={card.title} image={card.image} sx={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px 4px 0 0' }} />
                                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {card.description}
                                    </Typography>
                                    <CardActions>
                                        <Button href={card.link} size="small">Apprenez-en davantage!</Button>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
}

ReactDOM.render(<MezonPage />, document.getElementById('root'));
export default MezonPage;
