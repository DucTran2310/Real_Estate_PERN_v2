require('dotenv').config({
  path: process.env.NODE_ENV === 'development' ? '.env.development' : process.env.NODE_ENV === 'production' ? '.env.production' : '.env'
});

const express = require("express");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const fs = require("fs");
const path = require("path");
const YAML = require('yaml');
const { connectionDatabase } = require("./configs/dbconnect");
const initRoutes = require("./routes");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", "PUT", "DELETE", "GET"]
  })
);

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true, limit: "5mb" }));

//=====================================================================================
// Đảm bảo đường dẫn tới file swagger.yaml chính xác
const swaggerFilePath = path.join(__dirname, 'swagger.yaml');
if (fs.existsSync(swaggerFilePath)) {
  const file = fs.readFileSync(swaggerFilePath, 'utf8'); // Đọc file swagger.yaml
  const swaggerDocument = YAML.parse(file); // Parse file YAML sang object

  // Kiểm tra xem swaggerDocument đã được load đúng chưa
  console.log("Swagger Document loaded successfully");

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
} else {
  console.error("Swagger file not found at: ", swaggerFilePath);
}
//=====================================================================================
connectionDatabase();
initRoutes(app);

const port = process.env.PORT_SERVER || 5001;

app.listen(port, () => {
  console.log(`::: Server is running on port: ${port}`);
});
