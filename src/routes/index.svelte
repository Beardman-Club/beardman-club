<script lang='ts'>
	import { slide } from 'svelte/transition';
	import tenFounders from '/assets/images/10_founders.png';
	import BeardmansGrid from '../components/Beardman/BeardmansGrid.svelte';
	import Text from '../components/UI/Text.svelte';
	import Button from '../components/UI/Button.svelte';
</script>

<main transition:slide>
	<div class='text'>
		<h1>Welcome to the Beardman Club !</h1>
		<div class='ten-founders'>
			<img src='{tenFounders}' alt='Ten founders.'>
		</div>
		<Text textAlign='center'>
			The Beardman Club is a club about the Mystic Beard. This is the beard that unites us against our enemies of
			all time. A group of ten Beardman fighting for their life deep in the forest found a temple inside the dark
			mountain. They found a old script talking about the mystical beard fighting the enemies.
		</Text>
		<div class='button'>
			<Button href='https://solsea.io/collection/61349862c380013a65a17a7b' targetBlank>Collection</Button>
		</div>
	</div>

	<BeardmansGrid />

	<div class='text'>
		<Text>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
			Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</Text>
	</div>
</main>

<style lang='scss'>
  main {
    margin: 50px var(--container-marge);

    .ten-founders {
      display: flex;
      justify-content: center;
      align-items: center;
			margin: 40px;
    }

    .text {
      margin-bottom: 50px;

      h1 {
        font-size: 3rem;
        text-align: center;
      }

      &:last-of-type {
        margin-top: 50px;
      }
    }

    .button {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
