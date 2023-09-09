const kondisiAir = (suhu) => {
    if (suhu >= -100 && suhu <= 0) return "Air berada dalam keadaan beku";
    if (suhu >= 1 && suhu <= 100) return "Air berada dalam keadaan cair"; 
    if (suhu >= 101 && suhu <= 500) return "Air berada dalam keadaan uap";
    return "Suhu air tidak terdefinisi";
};

// Contoh penggunaan fungsi dengan suhu tertentu

console.log(kondisiAir(-30)); // Output: "Air berada dalam keadaan beku"
console.log(kondisiAir(50)); // Output: "Air berada dalam keadaan cair"
console.log(kondisiAir(200)); // Output: "Air berada dalam keadaan uap"
console.log(kondisiAir(700)); // Output: "Suhu air tidak terdefinisi"