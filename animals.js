animalsMap= new Map();
let counter=0;

function addNewAnimal() {
    let animalName=document.getElementById("animalname").value;
    let animalHabitat=document.getElementById("habitat").value;
    let animalDiet=document.getElementById("diet").value; 

    animalsMap.set(animalName,{habitat:animalHabitat,diet:animalDiet}); 
    alert(animalName+"animal  registered to map");
    displayAnimals()
}




function displayAnimals() {
    let table = document.getElementById("animalsTable");
    
    // Clear previous rows except for the header
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    
    animalsMap.forEach(function(value, key) {
        let row = table.insertRow(-1); // Add a new row at the end
        
        let cell1 = row.insertCell(0); // Animal cell
        let cell2 = row.insertCell(1); // Habitat cell
        let cell3 = row.insertCell(2); // Diet cell
        
        cell1.textContent = key.toUpperCase();
        cell2.textContent = value.habitat.toUpperCase();
        cell3.textContent = value.diet.toUpperCase();
    });
}
