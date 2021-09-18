<script lang='ts'>
	export let textAlign: string = 'justify';
</script>

<p style='text-align: {textAlign}'>
	<slot />
</p>

<style>
    p {
        font-size: 1.5rem;
        margin: 20px auto;
    }
</style>
