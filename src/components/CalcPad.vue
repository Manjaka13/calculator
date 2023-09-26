template
<template>
	<ul class="calc-pad">
		<li class="calc-pad__item" v-for="sign in pad" :key="sign">
			<CalcButton>{{ sign }}</CalcButton>
		</li>
	</ul>
</template>

<script>
import CalcButton from "@/components/CalcButton";
import "@/styles/calc-pad.scss";

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
			pad: [
				"AC",
				"Del",
				"%",
				"/",
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
};
</script>
