// const showLeftArticle = (event) => {
//   event.target;
// };
const letterChanger = event => { 
  let i = 0;
  clearInterval(interval);
  console.log(event.target.innerText);
  let targeted = event.target.innerText;
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("").map((letter, index) => {
        if(index < i) {
          return event.target.dataset.value[index];
        }
        return alphabet[Math.floor(Math.random() * 26)]
      }).join("");
    if(i >= event.target.dataset.value.length) { 
      clearInterval(interval);
    }
    i += 1 / 2;
  }, 30);
}

Array.from(document.getElementsByClassName("cript-js")).forEach(element => {
  element.addEventListener("mouseenter", letterChanger);
});