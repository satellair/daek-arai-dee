<script lang="ts">
	import { onMount } from 'svelte';
	import { list } from '$lib/list-larn-pai-daek'
	let result = 'สุ่มดิจ๊ะ รอไร';
	onMount(() => {
		document.addEventListener('keydown', (e) => {
			if (e.key === ' ') {
				result = list[Math.floor(Math.random() * list.length)];
			}
		});
	});
	const random = () => {
		result = list[Math.floor(Math.random() * list.length)];
	};
</script>

<svelte:head>
	<title>สุ่มร้าน - แดกอะไรD</title>
	<meta name="description" content="นึกไม่ออกก็สุ่ม ได้ร้านไหนก็ไปแดก" />
</svelte:head>

<section
	on:click={random}
	class="select-none flex flex-col p-4 w-screen h-screen justify-center items-center bg-teal-50 gap-8 md:gap-12"
>
	<h2 class="text-center text-2xl md:text-4xl text-gray-800">แดกอะไรD 🍽</h2>
	{#key result}
		<h1 class="text-center text-4xl md:text-6xl bounce">{result}</h1>
	{/key}
	<h3 class="text-gray-400">
		คลิกหรือกด <span class="border-2 border-gray-400 rounded-md px-3 py-0.5">SPACE</span> เพื่อสุ่ม
	</h3>
</section>

<style type="postcss">
	@keyframes bounce-once {
		0%,
		100% {
			transform: translateY(0%);
			animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
		}
		50% {
			transform: translateY(-20%);
			animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
		}
	}
	.bounce {
		animation: bounce-once 0.4s;
	}
</style>
