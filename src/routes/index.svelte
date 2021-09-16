<script lang='ts'>
  import BeardmansGrid from '../components/Beardman/BeardmansGrid.svelte';
</script>

<main>
    <div class="text">
        <h1>Welcome to the Beardman Club !</h1>
        <p>
            The Beardman Club is a club about the Mystic Beard. This is the beard that unites us against our enemies of
            all time. A group of ten Beardman fighting for their life deep in the forest found a temple inside the dark
            mountain. They found a old script talking about the mystical beard fighting the enemies
        </p>
    </div>

    <BeardmansGrid/>
</main>

<style lang="scss">
  main {
    margin: 50px 80px;

    .text {
      margin-bottom: 50px;

      h1 {
        font-size: 3rem;
        text-align: center;
      }

      p {
        font-size: 1.5rem;
        margin: 20px auto;
        text-align: center;
      }
    }
  }
</style>
