<template>
	<button class="calc-button" @click="atButtonClick">
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
	methods: {
		atButtonClick() {
			const item = this.$slots.default[0].text;
			this.$emit("buttonClick", item);
		},
	},
};
</script>
