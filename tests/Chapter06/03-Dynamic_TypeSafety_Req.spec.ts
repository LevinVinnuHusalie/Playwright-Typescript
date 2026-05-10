import { test, expect } from "@playwright/test";


import { getPostAPIBody } from "../../src/utils/APIHelper";
import { faker } from "@faker-js/faker";

test.use({
    baseURL: process.env.BASE_URL,
});

test("Create a booking and with dynamic value on request", async ({ request }) => {
    // const temp = JSON.stringify(postAPIRequests, null, 2);
    // const values = ["firstName", "lastName", 100];

    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const price = faker.number.int({ min: 100, max: 1000 });

    const postAPIRequest = getPostAPIBody(firstName, lastName, price, true, "brunch", "2020-01-01", "2020-02-02");

    // const postAPIRequest = formatAPIRequest(temp, values);

    const response = await request.post("/booking", { data: postAPIRequest });
    const responseBody = await response.json();
    console.log(responseBody);

    expect(response.status()).toBe(200);
    expect(responseBody).toHaveProperty("bookingid");
    // expect(responseBody.booking).toMatchObject(JSON.parse(postAPIRequest));
    expect(responseBody.booking.totalprice).toBe(postAPIRequest.totalprice);
    expect(responseBody.booking.firstname).toBe(postAPIRequest.firstname);
    expect(responseBody.booking.lastname).toBe(postAPIRequest.lastname);
});
