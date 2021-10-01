<script lang='ts'>
	import Button from '../UI/Button.svelte';

	export let url: string,
		name: string,
		price: number,
		link: string,
		isSoldOut: boolean;
</script>

<div class='beardman-card'>
	<a href='{link}' target='_blank'><img src='{url}' alt='{name}'></a>

	<h3>{name}</h3>
	{#if isSoldOut}
		<div class='sold-out'>
			<h3>SOLD OUT</h3>
		</div>
	{:else }
		<h4>{price}</h4>
		<div class='button'>
			<Button href='{link}' targetBlank>Buy !</Button>
		</div>
	{/if}
</div>

<style lang='scss'>
  .beardman-card {
    background: #e3e3e3;
    box-shadow: 3px 4px 12px 3px #565656;
    border-radius: 20px;
		bottom: 0;
    transition: bottom 0.25s ease-in-out;

    &:hover {
      position: relative;
      bottom: 10px;
    }
  }

  .sold-out {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;

    h3 {
      color: red;
      font-weight: 600;
    }

    @media (max-width: 700px) {
      padding-bottom: 20px;
    }
  }

  h3, h4 {
    color: var(--background-color);
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
  }


  .button {
    display: flex;
    justify-content: center;
    margin: 20px auto;
  }

  img {
    border-radius: 20px 20px 0 0;
    width: 250px;
  }
</style>
