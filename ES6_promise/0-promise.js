function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulamos una operación asincrónica, como una solicitud a una API
    setTimeout(() => {
      // Supongamos que hemos recibido una respuesta exitosa de la API
      const data = { message: 'Respuesta de la API' };
      resolve(data);// Resolvemos la promesa con los datos
    }, 2000); // Simulamos un retraso de 2 segundos
  });
}

export default getResponseFromAPI;
