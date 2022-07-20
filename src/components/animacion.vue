<template>
	<div class="blur-lg opacity-50 dark:opacity-30 posicionar">
		<div class="posicionar mix-blend-multiply dark:mix-blend-lighten translate-x-[-100px] translate-y-[-100px]">
			<div
				class="bg-[#FFFF00] dark:bg-[#ff0000] h-[120px] w-[120px] rounded-full animate-glob"
			></div>
		</div>

		<div class="posicionar mix-blend-multiply dark:mix-blend-lighten translate-x-[-80px] translate-y-[-50px]">
			<div
				class="bg-[#FF00FF] dark:bg-[#00ff00] h-[170px] w-[170px] rounded-full animate-glob animation-delay-200"
			></div>
		</div>

		<div class="posicionar mix-blend-multiply dark:mix-blend-lighten translate-x-[-180px] translate-y-[-50px]">
			<div
				class="bg-[#00FFFF] dark:bg-[#0000ff] h-[150px] w-[150px] rounded-full animate-glob animation-delay-400"
			></div>
		</div>
	</div>
</template>

<style scoped>
	.posicionar {
		position: absolute;
		top: 50%;
		left: 50%;
	}
</style>
