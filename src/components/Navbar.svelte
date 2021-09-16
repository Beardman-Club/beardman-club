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

			border-bottom: black 3px solid;
			background: var(--background-color__light);
			height: 70px;
	}
</style>
