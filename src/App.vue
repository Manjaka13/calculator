<template>
	<div id="app" class="app">
		<div class="app__container">
			<CalcScreen />
			<CalcPad />
		</div>
	</div>
</template>

<script>
import CalcPad from "@/components/CalcPad.vue";
import CalcScreen from "@/components/CalcScreen.vue";
import "@/styles/app.scss";

/**
 * App entry point
 */

export default {
	name: "App",
	components: {
		CalcScreen,
		CalcPad,
	},
};
</script>

<style></style>
