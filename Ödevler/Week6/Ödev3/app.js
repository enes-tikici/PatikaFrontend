const jokeContainer = document.getElementById("joke")
const value = document.getElementById("value")
const button = document.getElementById("random")

//baslangicta bos metin
let joke = ""

//veri getirecek fonksiyon
async function getJoke() {
    //async bir sekilde veri getiriliyor
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    joke = data.value

    //value elementinin icini gelen sakayi alarak yazdım
    value.textContent = joke
}

//baslangic olarak cagirilan fonksiyon
getJoke()

//butona tiklayinca tekrar fonksiyon calisacak ve yeni bir saka gelecek
button.addEventListener("click", () => {
    getJoke()
})