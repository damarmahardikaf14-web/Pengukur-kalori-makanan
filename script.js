// Database Nutrisi Sederhana (per 1 porsi standar)
const nutritionData = {
    'Nasi Putih': { calories: 204, protein: 4.3, fat: 0.4, carbs: 44.1, unit: 'mangkuk' },
    'Dada Ayam Panggang': { calories: 165, protein: 31, fat: 3.6, carbs: 0, unit: '100g' },
    'Telur Rebus': { calories: 77, protein: 6.3, fat: 5.3, carbs: 0.6, unit: 'butir' },
    'Pisang Cavendish': { calories: 105, protein: 1.3, fat: 0.3, carbs: 27, unit: 'buah sedang' },
    'Susu Segar (200ml)': { calories: 122, protein: 6.6, fat: 6.6, carbs: 9.6, unit: 'gelas' }
};

const foodSelect = document.getElementById('food-select');
const quantityInput = document.getElementById('quantity');
const totalCaloriesSpan = document.getElementById('total-calories');
const proteinSpan = document.getElementById('protein-val');
const fatSpan = document.getElementById('fat-val');
const carbsSpan = document.getElementById('carbs-val');

// 1. Mengisi opsi makanan ke dropdown saat halaman dimuat
Object.keys(nutritionData).forEach(foodName => {
    const option = document.createElement('option');
    option.value = foodName;
    option.textContent = foodName + ' (per 1 ' + nutritionData[foodName].unit + ')';
    foodSelect.appendChild(option);
});

// 2. Fungsi utama untuk menghitung
window.calculate = function() {
    const selectedFood = foodSelect.value;
    const quantity = parseFloat(quantityInput.value);

    if (!selectedFood || isNaN(quantity) || quantity <= 0) {
        alert('Mohon pilih makanan dan masukkan jumlah porsi yang valid.');
        return;
    }

    const data = nutritionData[selectedFood];

    // Perhitungan
    const totalCalories = data.calories * quantity;
    const protein = data.protein * quantity;
    const fat = data.fat * quantity;
    const carbs = data.carbs * quantity;

    // Menampilkan hasil
    totalCaloriesSpan.textContent = totalCalories.toFixed(1); // 1 angka di belakang koma

    // Menampilkan kandungan nutrisi untuk 1 porsi standar
    proteinSpan.textContent = data.protein.toFixed(1) + ' gram';
    fatSpan.textContent = data.fat.toFixed(1) + ' gram';
    carbsSpan.textContent = data.carbs.toFixed(1) + ' gram';

    // Tambahan: tampilkan detail nutrisi per porsi total di bawah Total Kalori (opsional)
    // Anda bisa menambahkan tampilan nutrisi total di sini jika diinginkan.
};
