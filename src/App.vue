<template>
	<div id="app" class="app">
		<div class="app__container">
			<CalcPad />
		</div>
	</div>
</template>

<script>
import CalcPad from "@/components/CalcPad.vue";
import "@/styles/app.scss";

/**
 * App entry point
 */

export default {
	name: "App",
	components: {
		CalcPad,
	},
};
</script>

<style></style>
