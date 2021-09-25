<script>
	export let href = '', targetBlank = false;
</script>

{#if href}
	<a href='{href}'
		 target='{targetBlank ? "_blank" : "_self"}'>
		<slot />
	</a>
{:else }
	<button>
		<slot />
	</button>
{/if}


<style lang='scss'>
  a {
    background: var(--color-primary);
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    padding: 10px;
    border-radius: 25%;

    &:hover {
      background: var(--color-primary__dark);
      font-weight: 600;
    }
  }
</style>
