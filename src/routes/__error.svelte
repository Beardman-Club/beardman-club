<main>
	<div class='error-card'>
		<h1>Woops,</h1>
		<h2>Something wrong happened...</h2>
	</div>
</main>

<style lang='scss'>
  main {
    min-height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;


    .error-card {
      background: var(--color-primary);
      box-shadow: 9px 5px 15px 7px #343434;
      border-radius: 20px;
      padding: 100px;
			text-align: center;

      h1 {
        font-size: 4rem;
        color: var(--background-color__light);
      }

      h2 {
				font-size: 3rem;
        color: var(--background-color__light);
      }

			&:hover {
				position: relative;
				bottom: 10px;
			}
    }
  }
</style>
