// function inputfun() {
//     let input = parseInt(document.getElementById("inputValue").value);
//     let binary = "";

//     while (input > 0) {
//         binary = (input % 2) + binary;
//         input = Math.floor(input / 2);
//     }

//     document.getElementById("outPut").innerText = binary || "0";
//     return binary || "0";
// }
// Function to convert decimal to binary
function inputfun() {
    let input = parseInt(document.getElementById("inputValue").value);
    let binary = "";

    while (input > 0) {
        binary = (input % 2) + binary;
        input = Math.floor(input / 2);
    }

    document.getElementById("outPut").innerText = binary || "0";
}

// Event listener to detect "Enter" key press
document.getElementById("inputValue").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        inputfun(); // Call the inputfun() function when Enter is pressed
    }
});
