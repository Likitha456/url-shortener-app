import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logger from '../middleware/logger';

const log = logger("RedirectHandler");

const RedirectHandler = () => {
  const { shortcode } = useParams(); // catch URL like /abc123
  const navigate = useNavigate();

  useEffect(() => {
    log("Attempting redirection for shortcode:", shortcode);

    // Simulated URL map – in real project, this would come from backend/local storage
    const urlMapping = {
      abc123: "https://example.com/long-url-1",
      xyz789: "https://google.com",
    };

    const longUrl = urlMapping[shortcode];

    if (longUrl) {
      // Real redirection
      window.location.href = longUrl;
    } else {
      log("Invalid shortcode, redirecting to home");
      navigate("/");
    }
  }, [shortcode, navigate]);

  return <p>Redirecting...</p>;
};

export default RedirectHandler;
