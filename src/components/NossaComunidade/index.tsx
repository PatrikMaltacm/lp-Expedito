import { Box, Typography, Button, Card } from '@mui/material'
import { COMMUNITY_INFO, COMMUNITY_CARDS } from '../../constants/contactInfo';
import { ScrollLink } from '../ScrollLink';

const NossaComunidade = () => {
    return (
        <Box
            id="sobre"
            sx={{
                mt: { xs: 3, md: 5 },
                mb: { xs: 3, md: 5 },
                width: { xs: '100%', md: '95%' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                flexDirection: 'column',
                backgroundColor: '#f9fafb',
                py: { xs: 8, md: 15 },
                px: { xs: 2, sm: 3, md: 4 }
            }}>

            <Typography
                variant="h3"
                sx={{
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
                }}
            >
                {COMMUNITY_INFO.title}
            </Typography>

            <Typography
                sx={{
                    color: "gray",
                    mt: 2,
                    maxWidth: "700px"
                }}
            >
                {COMMUNITY_INFO.description}
            </Typography>

            {/* BOTÃO */}
            <Button
                variant="contained"
                sx={{
                    backgroundColor: COMMUNITY_INFO.buttonColor,
                    textTransform: "none",
                    fontWeight: "bold",
                    px: 3,
                    py: 1,
                    borderRadius: 2,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    color: 'white',
                    "&:hover": {
                        backgroundColor: COMMUNITY_INFO.buttonHoverColor,
                    },
                    mt: 2
                }}
            >
                <ScrollLink href="#horarios" color="inherit">{COMMUNITY_INFO.buttonText}</ScrollLink>
            </Button>

            {/* CARDS */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: 4,
                    mt: 6,
                    width: "100%"
                }}
            >
                {COMMUNITY_CARDS.map((card, index) => (
                    <Card
                        key={index}
                        sx={{
                            p: 4,
                            borderRadius: 3,
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 2,
                            border: "1px solid rgba(0,0,0,0.1)",
                        }}
                        elevation={0}
                    >
                        <Box sx={{ fontSize: 40, color: "#EA2831", }}>
                            <span className="material-symbols-outlined">{card.icon}</span>
                        </Box>

                        <Typography variant="h6" fontWeight="bold">
                            {card.title}
                        </Typography>

                        <Typography variant="body2" color="gray">
                            {card.description}
                        </Typography>
                    </Card>
                ))}
            </Box>
        </Box>
    )
}

export default NossaComunidade;
