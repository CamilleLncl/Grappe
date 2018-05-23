
function validate (form){
    console.log('GOOD JOB');
var identifiant = document.getElementById("username").value;
	//var identifiant = form.username.value;
	console.log(identifiant);

var mdp = document.getElementById("password");

if ( identifiant == null && mdp == null){
alert ("Login successfully");


}
else{
	console.log("mieux");
}
};


//validate();