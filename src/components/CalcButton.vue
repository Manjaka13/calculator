<template>
	<button :class="className" @click="atButtonClick">
		<slot></slot>
	</button>
</template>

<script>
import "@/styles/calc-button.scss";

/**
 * Calculator button
 */

export default {
	name: "CalcButton",
	data() {
		const currentItem = this.$slots.default[0].text;
		return {
			className:
				currentItem === "="
					? "calc-button calc-button--equal"
					: currentItem === "AC"
					? "calc-button calc-button--ac"
					: "calc-button",
		};
	},
	methods: {
		atButtonClick() {
			const item = this.$slots.default[0].text;
			this.$emit("buttonClick", item);
		},
	},
};
</script>
