const sentenceTag = document.querySelector(`input[type="text"]`);
const outputTag = document.querySelector("textarea.output");
const originalText = outputTag.value; //that is used to save the initial value of the innerHTML in order to reuse it
const typesizeTag = document.querySelector(`input[name="typesize"]`);
const typesizeSpan = document.querySelector(".typesize-span");
const lineheightTag = document.querySelector(`input[name="lineheight"]`);
const lineheightOutput = document.querySelector("span.lineheight-output");
const italicTag = document.querySelector(`input[name="italic"]`);
const typefaceTag = document.querySelector(`select[name="typeface"]`);
const fontweightTag = document.querySelector(`input[name="fontweight"]`);
const fontweightOutput = document.querySelector("span.fontweight-output");
const backgroundColors = document.querySelectorAll("div.colors div");

console.log(backgroundColors);

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

// when i change my typesize slider, update text next to it and
// change the output tag's font size

typesizeTag.addEventListener("input", function () {
  outputTag.style.fontSize = this.value + "px";
  typesizeSpan.innerHTML = this.value + "px";
});

lineheightTag.addEventListener("input", () => {
  outputTag.style.lineHeight = lineheightTag.value;
  lineheightOutput.innerHTML = lineheightTag.value;
});

//when i change my italic checkbox, update fontstyle to normal or italic

italicTag.addEventListener("change", () => {
  italicTag.checked
    ? (outputTag.style.fontStyle = "italic")
    : (outputTag.style.fontStyle = "normal");
});

//when select for typeface is changed, update font family

typefaceTag.addEventListener("input", () => {
  outputTag.style.fontFamily = typefaceTag.value;
});

// changing fontweight
fontweightTag.addEventListener("input", () => {
  outputTag.style.fontWeight = fontweightTag.value;
  fontweightOutput.innerHTML = fontweightTag.value;
});

// changing background color on click and make this tag be "selected"
backgroundColors.forEach((element) => {
  element.addEventListener("click", () => {
    const computedStyle = window.getComputedStyle(element);
    outputTag.style.backgroundColor = computedStyle.backgroundColor;
    outputTag.style.color = computedStyle.color;

    //reset the classes
    backgroundColors.forEach((element) => {
      element.classList.remove("selected");
    });
    element.classList.add("selected");
  });
});
