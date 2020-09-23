// cours
(function(){
    let cardField = document.querySelector(".card-field");
    let submitButton = document.querySelector(".submit-info");
    let userValue = document.querySelector(".user-input");
    let courseValue = document.querySelector(".course-input")
    let authorValue = document.querySelector(".author-input")
    let pictureArray = ["cust0.jpg", "cust1.jpg", "cust2.jpg", "cust3.jpg", "cust4.jpg",];

    submitButton.addEventListener("click", function(){
       let card = document.createElement("div");
       card.classList.add("card", "total-card");
       cardField.appendChild(card)

       let imageCard = document.createElement("img");
       imageCard.classList.add("class-img-top", "image-card")
       let grabRandomImages = Math.floor(Math.random() * pictureArray.length)
       imageCard.src = "./img/" + pictureArray[grabRandomImages];
       card.appendChild(imageCard);

       let cardBody = document.createElement("div");
       cardBody.classList.add("card-body", "card-body-only");
       card.appendChild(cardBody);

       let nameText = document.createElement("p");
       let nameValue = document.createTextNode(`Name: ${userValue.value}`);
       nameText.appendChild(nameValue);
       nameText.classList.add("nameInput");
       cardBody.appendChild(nameText);

       let courseText = document.createElement("p");
       let courseValueText = document.createTextNode(`Course: ${courseValue.value}`);
       courseText.appendChild(courseValueText);
       courseText.classList.add("courseInput");
       cardBody.appendChild(courseText);

       let authorText = document.createElement("p");
       let authorValueText = document.createTextNode(`Author: ${authorValue.value}`);
       authorText.appendChild(authorValueText);
       authorText.classList.add("authorInput");
       cardBody.appendChild(authorText);    

        userValue.value = "";
        courseValue.value = "";
        authorValue.value = ""

    })
})();