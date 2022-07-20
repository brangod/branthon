<script>
	import animacion from "../components/animacion.vue";
	export default {
		components: {
			animacion,
		},
	};
</script>

<template>
	<div class="relative transition duration-300 dark:text-white">
		<animacion />
		<div
			class="h-[100vh] pt-10 overflow-auto pr-5"
		>
			<!-- Proyecto 1 -->
			<div
				class="relative p-2 mb-5 border-2 rounded-lg border-sky-500/10 bg-blue-300/30 dark:bg-slate-600/30"
			>
				<h1 class="text-xl">Software de control de Tintas</h1>
				<div class="flex flex-wrap mt-2">
					<span class="px-2 py-1 mb-1 mr-2 bg-purple-600 border rounded-lg"
						>C#</span
					>
					<span class="px-2 py-1 mb-1 mr-2 bg-red-600 border rounded-lg"
						>SQL Server</span
					>
					<span class="px-2 py-1 mb-1 mr-2 border rounded-lg bg-violet-500"
						>Visual Studio</span
					>
				</div>
				<!-- imagenes -->
				<div class="relative p-4 mt-4 overflow-auto rounded-2xl">
					<div
						class="relative flex w-full gap-4 pb-4 overflow-x-auto snap-x snap-mandatory"
					>
						<div class="snap-start shrink-0">
							<img
								src="../assets/img/ControlDeTintas/inicio.png"
								class="h-[240px] rounded-2xl"
								loading="lazy"
								alt="software"
							/>
						</div>
						<div class="snap-start scroll-mx-2 shrink-0">
							<img
								src="../assets/img/ControlDeTintas/tintas1.png"
								class="h-[240px] rounded-2xl"
								loading="lazy"
								alt="software"
							/>
						</div>
						<div class="snap-start scroll-mx-2 shrink-0">
							<img
								src="../assets/img/ControlDeTintas/tintas2.png"
								class="h-[240px] rounded-2xl"
								loading="lazy"
								alt="software"
							/>
						</div>
						<div class="snap-start scroll-mx-2 shrink-0">
							<img
								src="../assets/img/ControlDeTintas/tintas3.png"
								class="h-[240px] rounded-2xl"
								loading="lazy"
								alt="software"
							/>
						</div>
						<div class="snap-start scroll-mx-2 shrink-0">
							<img
								src="../assets/img/ControlDeTintas/tintas4.png"
								class="h-[240px] rounded-2xl"
								loading="lazy"
								alt="software"
							/>
						</div>
						<div class="snap-start scroll-mx-2 shrink-0">
							<img
								src="../assets/img/ControlDeTintas/tintas5.png"
								class="h-[240px] rounded-2xl"
								loading="lazy"
								alt="software"
							/>
						</div>
					</div>
				</div>
			</div>
			<!-- Proyecto 2 -->
			<div
				class="relative p-2 mb-5 border-2 rounded-lg border-sky-500/10 bg-blue-300/30 dark:bg-slate-600/30"
			>
				<h1 class="text-xl">
					Aplicacion web de prestamo de material y laboratiorios
				</h1>
				<div class="flex flex-wrap mt-2">
					<span class="px-2 py-1 mb-1 mr-2 bg-purple-500 border rounded-lg"
						>PHP</span
					>
					<span class="px-2 py-1 mb-1 mr-2 border rounded-lg bg-cyan-500"
						>Tailwind Css</span
					>
					<span class="px-2 py-1 mb-1 mr-2 bg-blue-500 border rounded-lg"
						>My SQL</span
					>
					<span class="px-2 py-1 mb-1 mr-2 bg-red-500 border rounded-lg"
						>Laravel</span
					>
				</div>
				<!-- imagenes -->
				<div class="relative p-4 mt-4 overflow-auto rounded-2xl">
					<div
						class="relative flex w-full gap-4 pb-4 overflow-x-auto snap-x snap-mandatory"
					>
						<div class="snap-start shrink-0">
							<img
								src="../assets/img/PrestamoMaterial/admin-solicitudes.png"
								class="h-[240px] rounded-2xl"
								loading="lazy"
								alt="software"
							/>
						</div>
						<div class="snap-start scroll-mx-2 shrink-0">
							<img
								src="../assets/img/PrestamoMaterial/admin-material.png"
								class="h-[240px] rounded-2xl"
								loading="lazy"
								alt="software"
							/>
						</div>
						<div class="snap-start scroll-mx-2 shrink-0">
							<img
								src="../assets/img/PrestamoMaterial/admin-usuarios-rol.png"
								class="h-[240px] rounded-2xl"
								loading="lazy"
								alt="software"
							/>
						</div>
						<div class="snap-start scroll-mx-2 shrink-0">
							<img
								src="../assets/img/PrestamoMaterial/login.png"
								class="h-[240px] rounded-2xl"
								loading="lazy"
								alt="software"
							/>
						</div>
						<div class="snap-start scroll-mx-2 shrink-0">
							<img
								src="../assets/img/PrestamoMaterial/usuario-historial.png"
								class="h-[240px] rounded-2xl"
								loading="lazy"
								alt="software"
							/>
						</div>
						<div class="snap-start scroll-mx-2 shrink-0">
							<img
								src="../assets/img/PrestamoMaterial/usuario-solicitudes.png"
								class="h-[240px] rounded-2xl"
								loading="lazy"
								alt="software"
							/>
						</div>
						<div class="snap-start scroll-mx-2 shrink-0">
							<img
								src="../assets/img/PrestamoMaterial/usuarios-inicio.png"
								class="h-[240px] rounded-2xl"
								loading="lazy"
								alt="software"
							/>
						</div>
					</div>
				</div>
			</div>
			<!-- Proyecto 3 -->
			<div
				class="relative p-2 mb-5 border-2 rounded-lg border-sky-500/10 bg-blue-300/30 dark:bg-slate-600/30"
			>
				<h1 class="text-xl">Monitoreo de habitacion</h1>
				<div class="flex flex-wrap mt-2">
					<span class="px-2 py-1 mb-1 mr-2 bg-orange-500 border rounded-lg"
						>HTML</span
					>
					<span class="px-2 py-1 mb-1 mr-2 bg-blue-500 border rounded-lg"
						>CSS</span
					>
					<span class="px-2 py-1 mb-1 mr-2 bg-yellow-300 border rounded-lg"
						>JS</span
					>
					<span class="px-2 py-1 mb-1 mr-2 bg-yellow-500 border rounded-lg"
						>Firebase</span
					>
				</div>
				<!-- imagenes -->
				<div class="relative p-4 mt-4 overflow-auto rounded-2xl">
					<div
						class="relative flex w-full gap-4 pb-4 overflow-x-auto snap-x snap-mandatory"
					>
						<div class="snap-start shrink-0">
							<img
								src="../assets/img/Sensores/index.png"
								class="h-[240px] rounded-2xl"
								loading="lazy"
								alt="software"
							/>
						</div>
						<div class="snap-start scroll-mx-2 shrink-0">
							<img
								src="../assets/img/Sensores/login.png"
								class="h-[240px] rounded-2xl"
								loading="lazy"
								alt="software"
							/>
						</div>
						<div class="snap-start scroll-mx-2 shrink-0">
							<img
								src="../assets/img/Sensores/monitoreo.png"
								class="h-[240px] rounded-2xl"
								loading="lazy"
								alt="software"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
