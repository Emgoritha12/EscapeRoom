// click
let wordFill = document.getElementsByClassName("word-fill");
let wordEmpty = document.getElementsByClassName("word-empty");

for (let i = 0; i < wordFill.length; i++) {
	wordFill[i].addEventListener("click", function () {
		for (let i = 0; i < wordEmpty.length; i++) {
			if (wordEmpty[i].innerText === "") {
				wordEmpty[i].innerText = this.innerText;
				this.style.display = "none";
				wordEmpty[i].setAttribute("data", this.getAttribute("data"));
				break;
			}
		}
	});
}
for (let i = 0; i < wordEmpty.length; i++) {
	wordEmpty[i].addEventListener("click", function () {
		if (this.innerText !== "") {
			this.innerText = "";
			wordFill[this.getAttribute("data")].style.display = "inline-block";
		}
	});
}