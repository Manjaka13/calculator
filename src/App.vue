<template>
	<div id="app" class="app">
		<div class="app__container">
			<CalcScreen :before="before" :after="current" />
			<CalcPad @buttonClick="padClick" />
		</div>
		<CalcFooter />
	</div>
</template>

<script>
import CalcPad from "@/components/CalcPad.vue";
import CalcScreen from "@/components/CalcScreen.vue";
import CalcFooter from "@/components/CalcFooter.vue";
import { CALC_DIGITS, CALC_SIGNS, CALC_ACTIONS } from "@/helpers/const";
import "@/styles/app.scss";

/**
 * App entry point
 */

export default {
	name: "App",
	data() {
		return {
			before: "",
			current: "",
			result: 0,
		};
	},
	components: {
		CalcScreen,
		CalcPad,
		CalcFooter,
	},
	methods: {
		// Checks if current item is a digit
		isDigit(item) {
			const values = CALC_DIGITS;
			return values.includes(item);
		},
		// Checks if current item is a sign
		isSign(item) {
			const signs = CALC_SIGNS;
			return signs.includes(item);
		},
		// Checks if current item is an action (except for ".")
		isAction(item) {
			const actions = CALC_ACTIONS;
			return actions.includes(item);
		},
		// Gets last char from string
		getLastChar(str) {
			return str && str.length > 0 ? str[str.length - 1] : "";
		},
		// Checks if string has dots "."
		hasDot(str) {
			const arr = str.split("");
			return arr.includes(".") || arr.includes(",");
		},
		// Gets the number of digits after decimal point
		decimalCount(number) {
			const numberAsString = number.toString();
			if (numberAsString.includes(".")) return numberAsString.split(".")[1].length;
			return 0;
		},
		// Manage entries (digits, signs, actions)
		handleDigit(c) {
			if (this.isDigit(c)) this.current += c;
		},
		handleSign(c) {
			const lastChar = this.getLastChar(this.current);
			if (this.isSign(c)) {
				if (this.current.length === 0) this.current += "0" + c;
				else if (!this.isSign(lastChar)) this.current += c;
			}
		},
		handleAction(c) {
			let d, s, arr;
			const lastChar = this.getLastChar(this.current);
			const rp1 = new RegExp("x", "g");
			const rp2 = new RegExp("÷", "g");
			if (this.isAction(c)) {
				switch (c) {
					case "AC":
						this.current = "";
						break;
					case "Del":
						if (this.current.length > 0)
							this.current = this.current.slice(0, this.current.length - 1);
						break;
					case "+/-":
						if (lastChar != "" && this.isDigit(lastChar)) {
							arr = this.current.split("");
							d = arr.pop();
							s = arr.pop();
							arr = arr.join("");
							if (s == undefined) this.current = arr + "-" + d;
							else if (this.isSign(s)) {
								if (s === "+") this.current = arr + "-" + d;
								else if (s === "-") this.current = arr + "+" + d;
								else this.current = arr + s + "-" + d;
							}
						}
						break;
					case "=":
						s = this.current.replace(rp1, "*");
						s = s.replace(rp2, "/");
						s = eval(s);
						if (this.decimalCount(s) > 2) s = s.toFixed(2).toString();
						else s = s.toString();
						this.before = this.current + "=" + s;
						this.current = s;
						break;
					default:
						break;
				}
			}
		},
		// Triggered on every clicks on the calculator pad
		padClick(c) {
			if ((c === "." || c === ",") && !this.hasDot(this.current)) {
				if (this.current.length === 0) this.current += "0" + c;
				else this.current += c;
			} else {
				this.handleDigit(c);
				this.handleSign(c);
				this.handleAction(c);
			}
		},
	},
};
</script>

<style></style>
