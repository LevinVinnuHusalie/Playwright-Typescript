import { test, expect } from "@playwright/test";

import { getPostAPIBody } from "../../src/utils/APIHelper";
import { faker } from "@faker-js/faker";

test.use({
    baseURL: process.env.BASE_URL,
});

test("Create a GET request for booking details", async ({ request }) => {
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
    // expect(responseBody.booking).toMatchObject(postAPIRequest);
    expect(responseBody.booking.totalprice).toBe(postAPIRequest.totalprice);
    expect(responseBody.booking.firstname).toBe(postAPIRequest.firstname);
    expect(responseBody.booking.lastname).toBe(postAPIRequest.lastname);

    const getResponse = await request.get("/booking/" + responseBody.bookingid);
    const getResponseBody = await getResponse.json();

    console.log(getResponseBody);

    expect(getResponse.status()).toBe(200);
    expect(getResponse.statusText()).toBe("OK");
    expect(getResponse.headers()["content-type"]).toContain("application/json");
    expect(getResponseBody).toMatchObject(responseBody.booking);
});
