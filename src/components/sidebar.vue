<script>
	import darkmode from "./toggleDarkMode.vue";
	export default {
		components: {
			darkmode,
		},
		data() {
			return {};
		},
		methods: {
			showSidebar() {
				const sidebar = document.getElementById("sidebar");
				const bars = document.getElementById("bars");
				sidebar.classList.toggle("hidden");
				bars.classList.toggle("hidden");
			},
		},
	};
</script>
<template>
	<!-- Sidebar component -->
	<!-- Boton que muestra slidebar en pantallas sm, md -->
	<button
		@click="showSidebar()"
		id="bars"
		class="fixed z-50 backdrop-blur lg:hidden top-3 left-3"
	>
		<div
			class="px-2 py-1 text-2xl duration-500 border rounded-md hover:bg-gray-200"
		>
			<font-awesome-icon icon="fa-solid fa-bars" class="dark:text-white" />
		</div>
	</button>

	<!-- contenido sidebar -->
	<div
		id="sidebar"
		class="fixed transition duration-300 hidden top-0 bottom-0 left-0 p-2 overflow-y-auto text-center bg-blue-300/30 backdrop-blur-lg z-50 dark:bg-slate-800/60 border-2 border-sky-500/10 lg:relative lg:h-[100vh] lg:rounded-l-3xl w-60 lg:text-xl lg:block rounded-r-3xl text-black dark:text-white"
	>
		<!-- boton cerrar -->
		<div class="fixed top-4 left-3">
			<button
				@click="showSidebar()"
				class="px-3 py-1 text-lg border-2 rounded-md cursor-pointer border-white/40 dark:border-black/30 dark:bg-slate-900/95 lg:hidden"
			>
				<font-awesome-icon icon="fa-solid fa-xmark" />
			</button>
		</div>
		<!-- Boton dark mode -->
		<div class="flex items-center mt-5 p-2.5 top-3">
			<darkmode />
		</div>
		<!-- links de navegacion -->
		<router-link
			to="/"
			class="p-2.5 mt-9 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-200 dark:hover:bg-slate-900/60"
		>
			<font-awesome-icon icon="fa-solid fa-address-card" />
			<p class="ml-2 font-bold lg:font-medium">Inicio</p>
		</router-link>

		<router-link
			to="/skills"
			class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-200 dark:hover:bg-slate-900/60"
		>
			<font-awesome-icon icon="fa-solid fa-bars-progress" />
			<p class="ml-2 font-bold lg:font-medium">Skills</p>
		</router-link>

		<router-link
			to="/projects"
			class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-200 dark:hover:bg-slate-900/60"
		>
			<font-awesome-icon icon="fa-solid fa-suitcase" />
			<p class="ml-2 font-bold lg:font-medium">Proyectos</p>
		</router-link>
		<!-- Iconos -->
		<div class="p-2.5 justify-around mt-5 flex items-center rounded-md px-4">
			<a
				href="https://www.linkedin.com/in/branthon-angeles-gonzalez/"
				target="_blank"
			>
				<font-awesome-icon
					icon="fa-brands fa-linkedin"
					class="duration-300 hover:-translate-y-1 hover:text-gray-500"
				/>
			</a>
			<a href="mailto: branthon.angeles@gmail.com">
				<font-awesome-icon
					icon="fa-solid fa-envelope"
					class="duration-300 hover:-translate-y-1 hover:text-gray-500"
				/>
			</a>
			<a href="https://t.me/BranthonAG" 
				target="_blank">
				<font-awesome-icon
					icon="fa-brands fa-whatsapp"
					class="duration-300 hover:-translate-y-1 hover:text-gray-500"
				/>
			</a>
		</div>
	</div>
	<!-- END Sidebar -->
</template>
