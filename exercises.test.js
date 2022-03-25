import {
	capitalize,
	reverse,
	calculator,
	analizeArray,
	caesarCipher,
} from "./exercises.js";

// Capitalize
test("Capitalize first character", () => {
	expect(capitalize("hello")).toBe("Hello");
	expect(capitalize("goodbye")).toBe("Goodbye");
	expect(capitalize("how are you")).toBe("How are you");
});

// Reverse string
test("Reverse provided string", () => {
	expect(reverse("hello")).toBe("olleh");
	expect(reverse("goodbye")).toBe("eybdoog");
	expect(reverse("how are you")).toBe("uoy era woh");
});

// Calculator object
test("Basic math operations", () => {
	const { add, substract, divide, multiply } = calculator;
	// Add
	expect(add(3, 2)).toBe(5);
	expect(add(6, 6)).toBe(12);
	expect(add(20, 18)).toBe(38);

	// Substract
	expect(substract(3, 2)).toBe(1);
	expect(substract(6, 6)).toBe(0);
	expect(substract(20, 18)).toBe(2);

	// Divide
	expect(divide(3, 2)).toBeCloseTo(1.5);
	expect(divide(6, 6)).toBe(1);
	expect(divide(20, 18)).toBeCloseTo(1.111);

	// Multiply
	expect(multiply(3, 2)).toBe(6);
	expect(multiply(6, 6)).toBe(36);
	expect(multiply(20, 18)).toBe(360);
});

// Caesar Cipher
test("Caesar Cipher, encryption and decryption", () => {
	expect(caesarCipher("wxyz", 5)).toBe("bcde");
	expect(caesarCipher("hello", 3)).toBe("khoor");
	expect(caesarCipher("goodbye", 5)).toBe("lttigdj");
	expect(caesarCipher("attack at dawn", 5)).toBe("fyyfhp fy ifbs");
	expect(caesarCipher("zzzzzz", 3)).toBe("cccccc");
});

// Analize array
const testEveryObjectEl = (obj, expected) => {
	for (let key in obj) {
		const item = obj[key];

		if (key === "average") {
			expect(item).toBeCloseTo(expected[key]);
		}
		if (key === "min") {
			expect(item).toBeCloseTo(expected[key]);
		}
		if (key === "max") {
			expect(item).toBeCloseTo(expected[key]);
		}
		if (key === "length") {
			expect(item).toBeCloseTo(expected[key]);
		}
	}
};

test("Analize array of numbers and return avg, max and length", () => {
	testEveryObjectEl(analizeArray([1, 2, 3, 4, 5, 6]), {
		average: 3.5,
		min: 1,
		max: 6,
		length: 6,
	});
	testEveryObjectEl(analizeArray([23, 1, 5, 18, 24, 19, 44]), {
		average: 19.14,
		min: 1,
		max: 44,
		length: 7,
	});
	testEveryObjectEl(analizeArray([24, 2, 7, 77, 81]), {
		average: 38.2,
		min: 2,
		max: 81,
		length: 5,
	});
});
