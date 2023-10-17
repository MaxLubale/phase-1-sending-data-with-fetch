// Add your code here
function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    const data = { name, email };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    };
    return fetch(url, options)
      .then(response => response.json())
      .then(data => {
        document.body.innerHTML += data.id;
      })
      .catch(error => {
        document.body.innerHTML += error.message;
      });
  }

