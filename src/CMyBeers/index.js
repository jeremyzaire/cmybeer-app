const apiUri = "https://my-json-server.typicode.com/jeremyzaire/cmybeer-app";
const responseToJson = (response) => response.json();

export default function CMyBeersFetch(route) {
  return () => fetch(`${apiUri}/${route}`).then(responseToJson);
}
