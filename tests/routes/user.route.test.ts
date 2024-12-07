// /api/v1/users

import request from "supertest";
import { describe, expect, it, vi } from "vitest";
import app from "../../src/app";

// import {
//   UserModel
// } from "../../src/models/user.model"

vi.mock("../../src/models/user.model", () => {
  return {
    UserModel: {
      findAll: vi.fn(async () => []),
      // create:
    },
  };
});

// describe("test express", () => {
//   it("GET / should return code 200", async () => {
//     const token = generateAccessToken("test@test.com", "1");
//     const { statusCode, body } = await request(app)
//       .get("/api/v1/users")
//       .set("Authorization", `Bearer ${token}`);

//     console.log(body);

//     expect(statusCode).toBe(200);
//   });
// });

// Mock del middleware verifyToken
vi.mock("../../src/middlewares/jwt.middleware", () => {
  return {
    verifyToken: vi.fn((req, res, next) => {
      // Simular datos del usuario autenticado
      req.email = "mocked@example.com";
      req.uid = "mocked-uid";
      next();
    }),
  };
});

describe("/users", () => {
  it("GET should return users", async () => {
    const { statusCode, body } = await request(app).get("/api/v1/users");
    console.log(body);

    expect(statusCode).toBe(200);
  });
});
