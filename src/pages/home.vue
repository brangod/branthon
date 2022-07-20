<script>
	import animacion from "../components/animacion.vue";
	export default {
		components: {
			animacion,
		},
	};
</script>

<template>
	<!-- view inicio -->
	<div class="relative w-full h-full transition duration-300 dark:text-white">
		<animacion />
		<div class="contenedor">
			<img src="..\assets\perfil.jpg" alt="imagen" class="foto" />
			<div class="border-2 tarjeta bg-blue-300/30 dark:bg-slate-600/30 border-sky-500/10">
				<h1>
					<b>Nombre:</b> <br />
					Branthon Angeles Gonzalez
				</h1>
				<br />
				<h1>
					<font-awesome-icon icon="fa-solid fa-graduation-cap" class="icono" />
					<b>Educación: </b> <br />
					Ingeniero en Comunicaciones y Electrónica || E.S.I.M.E Zacatenco IPN
					<br />
					2017 - 2022
				</h1>
				<br />
				<h1><b>Acerca de mi:</b></h1>
				<p>
					Actualmente tengo 23 años soy recién egresado de la carrera, me gusta
					la electrónica y la programación, todo el mundo de la tecnología me
					apasiona. Tengo un conocimiento full stack, me gusta realizar
					proyectos completos. Busco una oportunidad laboral en donde pueda
					poner en práctica mis conocimientos para mejorar mis habilidades,
					siempre estoy dispuesto a aprender cosas nuevas…
				</p>
				<br />
				<h1><b>Aptitudes:</b></h1>
				<ul>
					<li>Trabajo en equipo.</li>
					<li>Persistente.</li>
					<li>Responsable.</li>
				</ul>
				<br />
				<div class="contenedor__iconos">
					<font-awesome-icon icon="fa-solid fa-microchip" />
					<font-awesome-icon icon="fa-solid fa-ethernet" />
					<font-awesome-icon icon="fa-solid fa-computer" />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.contenedor {
		height: 100vh;
		overflow: auto;
		text-align: justify;
		position: relative;
		padding: 0 5px 0 0;
	}
	.foto {
		position: relative;
		bottom: -30px;
		width: 120px;
		height: 120px;
		overflow: hidden;
		border-radius: 100%;
		object-fit: cover;
		margin: 10px auto 0;
	}
	.tarjeta {
		border-radius: 10px;
		padding: 30px 15px 15px;
		margin-bottom: 1.4rem;
	}
	.contenedor__iconos {
		display: flex;
		justify-content: space-around;
		padding: 0 0.5rem;
		font-size: 24px;
	}
	.icono {
		margin-right: 0.5rem;
	}
</style>
