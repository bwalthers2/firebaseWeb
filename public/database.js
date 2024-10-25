 // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyCVh8211DIf_Vhbt81UZ8C42sQD_KC0DqU",
        authDomain: "mebomborastaman.firebaseapp.com",
        databaseURL: "https://mebomborastaman.firebaseio.com",
        projectId: "mebomborastaman",
        storageBucket: "mebomborastaman.appspot.com",
        messagingSenderId: "153712567065",
        appId: "1:153712567065:web:33f23b69b3f950e40edb88"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Realtime Database and get a reference to the service
    const database = getDatabase(app);

