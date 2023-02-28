import { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const UnderConstructionWarning = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <Box
          sx={{
            display: 'flex',
            bgcolor: 'warning.main',
            color: 'warning.contrastText',
            justifyContent: 'center',
          }}
        >
          <Typography variant="subtitle1">
            This site is under construction.
          </Typography>
          <IconButton size="small" onClick={handleClose} sx={{ ml: 2 }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      )}
    </>
  );
};

export default UnderConstructionWarning;
