const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Sanitize the user ID to prevent injection attacks
  const sanitizedUserId = sanitize(userId);
  // ... database operation to fetch user details using sanitizedUserId ...
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});

function sanitize(id) {
  //Implement your own sanitization logic.  For example you can use regex to remove unsafe characters
  return id.replace(/[^a-zA-Z0-9]/g, '');
}
// ... other routes ...
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});