//Functions

const statement = (inc, exp) =>{
     return inc - exp 
}


const newBlock = (m, i, e, s)=>{
    let newDiv = document.createElement("div")
    newDiv.classList.add("results")
    newDiv.id = m

    let h2 = document.createElement("h2")
    h2.textContent = "Breakdown"

    let mnth = document.createElement("p")
    mnth.textContent = `Month: ${m}`

    let inc = document.createElement("p")
    inc.textContent = `Income: ${i}$`

    let exp = document.createElement("p")
    exp.textContent = `Expenditures: ${e}$`

    let sav = document.createElement("p")
    sav.textContent = `You saved: ${s}$`
    sav.classList.add("uSaved")
    
    newDiv.append(h2, mnth, inc, exp, sav)
    document.querySelector(".results-container").appendChild(newDiv)
}

const color = (cash) =>{
    if (cash <= 0){
        cash = document.querySelector(".results-container .uSaved")
        cash.style.color = "red"
    }
}



