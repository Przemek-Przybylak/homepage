{
    const hello = () => {
        console.log("hello!")
    }

    const onsection__button = () => {
        const section__buttonInner = document.querySelector(".js-section__buttonInner");
        const headerPicture = document.querySelector(".js-section__picture");
        const pictureNone = document.querySelector(".pictureNone");
        const deleteText = ('Usuń moje zdjęcie');
        const showPicture = ("Pokaż moje zdjęcie");

        headerPicture.classList.toggle("pictureNone");
        section__buttonInner.innerText = section__buttonInner.innerText === deleteText ? showPicture : deleteText;
    };

    const onmain__button = () => {
        const secondBackground = document.querySelector(".secondBackground");
        const main__buttonInner = document.querySelector(".js-main__buttonInner")
        const container = document.querySelector(".container");
        const changeButton = ("Zmień kolor tła");
        const returnButton = ("Przywróć pierwotne tło");

        container.classList.toggle("secondBackground");
        main__buttonInner.innerText = main__buttonInner.innerText === changeButton ? returnButton : changeButton;
    }

    const init = () => {
        const main__button = document.querySelector(".js-main__button");
        const section__button = document.querySelector(".js-section__button");

        hello();
        section__button.addEventListener("click", onsection__button);
        main__button.addEventListener("click", onmain__button);
    }
    init();
}
