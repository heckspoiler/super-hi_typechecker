const sentenceTag = document.querySelector(`input[type="text"]`);
const outputTag = document.querySelector("textarea.output");
const originalText = outputTag.value; //that is used to save the initial value of the innerHTML in order to reuse it

//when I type in my sentence tag, update the output tag
// if there's no value, put in the original text
sentenceTag.addEventListener("keyup", (e) => {
  if (sentenceTag.value) {
    outputTag.value = sentenceTag.value;
  } else {
    outputTag.value = originalText; //original text is used here and value because there is no inner HTML but a value, the content inbetween the textarea is a value and not innerHTML
  }
});

// when i type in my output tag, update the sentence tag accordingly

outputTag.addEventListener("keyup", function () {
  sentenceTag.value = this.value;
});
