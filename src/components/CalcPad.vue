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
import { CALC_PAD } from "@/helpers/const"

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
			pad: CALC_PAD,
		};
	},
	methods: {
		fireUp(value) {
			this.$emit("buttonClick", value || "Del");
		},
	},
};
</script>
