<script lang="ts">
  import Social from "./Social.svelte";

  let currentYear: string | number = new Date().getFullYear();
  if (currentYear > 2021) {
    currentYear = `2021-${currentYear}`;
  }
</script>

<footer>
  <p class="copyright">©{currentYear} Beardmans Club | All rights reserved.</p>

  <Social />
</footer>

<style lang="scss">
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
