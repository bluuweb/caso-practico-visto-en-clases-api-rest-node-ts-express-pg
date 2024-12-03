import jwt from "jsonwebtoken";

export const generateAccessToken = (
  email: string,
  uid: string,
  expiresIn = "1h"
) => {
  return jwt.sign({ email, uid }, "secret", {
    expiresIn,
  });
};

export const verifyAccessToken = (token: string) => {
  return jwt.verify(token, "secret") as jwt.JwtPayload;
};
