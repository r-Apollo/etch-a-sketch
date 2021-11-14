function create(size){
    const main = document.querySelector("#center")
    for(let i=0; i<size; i++){
        let row = document.createElement("div")
        row.classList.add("row")
        row.classList.add("tile")
        for(let j=0; j<size; j++){
            tile = document.createElement("div")
            tile.classList.add("tile")
            row.appendChild(tile)
        }
        main.appendChild(row)
    }
}

function colorize(){
    const tiles = document.querySelectorAll(".tile")
    tiles.forEach((tile) => {
    tile.addEventListener("mouseover", () =>{
        tile.classList.add("colored")
    })
})}


create(16)
colorize()


function clear(){
    const parent = document.querySelector("#center");
    while(parent.lastChild){
        parent.removeChild(parent.lastChild)
    }
    let userInput = prompt("Ammount of tiles per row: ")
    create(userInput)
    colorize()
}

const btn = document.querySelector("#btn")
btn.addEventListener("click", () => {
    clear()
})
