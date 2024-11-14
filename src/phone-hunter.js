const fetchPhoneData = async () =>{
    const data = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const phones = await data.json();
    // console.log(phones.data)
    showPhone(phones.data);
};

const showPhone = (phones) => {
    const container = document.getElementById('phone-container');

    phones.forEach(phone => {
        const li = document.createElement('li');
        li.innerText = phone.phone_name;
        container.appendChild(li);
    });
}
//     const container = document.getElementById('phone-container');
//     for(const phone of phones){
//         // console.log(phone.phone_name);
//         const li = document.createElement('li');
//         li.innerText = phone.phone_name;
//         container.appendChild(li);
//     }