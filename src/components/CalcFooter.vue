<template>
	<footer class="calc-footer">
		<p class="calc-footer__left">
			Made by
			<a class="link" :href="DEVELOPER_EMAIL" title="The developer">
				{{ DEVELOPER_NAME }}
			</a>
		</p>
		<p class="calc-footer__right">Powered by VueJS</p>
	</footer>
</template>

<script>
import "@/styles/calc-footer.scss";
import { DEVELOPER_EMAIL, DEVELOPER_NAME } from "@/helpers/const";

/**
 * Calculator footer
 */

export default {
	name: "CalcFooter",
	data() {
		return {
			DEVELOPER_EMAIL,
			DEVELOPER_NAME,
		};
	},
};
</script>
