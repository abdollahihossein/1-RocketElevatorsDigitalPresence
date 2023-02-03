const residential_input = document.getElementById('residential-input')
const commercial_input = document.getElementById('commercial-input')
const industrial_input = document.getElementById('industrial-input')

const elevators_output = document.getElementById('elevators-output')
const unit_price = document.getElementById('unit-price')
const fees = document.getElementById('fees')
const final_cost = document.getElementById('final-cost')

const button_building_type = document.getElementById('building_type')
const button_sevice_type = document.getElementById('sevice_type')

let flag

let numberOfApartments
let numberOfFloors
let numberOfBanks
let numberOfApartPerFloor
let numberOfElevators
let maxOccupancyPerFloor
let numberOfOccupant

let unitPrice
let percentage
let installationFee
let finalCost

button_building_type.addEventListener('click', () => {
    showFields()
    emptyFields()
    unselect()
})

button_sevice_type.addEventListener('click', () => {
    tierSelection()
    if (document.getElementById('residential').checked) {
        numberOfApartments = document.getElementById('apartments-input').value
        numberOfFloors = document.getElementById('floors-input-residential').value
        if ((numberOfApartments <= 0) || (numberOfFloors <=0)) {
            alert("The input has to be positive!")
            flag = 0
        }
        else {
            numberOfBanks = Math.ceil(numberOfFloors/20)
            numberOfApartPerFloor = Math.ceil(numberOfApartments/numberOfFloors)
            numberOfElevators = numberOfBanks * Math.ceil(numberOfApartPerFloor/6)
            flag = 1
        }
    }
    else if (document.getElementById('commercial').checked) {
        numberOfFloors = document.getElementById('floors-input-commercial').value
        maxOccupancyPerFloor = document.getElementById('occupancy-input').value
        if ((numberOfFloors <= 0) || (maxOccupancyPerFloor <=0)) {
            alert("The input has to be positive!")
            flag = 0
        }
        else {
            numberOfOccupant = numberOfFloors * maxOccupancyPerFloor
            numberOfBanks = Math.ceil(numberOfFloors/10)
            numberOfElevators = numberOfBanks * (1 + Math.ceil(numberOfOccupant/200))
            flag = 1
        }
    }
    else if (document.getElementById('industrial').checked) {
        numberOfElevators = document.getElementById('elevators-input').value
        if (numberOfElevators <=0) {
            alert("The input has to be positive!")
            flag = 0
        }
        else {
            flag = 1
        }
    }
    if (flag == 1) {
        installationFee = percentage * numberOfElevators * unitPrice
        finalCost = installationFee + numberOfElevators * unitPrice
        elevators_output.value = numberOfElevators
        unit_price.value = unitPrice.toLocaleString("en-US",formatting_options)
        fees.value = installationFee.toLocaleString("en-US",formatting_options)
        final_cost.value = finalCost.toLocaleString("en-US",formatting_options)
    }
    else {
        elevators_output.value = ""
        unit_price.value = ""
        fees.value = ""
        final_cost.value = ""
    }
    
})

let formatting_options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
 }
//-------------------------------------------------------------------------------------------------------------------------------------
function showFields() {
    if(document.getElementById('residential').checked) {
        residential_input.style.display = 'block'
        commercial_input.style.display = 'none'
        industrial_input.style.display = 'none'
    }
    else if(document.getElementById('commercial').checked) {
        residential_input.style.display = 'none'
        commercial_input.style.display = 'block'
        industrial_input.style.display = 'none'
    }
    else if(document.getElementById('industrial').checked) {
        residential_input.style.display = 'none'
        commercial_input.style.display = 'none'
        industrial_input.style.display = 'block'
    }
}

function emptyFields() {
    document.getElementById('apartments-input').value = ""
    document.getElementById('floors-input-residential').value = ""
    document.getElementById('floors-input-commercial').value = ""
    document.getElementById('occupancy-input').value = ""
    document.getElementById('elevators-input').value = ""
    elevators_output.value = ""
    unit_price.value = ""
    fees.value = ""
    final_cost.value = ""
}

function unselect() {
    document.getElementById('standard').checked = false
    document.getElementById('premium').checked = false
    document.getElementById('excelium').checked = false
}

function tierSelection() {
    if(document.getElementById('standard').checked) {
        unitPrice = 8000
        percentage = 0.1
    }
    else if(document.getElementById('premium').checked) {
        unitPrice = 12000
        percentage = 0.15
    }
    else if(document.getElementById('excelium').checked) {
        unitPrice = 15000
        percentage = 0.2
    }
}