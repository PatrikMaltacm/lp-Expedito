import { Box, Typography, IconButton } from "@mui/material";
import { CONTACT_INFO } from "../../constants/contactInfo";

function Footer() {
  return (
    <Box
      sx={{
        mt: 10,
        width: "100%",
        backgroundColor: "#f4f4f4",
        borderTop: "1px solid rgba(0,0,0,0.1)",
        py: 6,
        px: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 3,
      }}
    >
      {/* Nome da comunidade */}
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {CONTACT_INFO.communityName}
      </Typography>

      {/* Endereço rápido */}
      <Typography sx={{ color: "gray", fontSize: "0.95rem" }}>
        {CONTACT_INFO.address.fullAddress}
      </Typography>

      {/* Ícones Sociais */}
      <Box sx={{ display: "flex", gap: 2 }}>
        <IconButton
          href="#"
          sx={{ color: "#EA2831", fontSize: 28 }}
        >
          <span className="material-symbols-outlined">favorite</span>
        </IconButton>

        <IconButton
          href="#"
          sx={{ color: "#EA2831", fontSize: 28 }}
        >
          <span className="material-symbols-outlined">share</span>
        </IconButton>

        <IconButton
          href="#"
          sx={{ color: "#EA2831", fontSize: 28 }}
        >
          <span className="material-symbols-outlined">mail</span>
        </IconButton>
      </Box>

      {/* Copyright */}
      <Typography sx={{ color: "gray", fontSize: "0.85rem", mt: 2 }}>
        © {new Date().getFullYear()} Comunidade Santo Expedito — Todos os direitos reservados.
      </Typography>
    </Box>
  );
}

export default Footer;
