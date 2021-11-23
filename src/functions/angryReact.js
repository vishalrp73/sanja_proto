export const angryReact = () => {

    const randNum = Math.floor(Math.random() * 3 - 0)
    console.log(randNum);

    const spooky = [
        `THIS ISN'T READY YET MF STOP CLICKING ON THINGS 😡`,
        `YOU DESIGNED THIS CLICK TO NOWHERE THAT'S UR FAULT`,
        `THERE'S NOTHING THERE DON'T CLICK THERE`
    ]

    alert(spooky[randNum]);
}