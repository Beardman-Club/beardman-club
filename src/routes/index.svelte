<script lang='ts'>
	import Navbar from '../components/Navbar.svelte';
	import BeardmansGrid from '../components/Beardman/BeardmansGrid.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<Navbar />

<main>
	<BeardmansGrid />
</main>

<Footer />

<style>
    main {
        margin: 25px auto;
    }
</style>
