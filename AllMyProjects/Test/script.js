function generateRandomPassword(length, options) {
    const defaults = {
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true,
        excludeSimilarCharacters: false,
        exclude: ''
    };

    const mergedOptions = { ...defaults, ...options };
    let characters = '';
    let password = '';

    if (mergedOptions.uppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (mergedOptions.lowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (mergedOptions.numbers) characters += '0123456789';
    if (mergedOptions.symbols) characters += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    if (mergedOptions.excludeSimilarCharacters) {
        characters = characters.replace(/[ilLI|`oO0]/g, '');
    }

    if (mergedOptions.exclude) {
        const excludeChars = mergedOptions.exclude.split('');
        excludeChars.forEach(char => {
            characters = characters.replace(char, '');
        });
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}

document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const passwordDisplay = document.getElementById('passwordDisplay');

    generateBtn.addEventListener('click', function() {
        const password = generateRandomPassword(12, { uppercase: true, lowercase: true, numbers: true, symbols: true });
        passwordDisplay.textContent = password;
    });
});
