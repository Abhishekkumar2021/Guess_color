const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const button = document.querySelector("button");

const randomColor = () => {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return { r, g, b };
};
button.addEventListener("click", () => {
	let colors = [];
	const boxes = document.querySelectorAll(".box");
	for (let i = 0; i < 8; i++) {
		colors.push(randomColor());
		boxes[i].innerHTML = "";
	}

	let idx = Math.floor(Math.random() * 8);
	red.innerHTML = colors[idx].r;
	green.innerHTML = colors[idx].g;
	blue.innerHTML = colors[idx].b;
	for (let i = 0; i < boxes.length; i++) {
		boxes[
			i
		].style.background = `rgb(${colors[i].r},${colors[i].g},${colors[i].b})`;
		boxes[i].addEventListener("click", () => {
			if (i === idx) {
				boxes[i].innerHTML =
					'<img src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/50/000000/external-correct-notification-alert-xnimrodx-lineal-color-xnimrodx.png"/>';
			} else {
				boxes[i].innerHTML =
					'<img src="https://img.icons8.com/color/48/000000/error--v1.png"/>';
			}
		});
	}
});
