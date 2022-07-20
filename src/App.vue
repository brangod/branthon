<script>
	import sidebar from "./components/sidebar.vue";
	export default {
		components: {
			sidebar,
		},
	};
</script>

<template>
	<div class="container mx-auto font-sans min-h-[100vh] overflow-hidden">
		<!-- +LG 2 contenedores pantallas pequeñas btn fixed -->
		<div class="lg:grid lg:grid-cols-4">
			<div class="lg:col-span-1">
				<sidebar />
			</div>
			<div class="px-5 lg:col-span-3">
				<!-- Vista -->
				<router-view />
			</div>
		</div>
	</div>
</template>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	::-webkit-scrollbar{
		width: 10px;
	}
	::-webkit-scrollbar-track{
		background-color: transparent;
	}
	::-webkit-scrollbar-thumb:hover{
		border: solid black 1px;
	}
	::-webkit-scrollbar-thumb{
		background-color: rgba(255, 255, 255, 0.300);
		border-radius: 20px;
	}
</style>
