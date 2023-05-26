const sentenceTag = document.querySelector(`input[type="text"]`);
const outputTag = document.querySelector(".output");

//when I type in my sentence tag, update the output tag

sentenceTag.addEventListener("keyup", (e) => {
  outputTag.innerHTML = sentenceTag.value;
});
