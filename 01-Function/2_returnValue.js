// Selain ada data yang masuk, function juga bisa mengeluarkan nilai, lo.Ini kita sebut sebagai return value.
// Program dalam function akan terhenti jika eksekusi kode sudah mencapai return statement.
// JavaScript akan menganggap program function sudah selesai jika statement ini sudah dibaca.

function generateGreetingWorldMessage() {
    return 'Hello, World!';
    console.log('Aku tidak akan tampil!');
}

const message = generateGreetingWorldMessage();
console.log(message);


// Mengembalikan suatu nilai dari hasil proses yang berjalan dan menyimpannya ke variabel.
function convertCelsiusToFahrenheit(temperature) {
    const result = (temperature * 9 / 5) + 32;
    return result;
}

const temperatureInFahrenheit = convertCelsiusToFahrenheit(90);
console.log('Hasil konversi:', temperatureInFahrenheit);