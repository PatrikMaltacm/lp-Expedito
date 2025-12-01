import { Box, Typography, Button } from '@mui/material'
import { HERO_INFO } from '../../constants/contactInfo';
import { ScrollLink } from '../ScrollLink';


const Hero = () => {

    return (
        <Box
            id="inicio"
            sx={{
                position: "relative",
                mt: { xs: '6em', sm: '7em', md: '8em' },
                width: { xs: '100%', sm: '100%', md: '100%' },
                height: { xs: '400px', sm: '550px', md: '800px' },
                backgroundImage: `url(${HERO_INFO.backgroundImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: 2,
                px: { xs: 2, md: 0 }
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    color: "#fff",
                    textShadow: "0 2px 8px rgba(0,0,0,0.7)",
                    fontWeight: "bold",
                    fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.5rem' },
                    lineHeight: 1.2
                }}
            >
                {HERO_INFO.title} <br /> {HERO_INFO.subtitle}
            </Typography>

            <Button
                variant="contained"
                sx={{
                    backgroundColor: HERO_INFO.buttonColor,
                    color: "#000",
                    textTransform: "none",
                    fontWeight: "bold",
                    px: 3,
                    py: 1,
                    borderRadius: 2,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    "&:hover": {
                        backgroundColor: HERO_INFO.buttonHoverColor,
                    }
                }}
            >
                <ScrollLink href="#horarios" color="inherit">{HERO_INFO.buttonText}</ScrollLink>
            </Button>
        </Box>
    )
}

export default Hero;
