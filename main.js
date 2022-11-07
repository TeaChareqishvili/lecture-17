

const sectionBtn = document.querySelector(".btn");

sectionBtn.addEventListener('click', clickOn);

function clickOn(){
   sectionBtn.remove();
}



const body = document.querySelector("body");
const image = document.createElement("img");
image.setAttribute('src', "https://picsum.photos/id/1/200/300");
image.classList.add("first-img");
// body.appendChild(image);


const characters = [
	{
		first_name: "Harry",
		last_name: "Potter",
		house: "Gryffindor",
		image: "https://hp-api.herokuapp.com/images/harry.jpg",
		actor: "Daniel Radcliffe",
	},
	{
		first_name: "Hermione",
		last_name: "Granger",
		house: "Gryffindor",
		image: "https://hp-api.herokuapp.com/images/hermione.jpeg",
		actor: "Emma Watson",
	},
	{
		first_name: "Ron",
		last_name: "Weasley",
		house: "Gryffindor",
		image: "https://hp-api.herokuapp.com/images/ron.jpg",
		actor: "Rupert Grint",
	},
	{
		first_name: "Draco",
		last_name: "Malfoy",
		house: "Slytherin",
		image: "https://hp-api.herokuapp.com/images/draco.jpg",
		actor: "Tom Felton",
	},
];



const mainDiv = document.getElementById("characters-list");

function renderCharacters(arr) {
	const renderedCards = characters.map((char) => {
		return `
			
              <div class="char-names">
              <div class="names">
                <h2>
                   ${char.first_name}  ${char.last_name}
                </h2>
                <p>
                  House: ${char.house}
                </p>
                <h3 class="actor-name">${char.actor}</h3>
                <button class="dlt-btn">Delete</button>
                <button class="info-btn">Info</button>
                </div>
				<img class="char-img" src="${char.image}"  alt="${char.first_name}"/>
             </div>
			
		`;
	});
    mainDiv.innerHTML = renderedCards.join("");
}

renderCharacters();



const deleteButton = document.querySelectorAll(".dlt-btn");
const infoButton = document.querySelectorAll(".info-btn");


const charNames = document.querySelector(".names");


deleteButton.forEach((btn) => {
    btn.addEventListener("click", () => {
       
        btn.closest(".char-names").remove();
    });
});

infoButton.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        // console.log(btn);

        btn.parentElement
            .querySelector(".actor-name")
            .classList.toggle("active");
    });
});



