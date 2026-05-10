import { test, expect } from "@playwright/test";

import postAPIRequest from "../../test-data/api_request/post.create_booking.req.json";

test.use({
    baseURL: process.env.BASE_URL,
});

test("Create a booking and verify the response", async ({ request }) => {
    const response = await request.post("/booking", { data: postAPIRequest });
    const responseBody = await response.json();
    console.log(responseBody);

    expect(response.status()).toBe(200);
    expect(responseBody).toHaveProperty("bookingid");
    expect(responseBody.booking).toMatchObject(postAPIRequest);
    expect(responseBody.booking.firstname).toBe(postAPIRequest.firstname);
    expect(responseBody.booking.lastname).toBe(postAPIRequest.lastname);
});
