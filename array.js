// Fungsi untuk mengisi array dengan 100 nilai acak antara 1 dan 50
function ArrayRandom() {
    const array = [];
    for (let i = 0; i < 100; i++) {
        array.push(Math.floor(Math.random() * 50) + 1);
    }
    return array;
}


// Fungsi untuk memecah array menjadi array genap dan ganjil
function pecahArray(array) {
    const arrayGenap = [];
    const arrayGanjil = [];
    for (let i = 0; i < array.length; i++) {
        if ( i % 2 === 0) {
            arrayGenap.push(array[i]);
        } else {
            arrayGanjil.push(array[i]);
        }
    }
    return [arrayGenap, arrayGanjil];
}


// Fungsi untuk menghitung nilai minimum
function hitungMin(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}


// Fungsi untuk menghitung nilai maksimum
function hitungMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}


// Fungsi untuk menghitung total
function hitungTotal(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}


// Fungsi untuk menghitung rata-rata
function hitungRataRata(array) {
    const total = hitungTotal(array);
    const rataRata = total / array.length;
    return parseFloat(rataRata.toFixed(2));
}


// Mengisi array dengan nilai acak
const arrayRandom = ArrayRandom();


// Membagi array menjadi genap dan ganjil
const [arrayGenap, arrayGanjil] = pecahArray(arrayRandom);


// Menghitung min, max, total, dan rata-rata pada array genap dan ganjil
const minGenap = hitungMin(arrayGenap);
const maxGenap = hitungMax(arrayGenap);
const totalGenap = hitungTotal(arrayGenap);
const rataRataGenap = hitungRataRata(arrayGenap);
const minGanjil = hitungMin(arrayGanjil);
const maxGanjil = hitungMax(arrayGanjil);
const totalGanjil = hitungTotal(arrayGanjil);
const rataRataGanjil = hitungRataRata(arrayGanjil);


// Menampilkan hasil
console.log("Array dengan jumlah index 100:", arrayRandom);
console.log("Array genap dengan jumlah index 50:", arrayGenap);
console.log("Array ganjil dengan jumlah index 50:", arrayGanjil);
console.log("Min, Max, Total, Rata-rata pada array genap:");
console.log("Min:", minGenap);
console.log("Max:", maxGenap);
console.log("Total:", totalGenap);
console.log("Rata-rata:", rataRataGenap);
console.log("Min, Max, Total, Rata-rata pada array ganjil:");
console.log("Min:", minGanjil);
console.log("Max:", maxGanjil);
console.log("Total:", totalGanjil);
console.log("Rata-rata:", rataRataGanjil);


// Perbandingan nilai
if (minGenap > minGanjil) {
    console.log("Min lebih besar pada array genap");
} else if (minGenap < minGanjil) {
    console.log("Min lebih besar pada array ganjil");
} else {
    console.log("Min memiliki nilai sama antara array genap dan ganjil");
}
if (maxGenap > maxGanjil) {
    console.log("Max lebih besar pada array genap");
} else if (maxGenap < maxGanjil) {
    console.log("Max lebih besar pada array ganjil");
} else {
    console.log("Max memiliki nilai sama antara array genap dan ganjil");
}
if (totalGenap > totalGanjil) {
    console.log("Total lebih besar pada array genap");
} else if (totalGenap < totalGanjil) {
    console.log("Total lebih besar pada array ganjil");
} else {
    console.log("Total memiliki nilai sama antara array genap dan ganjil");
}
if (rataRataGenap > rataRataGanjil) {
    console.log("Rata-rata lebih besar pada array genap");
} else if (rataRataGenap < rataRataGanjil) {
    console.log("Rata-rata lebih besar pada array ganjil");
} else {
    console.log("Rata-rata memiliki nilai sama antara array genap dan ganjil");
}