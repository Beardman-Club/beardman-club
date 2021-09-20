<script>
	import Logo from './Logo.svelte';
	import Social from './Social.svelte';
</script>

<nav>
	<Logo />
	<Social />
</nav>

<style lang='scss'>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px var(--container-marge);
    border-bottom: black 3px solid;
    background: var(--background-color__light);

    @media (max-width: 800px) {
      flex-direction: column;
      gap: 20px;
    }
  }
</style>
