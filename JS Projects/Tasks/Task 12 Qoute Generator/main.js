const typeOfQuote = document.getElementById("typeOfQuote");
const theQuote = document.getElementById("theQuote");
const authorName = document.getElementById("author");
const btnGenerator = document.getElementById("btnGenerator");

btnGenerator.addEventListener("click", () => {
  const randomQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((result) => {
        authorName.innerHTML = result.author;
        theQuote.innerHTML = result.content;
        typeOfQuote.innerHTML = result.tags[0];
      });
  };
  randomQuote();
});
