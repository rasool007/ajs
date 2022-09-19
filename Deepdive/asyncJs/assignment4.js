console.log("This is the JS for assignment 4");

const listOfMatchingInputs = document.querySelectorAll('input[data-ns-test="prices"]');
let totalPrice = 0;
// console.log(listOfMatchingInputs);
for(matchingInput of listOfMatchingInputs) {
    // console.log(matchingInput.value);
    totalPrice+= Number(matchingInput.value);
    matchingInput.addEventListener('change', calculateSum)
}
let totalRow = document.createElement('tr');
totalRow.innerHTML = `<td>Total</td>
            <td id = "totalValue" data-ns-test="grandTotal">${totalPrice}</td>`
document.getElementById('priceTable').append(totalRow); 

function calculateSum() { // with input logic
    totalPrice = 0;
    for(matchingInput of listOfMatchingInputs) {
        totalPrice+= Number(matchingInput.value);
    }
    document.getElementById('totalValue').innerHTML = totalPrice;         
}
