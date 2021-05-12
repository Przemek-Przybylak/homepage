{
    const mainButton = document.querySelector(".js-main__button");
    const sectionButton = document.querySelector(".js-section__button");

    const hello = () => {
        console.log("hello!")
    }

    const onHidingPicture = () => {
        const headerPicture = document.querySelector(".js-section__picture");
        const pictureNone = document.querySelector(".pictureNone");
        const deleteText = ('Usuń moje zdjęcie');
        const showPicture = ("Pokaż moje zdjęcie");

        headerPicture.classList.toggle("pictureNone");
        sectionButton.innerText = sectionButton.innerText === deleteText ? showPicture : deleteText;
    };

    const onBackgroundChange = () => {
        const secondBackground = document.querySelector(".secondBackground");
        const container = document.querySelector(".container");
        const changeButton = ("Zmień kolor tła");
        const returnButton = ("Przywróć pierwotne tło");

        container.classList.toggle("secondBackground");
        mainButton.innerText = mainButton.innerText === changeButton ? returnButton : changeButton;
    }

    const init = () => {
        hello();
        sectionButton.addEventListener("click", onHidingPicture);
        mainButton.addEventListener("click", onBackgroundChange);
    }
    init();
}
