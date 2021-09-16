<script lang='ts'>
	export let url: string,
		name: string,
		price: number,
		link: string = 'https://solsea.io/collection/61349862c380013a65a17a7b';
</script>

<div class='beardman-card'>
	<img src='{url}' alt='{name}'>
	<h3>{name}</h3>
	<h4>{price}</h4>
	<div class='button'>
		<a href='{link}' target='_blank'>Acheter</a>
	</div>
</div>

<style lang='scss'>
  .beardman-card {
    background: #e3e3e3;
    box-shadow: 3px 4px 12px 3px #565656;
    border-radius: 20px;

    &:hover {
      position: relative;
      bottom: 8px;
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

    a {
      background: var(--color-primary);
      color: white;
      text-decoration: none;
      padding: 8px;
      border-radius: 25%;

      &:hover {
        background: var(--color-primary__dark);
      }
    }
  }

  img {
    border-radius: 20px 20px 0 0;
    width: 250px;
  }
</style>
