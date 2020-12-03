/*
 * Created by Jimmy Lan
 * Creation Date: 2020-12-01
 */

import request from "supertest";
import { app } from "../../app";

jest.mock("../../services/NatsWrapper");

it("removes cookie after successfully signed out", async () => {
  await request(app)
    .post("/api/auth/signup")
    .send({
      email: "info@logouttest.com",
      password: "password!",
    })
    .expect(201);

  const response = await request(app)
    .post("/api/auth/signout")
    .send({})
    .expect(200);

  expect(response.get("Set-Cookie")[0]).toEqual(
    "express:sess=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly"
  );
});
