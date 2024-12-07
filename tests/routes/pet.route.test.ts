import express from "express";
import request from "supertest";
import { describe, expect, it } from "vitest";

const app = express();

// Definimos la estructura de la ruta raíz
app.get("/", (req, res) => {
  res.json([]);
});

describe("Ruta GET /", () => {
  it("debería devolver un código 200 al ingresar a la ruta raíz", async () => {
    const response = await request(app).get("/").expect(200);
    const status = response.statusCode;
    expect(status).toBe(200);
  });
});
