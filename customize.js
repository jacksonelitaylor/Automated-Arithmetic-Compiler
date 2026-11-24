const numKeys = [
    document.getElementById('one'),
    document.getElementById('two'),
    document.getElementById('three'),
    document.getElementById('four'),
    document.getElementById('five'),
    document.getElementById('six'),
    document.getElementById('seven'),
    document.getElementById('eight'),
    document.getElementById('nine'),
    document.getElementById('zero')
];
const secondaryKeys = [
    document.getElementById('decimal'),
    document.getElementById('squareRoot'),
    document.getElementById('exponent'),
    document.getElementById('divide'),
    document.getElementById('plus'),
    document.getElementById('minus'),
    document.getElementById('times'),
    document.getElementById('negative'),
    document.getElementById('clear')
];

const tertiaryKeys = document.getElementById('solve');
const calcBackground = document.getElementById('calcBackground');
const backgroundColorInput = document.getElementById('backgroundColorAAC');
const keysColorInput = document.getElementById('keysColorAAC');
const secondaryColorInput = document.getElementById('secondaryColorAAC');
const tertiaryColorInput = document.getElementById('tertiaryColorAAC');

function updateColors() {
    calcBackground.style.backgroundColor = backgroundColorInput.value;
    numKeys.forEach(key => {
        key.style.backgroundColor = keysColorInput.value;
    });
    secondaryKeys.forEach(key => {
        key.style.backgroundColor = secondaryColorInput.value;
    });
    tertiaryKeys.style.backgroundColor = tertiaryColorInput.value;
}

backgroundColorInput.addEventListener('input', updateColors);
keysColorInput.addEventListener('input', updateColors);
secondaryColorInput.addEventListener('input', updateColors);
tertiaryColorInput.addEventListener('input', updateColors);

updateColors();
document.getElementById('reset').addEventListener('click', function() {
    backgroundColorInput.value = '#ffffff';
    keysColorInput.value = '#ffffff';
    secondaryColorInput.value = '#b6b6b6';
    tertiaryColorInput.value = '#eaeaea';
    updateColors();
});
document.getElementById('save').addEventListener('click', function() {
    const preferences = {
        backgroundColor: backgroundColorInput.value,
        keysColor: keysColorInput.value,
        secondaryColor: secondaryColorInput.value,
        tertiaryColor: tertiaryColorInput.value
    };
    localStorage.setItem('aacPreferences', JSON.stringify(preferences));
});

window.addEventListener('load', function() {
    const savedPreferences = JSON.parse(localStorage.getItem('aacPreferences'));
    if (savedPreferences) {
        backgroundColorInput.value = savedPreferences.backgroundColor;
        keysColorInput.value = savedPreferences.keysColor;
        secondaryColorInput.value = savedPreferences.secondaryColor;
        tertiaryColorInput.value = savedPreferences.tertiaryColor;
        updateColors();
    }
});