document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const searchOption = document.getElementById('search-option');
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('results-container');

    searchButton.addEventListener('click', () => {
        const selectedOption = searchOption.value;
        const userInput = searchInput.value;

        // Here, you would implement your filtering logic based on the selected option and user input.
        // For simplicity, let's assume we have a list of mobile phones.
        const mobilePhones = [
            { model: 'SamsungA10', company: 'Samsung', price: 500, camera: 12 },
            { model: 'SamsungA20', company: 'Samsung', price: 200, camera: 11 },
            { model: 'SamsungA30', company: 'Samsung', price: 100, camera: 13 },
            { model: 'Ipone11', company: 'Apple', price: 700, camera: 16 },
            { model: 'Ipone12', company: 'Apple', price: 800, camera: 16 },
            { model: 'Ipone13', company: 'Apple', price: 1000, camera: 16 },
            // ... more phone data
        ];

        const filteredPhones = mobilePhones.filter(phone => phone[selectedOption] === userInput);

        // Display filtered results in the results container
        resultsContainer.innerHTML = '';
        filteredPhones.forEach(phone => {
            const phoneInfo = document.createElement('div');
            phoneInfo.textContent = `Model: ${phone.model}, Company: ${phone.company}, Price: $${phone.price}, Camera: ${phone.camera}MP`;
            resultsContainer.appendChild(phoneInfo);
        });
    });
});