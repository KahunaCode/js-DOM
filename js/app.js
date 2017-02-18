/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Replace the n/a with the following:

Tay-Tay*/
name1.innerHTML  = "Tay-Tay";


/*2. Replace the n/a with the following: 

Project Manager*/
position2.innerHTML = "Project Manager";


/*3. Replace the n/a with the following:

Concatenation*/
alias3.innerHTML = "Concatenation";


/*4. Replace the n/a for Snoop with the gangsta lorem ipsum*/
var profiles = document.getElementsByClassName('profile');
console.log(profiles);
profiles[0].innerHTML= "lorem etc gangsta"


/*5. Relace the n/a for Samuel L Jackson with his lorem ipsum*/
profiles[2].innerHTML = "lorem fkyouem hard"



/*6. Create a div element for Chuck Norris and give it an id of "name7". Inside this div element, give it the contents of "Chuck Norris".

Append this div element to the nameBox div*/
var divElement = document.createElement("div");
divElement.id = "name7";
divElement.innerHTML = "Chuck Norris";
nameBox.appendChild(divElement);
 

/*7. Create a div element for Grimmace and give it an id of "alias8". Inside this div element, give it the contents of "The Purple Monster".

Append this div element to the aliasBox div.*/
var divGrimmace = document.createElement("div");
divGrimmace.id = "alias8";
divGrimmace.innerHTML = "The Purple Monster";
aliasBox.appendChild(divGrimmace);



//Final Boss
/*8. Create your own profile.*/
var devs = document.getElementsByClassName("block3 col-sm-4");
console.log(devs[2]);
var jName = document.createElement("div");
jName.id = "name10";
jName.innerHTML = "James Moore";
devs[2].appendChild(jName);
var jPosition = document.createElement("div");
jPosition.id = "position10";
jPosition.innerHTML = "super Dev";
devs[2].appendChild(jPosition);
var jAlias = document.createElement("div");
jAlias.id = "alias10";
jAlias.innerHTML = "just james";
devs[2].appendChild(jAlias);
var jBio = document.createElement("div");
jBio.id = "bio10";
jBio.innerHTML = "python is cool but there are better ways to make webpages and therefore... i.js"
devs[2].appendChild(jBio);
