import { Box, Typography } from '@mui/material';
import imgSanto from "../../assets/pngwing.com.png"
import { SANTO_EXPEDITO_INFO } from '../../constants/contactInfo';


const SantoExpedito = () => {
    return (
        <Box id="santo-expedito" sx={{ py: { xs: 6, md: 8 }, px: 2 }}>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                    gap: { xs: 3, md: 6 },
                    alignItems: "center",
                    maxWidth: "1100px",
                    mx: "auto"
                }}
            >

                {/* IMAGEM */}
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: { xs: 250, sm: 300, md: 350 },
                            aspectRatio: "3 / 4",
                            backgroundImage: `url(${imgSanto})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: "80%",
                            backgroundPosition: "center",
                            borderRadius: 3,
                            border: "1px solid rgba(0,0,0,0.1)"
                        }}
                    />
                </Box>

                {/* TEXTOS + ORAÇÃO */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>

                    {/* TEXTO SOBRE SANTO EXPEDITO */}
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: "900",
                            color: "#000",
                            letterSpacing: "-0.03em",
                            fontSize: { xs: '1.6rem', sm: '1.9rem', md: '2.1rem' }
                        }}
                    >
                        {SANTO_EXPEDITO_INFO.title}
                    </Typography>

                    <Typography sx={{ color: "gray", lineHeight: 1.7 }}>
                        {SANTO_EXPEDITO_INFO.description1}
                    </Typography>

                    <Typography sx={{ color: "gray", lineHeight: 1.7 }}>
                        {SANTO_EXPEDITO_INFO.description2}
                    </Typography>

                    {/* ORAÇÃO DE SANTO EXPEDITO */}
                    <Box
                        sx={{
                            mt: 2,
                            backgroundColor: "#ffe4ea",
                            borderRadius: 3,
                            p: 3,
                            boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{ fontWeight: "bold", color: "#b4234e", mb: 1 }}
                        >
                            {SANTO_EXPEDITO_INFO.prayerTitle}
                        </Typography>

                        <Typography sx={{ color: "#7a2e47", lineHeight: 1.8 }}>
                            {SANTO_EXPEDITO_INFO.prayer}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default SantoExpedito;
