// src/components/URLShortenerForm.js

import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Link,
  IconButton,
  Tooltip,
  Paper
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import logger from '../middleware/logger';

const log = logger("URLShortenerForm");

function URLShortenerForm() {
  const [urls, setUrls] = useState([
    { longUrl: '', validity: '', customCode: '', shortUrl: '', expiry: '' }
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...urls];
    updated[index][field] = value;
    setUrls(updated);
    log("Input Changed", updated);
  };

  const handleAddField = () => {
    if (urls.length < 5) {
      setUrls([
        ...urls,
        { longUrl: '', validity: '', customCode: '', shortUrl: '', expiry: '' }
      ]);
      log("Added new URL input field");
    }
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updated = urls.map((item) => {
      if (!item.longUrl) return item; // Skip if longUrl is empty
      const shortcode = item.customCode || Math.random().toString(36).substring(2, 7);
      const now = new Date();
      const expiryMinutes = parseInt(item.validity) || 30;
      const expiryDate = new Date(now.getTime() + expiryMinutes * 60000);
      return {
        ...item,
        shortUrl: `http://localhost:3000/${shortcode}`,
        expiry: expiryDate.toLocaleString(),
      };
    });

    setUrls(updated);
    log("Form Submitted", updated);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Box p={4} boxShadow={4} borderRadius={3} bgcolor="#f0f4f8">
        <Typography variant="h4" gutterBottom align="center" color="primary">
          🔗 Smart URL Shortener
        </Typography>

        <form onSubmit={handleSubmit}>
          {urls.map((url, index) => (
            <Paper
              elevation={2}
              sx={{ mb: 4, p: 3, borderRadius: 2, backgroundColor: 'white' }}
              key={index}
            >
              <Typography variant="h6" color="secondary" gutterBottom>
                🔢 URL Entry {index + 1}
              </Typography>

              <TextField
                label="Long URL *"
                fullWidth
                margin="normal"
                value={url.longUrl}
                required
                onChange={(e) => handleChange(index, 'longUrl', e.target.value)}
              />

              <TextField
                label="Validity (minutes)"
                fullWidth
                margin="normal"
                type="number"
                value={url.validity}
                onChange={(e) => handleChange(index, 'validity', e.target.value)}
              />

              <TextField
                label="Custom Shortcode (optional)"
                fullWidth
                margin="normal"
                value={url.customCode}
                onChange={(e) => handleChange(index, 'customCode', e.target.value)}
              />

              {url.shortUrl && (
                <Box
                  mt={3}
                  p={2}
                  borderRadius={2}
                  bgcolor="#e3f2fd"
                  border="1px solid #90caf9"
                >
                  <Typography variant="body2" color="primary">
                    Shortened URL:{" "}
                    <Link
                      href={url.longUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="hover"
                    >
                      {url.shortUrl}
                    </Link>
                    <Tooltip title="Copy to clipboard">
                      <IconButton
                        size="small"
                        onClick={() => handleCopy(url.shortUrl)}
                      >
                        <ContentCopyIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Typography>

                  <Typography variant="body2" color="textSecondary">
                    ⏳ Expires at: {url.expiry}
                  </Typography>
                </Box>
              )}
            </Paper>
          ))}

          <Box display="flex" justifyContent="space-between" mt={2}>
            {urls.length < 5 && (
              <Button variant="outlined" onClick={handleAddField}>
                ➕ Add More
              </Button>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              🚀 Shorten URLs
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default URLShortenerForm;
