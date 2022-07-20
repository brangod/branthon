<script>
export default {
    data() {
			return {
				darkMode: false,
			};
		},
		methods: {
			toggle() {
				this.darkMode = !this.darkMode;
			},
		},
		watch: {
			darkMode() {
				const html = document.querySelector("html");
				this.darkMode ? (html.className = "dark") : (html.className = "");
			},
		},
}
</script>
<template>
		<!-- Switch DarkMode -->
		<div class="absolute flex justify-between right-6">
			<span class="mr-1">
				<font-awesome-icon icon="fa-regular fa-sun" />
			</span>
			<div class="form-check form-switch">
				<input
					class="h-5 -ml-10 bg-neutral-300 bg-no-repeat bg-contain rounded-full shadow-sm appearance-none cursor-pointer lg:w-10 lg:-ml-12 lg:h-5 form-check-input w-9 focus:outline-none"
					type="checkbox"
					role="switch"
					@click="toggle"
				/>
			</div>
			<span class="ml-1">
				<font-awesome-icon icon="fa-regular fa-moon" />
			</span>
		</div>
		<!-- Fin Switch DarkMode -->
	
</template>
