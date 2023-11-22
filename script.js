let favorites;
localStorage.setItem('sharedArray', JSON.stringify(favorites));

function updateArray() {
    let currentArray = JSON.parse(localStorage.getItem('favorites')) || [];
    currentArray = favorites;
    localStorage.setItem('sharedArray', JSON.stringify(favorites));
}

function addToFavorite(element) {
    let parent = element.parentElement;
    parent.classList.add('Favorites');
    parent.style.backgroundColor = 'red';
    favorites = document.getElementsByClassName('Favorites'); 
    updateArray(); //Update Favorites
}

function logFavorites() {
    for (let i = 0; i < favorites.length; i++) {
        console.log(favorites[i]);  
    }
}

function openFavorites() {
    // Replace 'https://example.com' with the URL you want to open in the new tab
    var newTabUrl = 'favorites.html';
    window.open(newTabUrl, '_blank');
}

function getFavorites() {
    return favorites;
}