document.addEventListener('DOMContentLoaded', function() {
    const celciusInput = document.getElementById('main-input');
    const resultInput = document.getElementById('main-result');
    const caraKonversiInput = document.getElementById('cara-konversi');
    const convertButton = document.getElementById('convertButton');
    const resetButton = document.getElementById('resetButton');
    const reverseButton = document.getElementById('reverseButton');
    const konversiLabel = document.querySelector("label[for='main-input']");
    const hasilLabel = document.querySelector("label[for='main-result']");
    const konversiLink = document.getElementById('konversi-link');
    
    let resetClickCount = 0;
    let resetTimer;
    let isCelciusToFahrenheit = true;

    function updateKonversiUI() {
        if (isCelciusToFahrenheit) {
            konversiLabel.textContent = 'Celcius (°C)';
            hasilLabel.textContent = 'Fahrenheit (°F)';
            celciusInput.placeholder = 'Masukkan suhu dalam Celcius';
            resultInput.placeholder = 'Hasil konversi ke Fahrenheit';
            konversiLink.textContent = 'Konversi Celcius ke Fahrenheit';
        } else {
            konversiLabel.textContent = 'Fahrenheit (°F)';
            hasilLabel.textContent = 'Celcius (°C)';
            celciusInput.placeholder = 'Masukkan suhu dalam Fahrenheit';
            resultInput.placeholder = 'Hasil konversi ke Celcius';
            konversiLink.textContent = 'Konversi Fahrenheit ke Celcius';
        }
    }

    convertButton.addEventListener('click', function() {
        if (isCelciusToFahrenheit) {
            const celcius = parseFloat(celciusInput.value);
            if (!isNaN(celcius)) {
                const fahrenheit = (celcius * 9/5) + 32;
                resultInput.value = fahrenheit.toFixed(2);
                caraKonversiInput.value = `(${celcius}°C * 9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
            } else {
                alert('Masukkan suhu yang valid dalam Celcius >_<');
            }
        } else {
            const fahrenheit = parseFloat(celciusInput.value);
            if (!isNaN(fahrenheit)) {
                const celcius = (fahrenheit - 32) * 5/9;
                resultInput.value = celcius.toFixed(2);
                caraKonversiInput.value = `(${fahrenheit}°F - 32) * 5/9 = ${celcius.toFixed(2)}°C`;
            } else {
                alert('Masukkan suhu yang valid dalam Fahrenheit >_<');
            }
        }
    });

    resetButton.addEventListener('click', function() {
        celciusInput.value = '';
        resultInput.value = '';
        caraKonversiInput.value = '';
        if (!isCelciusToFahrenheit) {
            isCelciusToFahrenheit = true;
            updateKonversiUI();
        }
        resetClickCount++;
        if (resetClickCount === 5) {
            alert('udah bang🗿');
            resetClickCount = 0;
            clearTimeout(resetTimer);
        }
        if (resetClickCount === 1) {
            resetTimer = setTimeout(function() {
                resetClickCount = 0;
            }, 1000);
        }
    });

    reverseButton.addEventListener('click', function() {
        isCelciusToFahrenheit = !isCelciusToFahrenheit;
        updateKonversiUI();

        const temp = celciusInput.value;
        celciusInput.value = resultInput.value;
        resultInput.value = temp;

        if (isCelciusToFahrenheit) {
            const celcius = parseFloat(celciusInput.value);
            if (!isNaN(celcius)) {
                const fahrenheit = (celcius * 9/5) + 32;
                caraKonversiInput.value = `(${celcius}°C * 9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
            } else {
                caraKonversiInput.value = '';
            }
        } else {
            const fahrenheit = parseFloat(celciusInput.value);
            if (!isNaN(fahrenheit)) {
                const celcius = (fahrenheit - 32) * 5/9;
                caraKonversiInput.value = `(${fahrenheit}°F - 32) * 5/9 = ${celcius.toFixed(2)}°C`;
            } else {
                caraKonversiInput.value = '';
            }
        }
    });

    updateKonversiUI();
});
