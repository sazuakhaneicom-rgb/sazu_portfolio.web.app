const apiKey = "AIzaSyDBldqwgRzAFnT2Z22Y_gJ_HbADspCPQH8";
const endpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;

fetch(endpoint, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: "freelancersazu03@gmail.com",
    password: "123456",
    returnSecureToken: true
  })
})
.then(res => res.json())
.then(data => {
  if (data.error) {
    console.error("Error creating user:", data.error.message);
  } else {
    console.log("User successfully created!", data.email);
  }
})
.catch(err => console.error("Fetch error:", err));
