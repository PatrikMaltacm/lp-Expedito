import { Box, Typography, Card } from '@mui/material'
import { CELEBRATIONS_INFO } from '../../constants/contactInfo';

const Celebracoes = () => {
    return (
        <Box my={10} width={'100%' }>
            <Box id="horarios" sx={{ textAlign: "center", backgroundColor: "#f9fafb", py: 8, width: '100%' }}>

                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "22px", sm: "32px" },
                        px: 2,
                        pb: 3,
                        pt: 5,
                    }}
                >
                    Participe de Nossas Celebrações
                </Typography>
            </Box>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: 4,
                    p: 4,
                    backgroundColor: "#f9fafb",
                    width: '100%',
                    pb: 10
                }}
            >
                {CELEBRATIONS_INFO.map((celebration, index) => (
                    <Card
                        key={index}
                        sx={{
                            p: 4,
                            borderRadius: 3,
                            border: "1px solid rgba(0,0,0,0.1)",
                            display: "flex",
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: "column",
                            gap: 2,
                            backgroundColor: "#fff"
                        }}
                        elevation={0}
                    >
                        <Box sx={{ fontSize: 40, color: "#EA2831" }}>
                            <span className="material-symbols-outlined">{celebration.icon}</span>
                        </Box>

                        <Typography sx={{ fontSize: "1.25rem", fontWeight: "bold" }}>
                            {celebration.title}
                        </Typography>

                        <Typography sx={{ fontSize: "0.9rem", color: "gray", mt: 1 }}>
                            {celebration.schedule}
                        </Typography>
                    </Card>
                ))}
            </Box>
        </Box>
    )
}

export default Celebracoes;
