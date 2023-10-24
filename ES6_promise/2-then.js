function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch(() => {
      console.error('The fake API is not working currently');
      return new Error();
    });
}

export default handleResponseFromAPI;
