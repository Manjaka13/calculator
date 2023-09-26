template
<template>
	<ul class="calc-pad">
		<li class="calc-pad__item" v-for="sign in pad" :key="sign">
			<CalcButton @buttonClick="fireUp"
				>{{ sign != "Del" ? sign : "" }}<embed v-if="sign === 'Del'" :src="eraser"
			/></CalcButton>
		</li>
	</ul>
</template>

<script>
import CalcButton from "@/components/CalcButton";
import "@/styles/calc-pad.scss";
import eraser from "../../public/eraser.svg";

/**
 * Calculator button list
 */

export default {
	name: "CalcPad",
	components: {
		CalcButton,
	},
	data() {
		return {
			eraser,
			pad: [
				"AC",
				"Del",
				"%",
				"÷",
				"7",
				"8",
				"9",
				"x",
				"4",
				"5",
				"6",
				"-",
				"1",
				"2",
				"3",
				"+",
				"0",
				".",
				"+/-",
				"=",
			],
		};
	},
	methods: {
		fireUp(value) {
			this.$emit("buttonClick", value || "Del");
		},
	},
};
</script>
