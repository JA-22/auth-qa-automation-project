const request = require("supertest");
const app = require("../../backend/server");

describe("POST /api/login", () => {

test("should login successfully with valid credentials", async () => {

const response = await request(app)
.post("/api/login")
.send({
email: "user@test.com",
password: "123456"
});

expect(response.statusCode).toBe(200);
expect(response.body.token).toBeDefined();

});

});