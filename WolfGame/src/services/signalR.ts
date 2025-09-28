import * as signalR from "@microsoft/signalr";

const connection = new signalR.HubConnectionBuilder()
  // .withUrl("https://wolfgamebackend.onrender.com/roomhub")
  .withUrl("https://localhost:7206/roomhub", {
    withCredentials: true,
  })
  .withAutomaticReconnect()
  .build();


export async function connect(username: string) {
  try {
    await connection.start(); //inicia la conexión
    console.log("Conexión establecida con el servidor");

    // ahora registramos el usuario
    const response = await connection.invoke("RegisterUser", username);
    console.log("Respuesta del servidor:", response);

    if (response.statusCode !== 200) {
      alert(`Error: ${response.message}`);
      return response.message
    }
    return ""

  } catch (err) {
    console.error("Error al conectar:", err);
    const error = "No se pudo conectar al servidor. Inténtalo más tarde."
    alert({error});
    return error
  }
}

export async function Test() {
  const response = await fetch("https://localhost:7206/Requena");
  // const response = await fetch("https://wolfgamebackend.onrender.com/Requena");

  if (!response.ok) {
    throw new Error("Error en la petición " + response.status);
  }

  const data = await response.text();
  return data;
}
