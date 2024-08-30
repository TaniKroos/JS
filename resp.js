const responseTimeLogger = (req, res, next) => {
    const start = Date.now(); // Capture the start time
    
    // Attach a listener to the 'finish' event, which is emitted when the response is sent
    res.on('finish', () => {
        const duration = Date.now() - start; // Calculate the duration
        console.log(`Request to ${req.method} ${req.originalUrl} took ${duration}ms`);
    });

    next(); // Pass the request to the next middleware or route handler
};



module.exports = responseTimeLogger;
