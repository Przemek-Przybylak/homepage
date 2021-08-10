{
    const mainButton = document.querySelector(".js-main__button");

    const hello = () => {
        console.log("hello!")
    }

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
        mainButton.addEventListener("click", onBackgroundChange);
    }
    init();
}
