const express = require('express');
const app = express();
const port = process.env.PORT || 5150;

app.get('/api/hello', (req, res) =>
  res.json([
    {
      id: 1,
      username: 'samsepi0l'
    },
    {
      id: 2,
      username: 'D0loresH4ze'
    }
  ])
);

app.listen(port, () => console.log(`Listening on port ${port}!`));
