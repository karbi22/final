function cerrarsesion(){
 firebase.auth().signOut()
 .then(function(){
     window.location='index.html'
 })
 .catch({
     
 })

}