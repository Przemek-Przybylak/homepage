console.log("hello!");

let section__button = document.querySelector(".js-section__button");
let headerPicture = document.querySelector(".js-section__picture");
let pictureNone = document.querySelector(".pictureNone");
let deleteText = ('Usuń moje zdjęcie');
let showPicture = ("Pokaż moje zdjęcie");

section__button.addEventListener("click", () => {
    headerPicture.classList.toggle("pictureNone");

    section__button.innerText = section__button.innerText === deleteText ? showPicture : deleteText;

});

let secondBackground = document.querySelector(".secondBackground");
let main__button = document.querySelector(".js-main__button");
let container = document.querySelector(".container");
let changeButton = ("Zmień kolor tła");
let returnButton = ("Przywróć pierwotne tło");

main__button.addEventListener("click", () => {
    container.classList.toggle("secondBackground");

    main__button.innerText = main__button.innerText === changeButton ? returnButton : changeButton;


});

