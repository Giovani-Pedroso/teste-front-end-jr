import axios from "axios";

export async function getProducts(url: string) {
  try {
    const request = await axios.get(url);
    const data = request.data;
    console.log("data", data.products);
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
}
