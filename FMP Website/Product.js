var firebaseConfig = {
    apiKey: "AIzaSyBnKXzEOkqPSWCDRPiEJqrmJLczIBG2zrw",
    authDomain: "ecomercewebsite-6be49.firebaseapp.com",
    databaseURL: "https://ecomercewebsite-6be49-default-rtdb.firebaseio.com",
    projectId: "ecomercewebsite-6be49",
    storageBucket: "ecomercewebsite-6be49.appspot.com",
    messagingSenderId: "1062303361888",
    appId: "1:1062303361888:web:0fe623049cdb51bd79cc05"
  }
// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
function getValue(){
    var inp = document.getElementById("productname")
    var inp1 = document.getElementById("productp")
    var inp2 = document.getElementById("producti")
    var obj = {
        name :productname.value,
        price :productp.value,
        image:producti.value
    }
    firebase.database().ref("std").once(
        )
    var key = Math.random()*3216544
    firebase.database().ref("std/" + Math.round(key)).set(obj)
    productname.value = ""
    productp.value = ""
    producti.value = ""
}
function abc(){
  var refernce = firebase.database.ref('std/' + Math.round(key))
 
}