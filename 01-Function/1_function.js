//* Function Regular
function convertCelsiusToFahrenheit(temperature) {
    const temperatureInFahrenheit = (temperature * 9 / 5) + 32;

    console.log('Hasil konversi: ' + temperatureInFahrenheit);
}
const temperatureInCelsius = 40;

// Akan menjalankan isi function
convertCelsiusToFahrenheit(temperatureInCelsius);

// Hanya menampilkan nilai function
// console.log(convertCelsiusToFahrenheit);


// function convertCelsiusToFahrenheit2(temperature) {
//     if (temperature !== undefined) {// <-- conditional statement (perintah kondisional)
//         const temperatureInFahrenheit2 = (temperature * 9 / 5) + 32;
//         console.log('Hasil konversi: ' + temperatureInFahrenheit2);
//     }

//     return temperatureInFahrenheit;
// }

// Function dengan default parameter (= 50)
function convertCelsiusToFahrenheit2(temperature = 50) {
    const temperatureInFahrenheit2 = (temperature * 9 / 5) + 32;

    console.log('Hasil konversi: ' + temperatureInFahrenheit2);
}
convertCelsiusToFahrenheit2();