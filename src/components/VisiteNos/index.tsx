import { Box, Typography } from "@mui/material";
import { CONTACT_INFO } from "../../constants/contactInfo";

function VisiteNos() {
    return (
        <Box id="localizacao" sx={{ py: { xs: 6, md: 10 }, px: 2, width: { xs: '100%', md: '60%' } }}>
            {/* TÍTULO */}
            <Box sx={{ textAlign: "center", mb: { xs: 4, md: 8 } }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "22px", sm: "32px" },
                        letterSpacing: "-0.015em",
                    }}
                >
                    Visite-nos e Entre em Contato
                </Typography>
            </Box>

            {/* GRID */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                    gap: { xs: 4, md: 6 },
                    alignItems: "center",
                    maxWidth: "100%",
                    mx: "auto",
                }}
            >
                {/* COLUNA ESQUERDA - INFORMAÇÕES */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    {/* ENDEREÇO */}
                    <Box sx={{ display: "flex", gap: 2 }}>
                        <Box sx={{ fontSize: 30, mt: "4px", color: "#EA2831" }}>
                            <span className="material-symbols-outlined">location_on</span>
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                                Endereço
                            </Typography>
                            <Typography sx={{ color: "gray" }}>
                                {CONTACT_INFO.address.shortAddress}<br />
                                {CONTACT_INFO.address.city}, {CONTACT_INFO.address.country}
                            </Typography>
                        </Box>
                    </Box>

                    {/* EMAIL */}
                    <Box sx={{ display: "flex", gap: 2 }}>
                        <Box sx={{ fontSize: 30, mt: "4px", color: "#EA2831" }}>
                            <span className="material-symbols-outlined">email</span>
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                                Email
                            </Typography>
                            <Typography sx={{ color: "gray" }}>
                                {CONTACT_INFO.email}
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* COLUNA DIREITA - MAPA */}
                <Box
                    component="iframe"
                    sx={{
                        width: "100%",
                        height: { xs: "250px", md: "350px" },
                        border: 0,
                        borderRadius: 3,
                    }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={CONTACT_INFO.mapEmbedUrl}
                />
            </Box>
        </Box>
    );
}

export default VisiteNos;
