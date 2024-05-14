export const load = async ({ fetch }) => {
    const response =  await fetch(`https://api.stockx.vlour.me/search?query=Nike shoes&page=25`);

    const shoes = await response.json();

    return shoes;
}