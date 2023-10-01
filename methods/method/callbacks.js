function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous operation (e.g., fetching data)
      setTimeout(() => {
        const data = { message: 'Data fetched successfully' };
        resolve(data);
      }, 1000);
    });
  }
  
  fetchData()
    .then((data) => {
      console.log(data.message);
      return 'Additional data';
    })
    .then((additionalData) => {
      console.log(additionalData);
    })
    .catch((error) => {
      console.error(error);
    });

// fetch is used to get data