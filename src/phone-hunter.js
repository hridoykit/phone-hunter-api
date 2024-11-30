const loadPhoneData = async (searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const phones = await res.json();
    showPhone(phones.data);
};

const showPhone = phones =>{
    console.log(phones)
    const container = document.getElementById('phone-container');

    // clear previous items of container
    container.textContent = "";

    if(phones.length > 9){
        document.getElementById('show-all-btn').classList.remove('hidden');
    }
    else{
        document.getElementById('show-all-btn').classList.add('hidden');
    };
    
    // limit to first 10 phones 
    phones = phones.slice(0, 9);
    console.log(phones);

    phones.forEach(phone =>{
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
                <p>Model: <span class="font-bold text-md">${phone.slug}</span></p>
                <p>${phone.brand} origin</p>
                <button class="bg-lime-500 px-5 py-1 rounded-lg text-white font-bold">Buy Now</button>
            </div>
            `;
        container.appendChild(card);
    });
};

const handleSearchField = () =>{
    const inputValue = document.getElementById('phone-search-field').value;
    // console.log(inputValue);
    loadPhoneData(inputValue);

    // clear input field
    document.getElementById('phone-search-field').value = "";
};