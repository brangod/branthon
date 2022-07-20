<script>
	import animacion from "../components/animacion.vue";

	export default {
		components: {
			animacion,
		},
	};
</script>

<template>
	<div class="relative w-full h-full transition-all duration-500 dark:text-white">
		<animacion />
		<div
			class="h-[100vh] pt-12 pr-4 pb-0 pl-0 overflow-auto md:grid md:grid-cols-2 md:gap-1"
		>
			<div>
				<h1 class="text-2xl font-extrabold">Programación</h1>
				<div class="contenedorCards">
					<div
						class="relative flex items-center max-w-xs p-2 mx-auto mb-5 border-2 md:mx-0 bg-blue-300/30 dark:bg-slate-800/60 border-sky-500/10 rounded-xl"
					>
						<h1 class="py-2 pl-5 text-xl font-bold">HTML</h1>
						<i class="absolute text-4xl text-orange-600 left-1/2"
							><font-awesome-icon icon="fa-brands fa-html5"
						/></i>
					</div>

					<div
						class="relative flex items-center max-w-xs p-2 mx-auto mb-5 border-2 md:mx-0 bg-blue-300/30 dark:bg-slate-800/60 border-sky-500/10 rounded-xl"
					>
						<h1 class="py-2 pl-5 text-xl font-bold">CSS</h1>
						<i class="absolute text-4xl text-blue-700 left-1/2"
							><font-awesome-icon icon="fa-brands fa-css3-alt"
						/></i>
					</div>

					<div
						class="relative flex items-center max-w-xs p-2 mx-auto mb-5 border-2 md:mx-0 bg-blue-300/30 dark:bg-slate-800/60 border-sky-500/10 rounded-xl"
					>
						<h1 class="py-2 pl-5 text-xl font-bold">Js</h1>
						<i class="absolute text-4xl text-yellow-500 left-1/2"
							><font-awesome-icon icon="fa-brands fa-js"
						/></i>
					</div>

					<div
						class="relative flex items-center max-w-xs p-2 mx-auto mb-5 border-2 md:mx-0 bg-blue-300/30 dark:bg-slate-800/60 border-sky-500/10 rounded-xl"
					>
						<h1 class="py-2 pl-5 text-xl font-bold">PHP</h1>
						<i class="absolute text-4xl left-1/2 text-violet-700"
							><font-awesome-icon icon="fa-brands fa-php"
						/></i>
					</div>

					<div
						class="relative flex items-center max-w-xs p-2 mx-auto mb-5 border-2 md:mx-0 bg-blue-300/30 dark:bg-slate-800/60 border-sky-500/10 rounded-xl"
					>
						<h1 class="py-2 pl-5 text-xl font-bold">SQL</h1>
						<i class="absolute text-4xl text-gray-500 left-1/2"
							><font-awesome-icon icon="fa-solid fa-database"
						/></i>
					</div>

					<div
						class="relative flex items-center max-w-xs p-2 mx-auto mb-5 border-2 md:mx-0 bg-blue-300/30 dark:bg-slate-800/60 border-sky-500/10 rounded-xl"
					>
						<h1 class="py-2 pl-5 text-xl font-bold">C++</h1>
						<img
							src="..\assets\c.svg"
							alt="icono"
							class="w-[30px] absolute left-1/2"
						/>
					</div>
				</div>
			</div>

			<div>
				<h1 class="relative text-2xl font-extrabold">
					Frameworks || Tecnologías
				</h1>
				<div class="contenedorCards">
					<div
						class="relative flex items-center max-w-xs p-2 mx-auto mb-5 border-2 md:mx-0 bg-blue-300/30 dark:bg-slate-800/60 border-sky-500/10 rounded-xl"
					>
						<h1 class="py-2 pl-5 text-xl font-bold">Bootstrap</h1>
						<i class="absolute text-4xl text-purple-700 left-1/2"
							><font-awesome-icon icon="fa-brands fa-bootstrap"
						/></i>
					</div>

					<div
						class="relative flex items-center max-w-xs p-2 mx-auto mb-5 border-2 md:mx-0 bg-blue-300/30 dark:bg-slate-800/60 border-sky-500/10 rounded-xl"
					>
						<h1 class="py-2 pl-5 text-xl font-bold">Tailwind</h1>
						<i class="absolute left-1/2">
							<img
								class="w-[35px]"
								src="..\assets\tailwind-css.svg"
								alt="icono"
							/>
						</i>
					</div>

					<div
						class="relative flex items-center max-w-xs p-2 mx-auto mb-5 border-2 md:mx-0 bg-blue-300/30 dark:bg-slate-800/60 border-sky-500/10 rounded-xl"
					>
						<h1 class="py-2 pl-5 text-xl font-bold">Vue js</h1>
						<i class="absolute text-4xl text-green-500 left-1/2"
							><font-awesome-icon icon="fa-brands fa-vuejs"
						/></i>
					</div>

					<div
						class="relative flex items-center max-w-xs p-2 mx-auto mb-5 border-2 md:mx-0 bg-blue-300/30 dark:bg-slate-800/60 border-sky-500/10 rounded-xl"
					>
						<h1 class="py-2 pl-5 text-xl font-bold">Laravel</h1>
						<i class="absolute text-4xl text-red-600 left-1/2"
							><font-awesome-icon icon="fa-brands fa-laravel"
						/></i>
					</div>

					<div
						class="relative flex items-center max-w-xs p-2 mx-auto mb-5 border-2 md:mx-0 bg-blue-300/30 dark:bg-slate-800/60 border-sky-500/10 rounded-xl"
					>
						<h1 class="py-2 pl-5 text-xl font-bold">MySQL</h1>
						<img
							class="w-[35px] absolute left-1/2"
							src="..\assets\mysql-icon.svg"
							alt="icono"
						/>
					</div>

					<div
						class="relative flex items-center max-w-xs p-2 mx-auto mb-5 border-2 md:mx-0 bg-blue-300/30 dark:bg-slate-800/60 border-sky-500/10 rounded-xl"
					>
						<h1 class="py-2 pl-5 text-xl font-bold">Arduino</h1>
						<img
							class="w-[35px] absolute left-1/2"
							src="..\assets\arduino-icon.svg"
							alt="icono"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.contenedorCards {
		margin: 3rem 0;
		overflow: auto;
	}
</style>
