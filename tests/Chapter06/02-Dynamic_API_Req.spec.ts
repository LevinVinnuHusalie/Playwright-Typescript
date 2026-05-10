import { test, expect } from "@playwright/test";

import postAPIRequests from "../../test-data/api_request/post.dynamic_api.req.json";

import { formatAPIRequest } from "../../src/utils/APIHelper";
// import path from "path";
// import fs from "fs";

import { faker } from "@faker-js/faker";

test.use({
    baseURL: process.env.BASE_URL,
});

// test("Create a booking and with dynamic value on request", async ({ request }) => {
//     // const filePath = path.join(__dirname, "../../test-data/api_request/post.dynamic_api.req.json")
//     // const jsonTemplate = fs.readFileSync(filePath, "utf-8");

//     const temp = JSON.stringify(postAPIRequests, null, 2);
//     const values = ["firstName", "lastName", 100];

//     const postAPIRequest = formatAPIRequest(temp, values);

//     const response = await request.post("/booking", { data: JSON.parse(postAPIRequest) });
//     const responseBody = await response.json();
//     console.log(responseBody);

//     expect(response.status()).toBe(200);
//     expect(responseBody).toHaveProperty("bookingid");
//     // expect(responseBody.booking).toMatchObject(JSON.parse(postAPIRequest));
//     expect(responseBody.booking.totalprice).toBe(100);
//     expect(responseBody.booking.firstname).toBe(JSON.parse(postAPIRequest).firstname);
//     expect(responseBody.booking.lastname).toBe(JSON.parse(postAPIRequest).lastname);
// });

test("Create a booking with value from faker", async ({ request }) => {
    // const filePath = path.join(__dirname, "../../test-data/api_request/post.dynamic_api.req.json")
    // const jsonTemplate = fs.readFileSync(filePath, "utf-8");

    const temp = JSON.stringify(postAPIRequests, null, 2);
    const values = [faker.person.firstName(), faker.person.lastName(), faker.number.int({ min: 100, max: 1000 })];

    // const values = ["firstName", "lastName", 100];

    const postAPIRequest = formatAPIRequest(temp, values);

    const response = await request.post("/booking", { data: JSON.parse(postAPIRequest) });
    const responseBody = await response.json();
    console.log(responseBody);

    expect(response.status()).toBe(200);
    expect(responseBody).toHaveProperty("bookingid");
    // expect(responseBody.booking).toMatchObject(JSON.parse(postAPIRequest));
    expect(responseBody.booking.totalprice).toBe(values[2]);
    expect(responseBody.booking.firstname).toBe(values[0]);
    expect(responseBody.booking.lastname).toBe(values[1]);
});
