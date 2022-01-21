<script>
  import { beardmansStore } from "../../stores/beardmans.store.js";
  import BeardmanCard from "./BeardmanCard.svelte";
</script>

<div>
  {#each $beardmansStore as beardman, i}
    <BeardmanCard id={i} name={beardman.name} url={beardman.imageUrl} link={beardman.link} price={beardman.price}
                  isSoldOut="{beardman.isSoldOut}" />
  {/each}
</div>

<style lang="scss">
  div {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    gap: 50px;

    @media (max-width: 1600px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 1300px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1000px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 700px) {
      grid-template-columns:  1fr;
    }
  }
</style>
