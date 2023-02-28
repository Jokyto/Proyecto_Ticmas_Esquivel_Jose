let expandir_idiomas_btn = document.getElementById("idiomas_expandir_btn")
expandir_idiomas_btn.addEventListener("click", () =>{
    let idiomas_div = document.getElementById("idiomas_div")
    let contraer_idiomas_btn = document.getElementById("idiomas_contraer_btn")

    expandir_idiomas_btn.classList.add("d-none")
    expandir_idiomas_btn.classList.remove("d-block")
    idiomas_div.classList.remove("d-none")
    idiomas_div.classList.add("d-block")
    contraer_idiomas_btn.classList.remove("d-none")
    contraer_idiomas_btn.classList.add("d-block")
    
})

let contraer_idiomas_btn = document.getElementById("idiomas_contraer_btn")
contraer_idiomas_btn.addEventListener("click", () =>{
    let idiomas_div = document.getElementById("idiomas_div")
    let expandir_idiomas_btn = document.getElementById("idiomas_expandir_btn")

    contraer_idiomas_btn.classList.add("d-none")
    idiomas_div.classList.add("d-none")
    expandir_idiomas_btn.classList.add("d-block")
    expandir_idiomas_btn.classList.remove("d-none")
    contraer_idiomas_btn.classList.remove("d-block")
    idiomas_div.classList.remove("d-block")
})

let expandir_aptitudes_btn = document.getElementById("aptitudes_expandir_btn")
expandir_aptitudes_btn.addEventListener("click", () =>{
    let aptitudes_div = document.getElementById("aptitudes_div")
    let contraer_aptitudes_btn = document.getElementById("aptitudes_contraer_btn")

    expandir_aptitudes_btn.classList.add("d-none")
    expandir_aptitudes_btn.classList.remove("d-block")
    aptitudes_div.classList.remove("d-none")
    aptitudes_div.classList.add("d-block")
    contraer_aptitudes_btn.classList.remove("d-none")
    contraer_aptitudes_btn.classList.add("d-block")
})

let contraer_aptitudes_btn = document.getElementById("aptitudes_contraer_btn")
contraer_aptitudes_btn.addEventListener("click", () =>{
    let aptitudes_div = document.getElementById("aptitudes_div")
    let expandir_aptitudes_btn = document.getElementById("aptitudes_expandir_btn")

    contraer_aptitudes_btn.classList.add("d-none")
    aptitudes_div.classList.add("d-none")
    expandir_aptitudes_btn.classList.add("d-block")
    expandir_aptitudes_btn.classList.remove("d-none")
    contraer_aptitudes_btn.classList.remove("d-block")
    aptitudes_div.classList.remove("d-block")
})