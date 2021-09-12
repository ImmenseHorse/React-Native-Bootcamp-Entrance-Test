async function addNewItem(source) {
    const itemAdded = await fetch(source, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    });
    return itemAdded.json();
}

let web = document.getElementById('web2');
let para = document.getElementById('para');

document.getElementById('1').addEventListener('click', () => {
    para.innerHTML = '';
    addNewItem('https://api.shrtco.de/v2/shorten?url=' + web.value)
        .then(fetch('https://api.shrtco.de/v2/shorten?url=' + web.value)
            .then(response => response.json())
            .then(data => para.insertAdjacentHTML('beforeend', data["result"]["full_short_link"])));
})

document.getElementById('2').addEventListener('click', () => {
    para.innerHTML = '';
    addNewItem('https://api.shrtco.de/v2/shorten?url=' + web.value)
        .then(fetch('https://api.shrtco.de/v2/shorten?url=' + web.value)
            .then(response => response.json())
            .then(data => para.insertAdjacentHTML('beforeend', data["result"]["full_short_link2"])));
})

document.getElementById('3').addEventListener('click', () => {
    para.innerHTML = '';
    addNewItem('https://api.shrtco.de/v2/shorten?url=' + web.value)
        .then(fetch('https://api.shrtco.de/v2/shorten?url=' + web.value)
            .then(response => response.json())
            .then(data => para.insertAdjacentHTML('beforeend', data["result"]["full_short_link3"])));
})