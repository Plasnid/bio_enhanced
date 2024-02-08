/**
 * * an inventor
 * * steely eyed and brooding, silent and watchful
 * * name: Benjamin Desmond
 * * invents: machine that helps in curing eyes
 * * tragedy:  experimented on his own eye first, and it failed blinding him
 * * Allies:  His Mom Anabella
 * * Enemies: His evil twin Flower Child
 */

let mainCharacter = {
    charName: "Benjamin Desmond",
    age: 52,
    desc: "Steely eyed and brooding, silent and watchful",
    profession: "inventor",
    trusting: false,
    carries: ["hundred dollars in small coins", "banana", "eagles eye", "bleach"],
    workingEyes: 1,
    allies: ["Mama Anabella", "Juniper the Martian Sentient Berry"],
    enemies: ["Flower Child, brother of dooooooooooooooooooooooom", "Junipers Mom, Martian with Multi Eyes"],
    associates: [
        {name:"Mama Anabella", isEnemy:false}, 
        {name:"Juniper the Martian Sentient Berry", isEnemy: false},
        {name:"Flower Child, brother of dooooooooooooooooooooooom", isEnemy:true}, {name: "Junipers Mom, Martian with Multi Eyes", isEnemy: true}
    ],
    hobby: function(flowerName){
        console.log(`I like to grow ${flowerName}`);
    }
}
console.log(`His name was ${mainCharacter.charName}`);
console.log(`He walked with an odd limp, because of the ${mainCharacter.carries[0]} in his pocket`);

function conversation(character){
    //* say in console the characters name, then "praise the eye"
    console.log(`${character.charName} says 'praise the eye!'`);
    //* select an associate from the array at random
    let selectedAssociate = character.associates[Math.floor(Math.random()*character.associates.length)];
    console.log(selectedAssociate);
    // * say the associates name, then 
    console.log(selectedAssociate.name);
    // * if they are an ally they reply "make ugly faces at me"
    if(selectedAssociate.isEnemy==false){
        //* action
        console.log("make ugly faces at me!");
    }else{
        //* else if they are an enemy they reply "one big mac please"
        console.log("one big mac please");
    }
}

conversation(mainCharacter);