// src/components/URLStatsPage.js

import React from 'react';
import { Typography, Paper, Container } from '@mui/material';
import logger from '../middleware/logger';

const log = logger("URLStatsPage");

const URLStatsPage = () => {
  log("Stats page loaded");

  // Placeholder stats — replace with real stats later
  const dummyStats = [
    {
      shortUrl: "http://localhost:3000/abc123",
      originalUrl: "https://example.com/long-url-1",
      expiry: "2025-07-30 12:00 PM",
      totalClicks: 4,
      clickDetails: [
        { timestamp: "2025-07-29 11:01", location: "Tirupati" },
        { timestamp: "2025-07-29 11:03", location: "Hyderabad" },
      ],
    },
  ];

  return (
    <Container>
      <Typography variant="h5" gutterBottom>URL Shortener Statistics</Typography>
      {dummyStats.map((stat, index) => (
        <Paper key={index} style={{ padding: 15, marginBottom: 15 }}>
          <p><strong>Original URL:</strong> {stat.originalUrl}</p>
          <p><strong>Short URL:</strong> <a href={stat.shortUrl}>{stat.shortUrl}</a></p>
          <p><strong>Expiry:</strong> {stat.expiry}</p>
          <p><strong>Total Clicks:</strong> {stat.totalClicks}</p>
          <p><strong>Click Details:</strong></p>
          <ul>
            {stat.clickDetails.map((click, i) => (
              <li key={i}>{click.timestamp} — {click.location}</li>
            ))}
          </ul>
        </Paper>
      ))}
    </Container>
  );
};

export default URLStatsPage;
