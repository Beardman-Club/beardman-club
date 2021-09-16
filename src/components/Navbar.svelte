<script>
	import Logo from './Logo.svelte';
</script>

<nav>
	<Logo />
</nav>

<style>
	nav {
			display: flex;
			justify-content: center;
			align-items: center;

			border-bottom: #000000 2px solid;
			background: var(--background-color__light);
			height: 70px;
	}
</style>
