import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import { ScrollLink } from '../ScrollLink';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuClose = () => {
    setMobileMenuOpen(false);
  };
  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: { xs: 10, sm: 15, md: 20 },
          left: '50%',
          transform: 'translateX(-50%)',
          width: { xs: '90%', sm: '80%', md: '60%' },
          borderRadius: 4,
          background: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 8px 32px rgba(31, 38, 135, 0.2)',
          zIndex: 1300,
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black", fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' } }}>
            Comunidade Santo Expedito
          </Typography>

          {/* Menu Desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex', color: "black" } }}>
            <ScrollLink href="#inicio" color="inherit">Inicio</ScrollLink>
            <ScrollLink href="#sobre" color="inherit">Sobre nós</ScrollLink>
            <ScrollLink href="#horarios" color="inherit">Horários</ScrollLink>
            <ScrollLink href="#localizacao" color="inherit">Localização</ScrollLink>
          </Box>

          {/* Menu Mobile - Botão */}
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={() => setMobileMenuOpen(true)}
            sx={{ display: { xs: 'flex', md: 'none' }, color: "black" }}
          >
            <span className="material-symbols-outlined">menu</span>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer Mobile */}
      <Drawer
        anchor="top"
        open={mobileMenuOpen}
        onClose={handleMenuClose}
        sx={{
          '& .MuiDrawer-paper': {
            mt: { xs: '50px', sm: '60px' },
            borderRadius: '0 0 8px 8px',
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <ScrollLink
            href="#inicio"
            color="inherit"
            onLinkClick={handleMenuClose}
            sx={{ justifyContent: 'flex-start', py: 1.5 }}
          >
            Inicio
          </ScrollLink>
          <ScrollLink
            href="#sobre"
            color="inherit"
            onLinkClick={handleMenuClose}
            sx={{ justifyContent: 'flex-start', py: 1.5 }}
          >
            Sobre nós
          </ScrollLink>
          <ScrollLink
            href="#horarios"
            color="inherit"
            onLinkClick={handleMenuClose}
            sx={{ justifyContent: 'flex-start', py: 1.5 }}
          >
            Horários
          </ScrollLink>
          <ScrollLink
            href="#localizacao"
            color="inherit"
            onLinkClick={handleMenuClose}
            sx={{ justifyContent: 'flex-start', py: 1.5 }}
          >
            Localização
          </ScrollLink>
        </Box>
      </Drawer>
    </>
  );
}

export default Header;
