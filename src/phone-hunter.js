const fetchPhoneData = async (searchText) => {
    const data = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const phones = await data.json();
    showPhone(phones.data);
};

const showPhone = phones => {
    const container = document.getElementById('phone-container');

    // clear previous container items
    container.textContent = "";

    phones.forEach(phone => {
        // const li = document.createElement('li');
        // li.innerText = phone.phone_name;
        // container.appendChild(li);
        const card = document.createElement('div');
        card.classList = `bg-gray-100 w-96 shadow-lg flex flex-col items-center justify-center rounded-lg p-4`;
        card.innerHTML = `
            <img
                src="${phone.image}"
                class="p-4"
            />
            <div class="items-center text-center space-y-2">
                <h2 class="text-lg font-semibold">${phone.phone_name}</h2>
                <p>Model: <span class="text-lime-400 font-semibold text-md">${phone.slug}</span></p>
                <p>${phone.brand} brand</p>
                <button class="btn btn-primary">Buy Now</button>
            </div>
            `;
        container.appendChild(card);
    });
};

const handleSearchField = () => {
    const inputValue = document.getElementById('phone-search-field');
    const value = inputValue.value;
    fetchPhoneData(value);
    
    // clear the input field
    document.getElementById('phone-search-field').value = "";
};