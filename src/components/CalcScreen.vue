<template>
	<div class="calc-screen">
		<p class="calc-screen__before">{{ before }}</p>
		<p class="calc-screen__current">{{ after === "" ? 0 : after }}</p>
	</div>
</template>

<script>
import "@/styles/calc-screen.scss";

/**
 * Calculator screen
 */

export default {
	name: "CalcScreen",
	props: {
		before: String,
		after: String,
	},
};
</script>
