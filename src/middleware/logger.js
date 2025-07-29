// src/middleware/logger.js

const logger = (functionName) => {
  return function (...args) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Function "${functionName}" called with arguments:`, ...args);
  };
};

export default logger;
