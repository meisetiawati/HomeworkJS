function jenisBBM(plat, cc) {
    if (plat === "kuning" || plat === "motor") return "BBM subsidi";
    if (cc < 1500) return "PERTAMAX";
    return "PERTAMAX turbo";
    }

    // Contoh penggunaan fungsi dengan jenis plat dan CC mesin
    console.log(jenisBBM("kuning", 1000)); // Output: "BBM subsidi"
    console.log(jenisBBM("motor", 200)); // Output: "BBM subsidi"
    console.log(jenisBBM("mobil", 1100)); // Output: "PERTAMAX"
    console.log(jenisBBM("mobil", 1700)); // Output: "PERTAMAX turbo"