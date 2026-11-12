const test = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");
const app = require("./app");

test("health endpoint returns healthy status", async () => {
  const response = await request(app).get("/api/health");
  assert.equal(response.status, 200);
  assert.equal(response.body.status, "healthy");
});

test("employees endpoint returns employee records", async () => {
  const response = await request(app).get("/api/employees");
  assert.equal(response.status, 200);
  assert.equal(Array.isArray(response.body), true);
  assert.equal(response.body.length, 3);
});