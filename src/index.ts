import express from "express";
import rateLimit from "express-rate-limit";
import { pool } from "./config/database";
import { httpErrorHandle } from "./middlewares/httpErrorHandle.middleware";
import { loggerMiddleware } from "./middlewares/logger.middleware";
import authRoute from "./routes/auth.route";
import userRoute from "./routes/user.route";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar el limitador
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Límite de 100 peticiones por IP
  message:
    "Demasiadas solicitudes desde esta IP, por favor inténtalo más tarde.",
  standardHeaders: true, // Informa el límite en las cabeceras `RateLimit-*`
  legacyHeaders: false, // Desactiva las cabeceras `X-RateLimit-*`
});

// Aplicar el limitador globalmente
app.use(limiter);

app.use(loggerMiddleware);

app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth", authRoute);

app.use(httpErrorHandle);

const main = async () => {
  try {
    const { rows } = await pool.query("SELECT NOW()");
    console.log(rows[0].now, "db conectada!");
    app.listen(port, () => {
      console.log("Servidor andando en el puerto: " + port);
    });
  } catch (error) {
    console.log(error);
  }
};

main();
