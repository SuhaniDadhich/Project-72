import firebase from 'firebase'
require("@firebase/firestore")

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDqqf0dwBGWfnffClS0GLUVk6YAkPxBhHI",
    authDomain: "story-hub-project.firebaseapp.com",
    projectId: "story-hub-project",
    storageBucket: "story-hub-project.appspot.com",
    messagingSenderId: "155753796274",
    appId: "1:155753796274:web:3c87adf003f1d293982fab"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>

firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()  