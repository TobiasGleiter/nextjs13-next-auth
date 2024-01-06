import createApiBearerToken from '../auth/createToken';

export async function getData() {
  // Create short-lived JSON Webtoken
  const bearerToken = createApiBearerToken({
    payload: { username: 'Tobias Gleiter' },
  });

  const res = await fetch(process.env.API_URL + '/task', {
    headers: { Authorization: `Bearer ${bearerToken}` },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return;
  }

  const { data } = await res.json();
  const jsonData = JSON.parse(data.data);

  return jsonData;
}
