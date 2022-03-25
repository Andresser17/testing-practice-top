export const capitalize = (str) => {
	return str.split("")[0].toUpperCase() + str.slice(1);
};

export const reverse = (str) => {
	return str.split("").reverse().join("");
};

export const calculator = {
	add(a, b) {
		return a + b;
	},
	substract(a, b) {
		return a - b;
	},
	divide(a, b) {
		return a / b;
	},
	multiply(a, b) {
		return a * b;
	},
};

export const caesarCipher = (text, shift) => {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";

	const shifted = text
		.toLowerCase()
		.split("")
		.map((char) => {
			let newLetter = "";
			alphabet.split("").forEach((letter, position) => {
				if (char === " ") {
					newLetter = " ";
					return;
				}

				// Compare letter position
				if (char === letter) {
					const letterPosition =
						position + shift > 26 ? position + shift - 26 : position + shift;
					newLetter = alphabet[letterPosition];
					return;
				}
			});

			return newLetter;
		});

	return shifted.join("");
};

export const analizeArray = (arr) => {
	const average = arr.reduce((accum, value, i, arr) => {
		if (arr.length - 1 === i) return (accum + value) / arr.length;

		return accum + value;
	}, 0);
	const min = Math.min(...arr);
	const max = Math.max(...arr);
	const length = arr.length;

	return { average, min, max, length };
};
