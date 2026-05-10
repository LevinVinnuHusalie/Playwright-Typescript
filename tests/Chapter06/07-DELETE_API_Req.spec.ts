import { test, expect } from "@playwright/test";

import tokenBody from "../../test-data/api_request/post.token_generator.req.json";
import patchBody from "../../test-data/api_request/patch.update_booking.req.json";

import { getPostAPIBody } from "../../src/utils/APIHelper";
import { faker } from "@faker-js/faker";

test.use({
    baseURL: process.env.BASE_URL,
});

test("Create a DELETE request for booking ID", { tag: ["@PlaywrightWithJenkins"] }, async ({ request }) => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const price = faker.number.int({ min: 100, max: 1000 });

    const postAPIRequest = getPostAPIBody(firstName, lastName, price, true, "brunch", "2020-01-01", "2020-02-02");

    const response = await request.post("/booking", { data: postAPIRequest });
    const responseBody = await response.json();
    console.log(responseBody);

    const bookingID = responseBody.bookingid;

    expect(response.status()).toBe(200);
    expect(responseBody).toHaveProperty("bookingid");
    // expect(responseBody.booking).toMatchObject(postAPIRequest);
    expect(responseBody.booking.totalprice).toBe(postAPIRequest.totalprice);
    expect(responseBody.booking.firstname).toBe(postAPIRequest.firstname);
    expect(responseBody.booking.lastname).toBe(postAPIRequest.lastname);

    const tokenResponse = await request.post("/auth", { data: tokenBody });
    const tokenResponseBody: TokenInterface = await tokenResponse.json();
    const token = tokenResponseBody.token;

    console.log(tokenResponseBody);

    const deleteResponse = await request.delete(`/booking/${bookingID}`, {
        headers: {
            "Content-Tyoe": "application/json",
            Cookie: `token=${token}`,
        },
    });
    const deleteResponseBody = await deleteResponse.body();

    console.log(deleteResponseBody.toString());

    expect(deleteResponse.status()).toBe(201);
    expect(deleteResponse.statusText()).toBe("Created");
    expect(deleteResponse.headers()["content-type"]).toContain("text/plain");
    expect(deleteResponseBody.toString()).toBe("Created");

    // expect(getResponseBody).toMatchObject(responseBody.booking);
});
