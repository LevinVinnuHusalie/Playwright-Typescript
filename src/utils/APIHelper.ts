
export  function formatAPIRequest(template: string, values: any[]): string {
    return template.replace(/{(\d+)}/g, (match, p1) => {
        const index = parseInt(p1, 10);
        return index < values.length ? String(values[index]) : match;
    });
}


export function getPostAPIBody(fname: string, lname: string, price:number, isDeposit: boolean, additionalneeds: string, checkIn: string, checkOut: string) {
    const apiRequest: BookingAPI = {
        firstname: fname, 
        lastname: lname,
        totalprice: price,
        depositpaid: isDeposit,
        additionalneeds: additionalneeds,
        bookingdates: {
            checkin: checkIn,
            checkout: checkOut
        }
    }

    return apiRequest;
}