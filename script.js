const input = document.querySelector("#inc-form")
input.addEventListener("submit", (e)=>{
    e.preventDefault()
    const income = e.target.elements.income.value
    const expenditures = e.target.elements.expenditures.value
    const month = e.target.elements.months.value

    const sum = statement(income, expenditures)

if (!income || !expenditures || !month){
    alert("Please fill in all fields and select month")

} else{
        newBlock(month, income, expenditures, sum)
        color(sum)
        e.target.elements.income.value = ""
        e.target.elements.expenditures.value = ""
        e.target.elements.months.value = ""        
        }
})

