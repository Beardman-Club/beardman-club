<script lang='ts'>
	import Social from './Social.svelte';

	const currentYear = new Date().getFullYear();
</script>

<footer>
	<p class='copyright'>©{currentYear} Beardmans Club | All right reserved.</p>

	<Social />
</footer>

<style lang='scss'>
  footer {
    background: var(--background-color__light);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 3px black solid;
    padding: 40px var(--container-marge);

    .copyright {
      font-size: 1.5rem;
    }

    @media (max-width: 600px) {
      padding: 40px;
      gap: 40px;
      flex-direction: column;
    }
  }
</style>
