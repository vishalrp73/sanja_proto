export const angryReact = () => {

    const randNum = Math.floor(Math.random() * 3 - 0)
    console.log(randNum);

    const spooky = [
        `UNO 😡`,
        `DOS`,
        `TRES`
    ]

    alert(spooky[randNum]);
}