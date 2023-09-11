const express = require('express');
const app = express();
const port = 8080;

app.listen(port, (err) => {
    if (err) {
        console.error("Error starting the server:", err);
    } else {
        console.log("Server is started on port", port);
    }
});

app.get("/", (req, res) => {
    const userIP = req.ip; // Get the user's IP address from the request object
    const userAgent = req.headers['user-agent']; // Get the user's browser name from request headers
    const requestTime = new Date(); // Get the time of the request
    console.log("User IP Address:", userIP);
    console.log("User Browser:", userAgent);
    console.log("Request Time:", requestTime);
    res.json({
        UserIP:userIP,
        BrowserDetails:userAgent,
        RequestTime:requestTime,
    });
});
