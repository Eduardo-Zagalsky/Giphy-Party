function getGif(gif) {
    let img = document.createElement("img");
    let random = Math.floor(Math.random() * gif.data.length);
    img.src = gif.data[random].images.original.url;
    img.className = "col-4"
    let imgBox = document.querySelector("#img-box");
    imgBox.append(img);
}

let searchButton = document.querySelector("#searchButton");
let removeButton = document.querySelector("#removeButton");
searchButton.addEventListener("click", async function (event) {
    event.preventDefault();
    let input = document.getElementById("search");
    let inputVal = input.value;
    let editedVal = inputVal.toLowerCase();
    let funGif = await axios.get("https://api.giphy.com/v1/gifs/search", { params: { api_key: "meyXoJBsuJ36UNsNcCgu9X1fYIIp9Cz8", q: editedVal } });
    getGif(funGif.data);
    input.value = '';
});
removeButton.addEventListener("click", function () {
    localStorage.reload();
});