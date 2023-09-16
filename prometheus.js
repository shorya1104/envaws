const express = require('express');
const Prometheus = require('prom-client');

// Create a Prometheus counter to track the number of requests
const counter = new Prometheus.Counter({
  name: 'myapp_requests_total',
  help: 'Number of requests received',
  labelNames: ['method']
});

const app = express();

// Increment the counter for each request
app.use((req, res, next) => {
  counter.inc({ method: req.method });
  next();
});

// Define your routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Register the Prometheus metrics endpoint
app.get('/metrics', async (req, res) => {
    try {
      res.set('Content-Type', Prometheus.register.contentType);
      const metrics = await Prometheus.register.metrics();
      res.end(metrics);
    } catch (error) {
      console.error(error);
      res.status(500).end();
    }
  });
  
// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
