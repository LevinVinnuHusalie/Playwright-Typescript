import { test, expect } from "@playwright/test";

import tokenBody from "../../test-data/api_request/post.token_generator.req.json";
import patchBody from "../../test-data/api_request/patch.update_booking.req.json";

import { getPostAPIBody } from "../../src/utils/APIHelper";
import { faker } from "@faker-js/faker";

test.use({
    baseURL: process.env.BASE_URL,
});

test("Create a PATCH request for booking ID", async ({ request }) => {
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

    const patchResponse = await request.patch(`/booking/${bookingID}`, {
        headers: {
            "Content-Tyoe": "application/json",
            Cookie: `token=${token}`,
        },
        data: patchBody,
    });
    const patchResponseBody = await patchResponse.json();

    console.log(patchResponseBody);

    expect(patchResponse.status()).toBe(200);
    expect(patchResponse.statusText()).toBe("OK");
    expect(patchResponse.headers()["content-type"]).toContain("application/json");
    expect(patchResponseBody).toMatchObject(patchBody);

    // expect(getResponseBody).toMatchObject(responseBody.booking);
});
