const express = require("express");
const app = express();

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});
