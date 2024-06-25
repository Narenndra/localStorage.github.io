let textareaEle = document.getElementById("msg");

let saveBtnEle = document.getElementById("saveBtn");

let clearBtnEle = document.getElementById("clearBtn");


let storageKey = "userInput";

saveBtnEle.onclick = function() {
    localStorage.setItem(storageKey, textareaEle.value);

}

textareaEle.value = localStorage.getItem("userInput");

clearBtnEle.onclick = function() {
    localStorage.removeItem("userInput");
    textareaEle.value = "";
}