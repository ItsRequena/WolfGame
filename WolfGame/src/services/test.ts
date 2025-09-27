export async function Test() {
  const response = await fetch("https://wolfgamebackend.onrender.com/Requena");

  if (!response.ok) {
    throw new Error("Error en la petición " + response.status);
  }

  const data = await response.text();
  return data;
}
