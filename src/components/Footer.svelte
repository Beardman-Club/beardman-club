<script lang='ts'>
	import twitterLogo from '/assets/images/twitter.png';
	import discordLogo from '/assets/images/discord-logo-transparent.png';

	const twitterLink: string = 'https://twitter.com/BeardmanClub';
	const discordLink: string = 'https://discord.gg/MjUv4cDt';
	const currentYear = new Date().getFullYear();
</script>

<footer>
	<p class='copyright'>©{currentYear} Beardmans Club | All right reserved.</p>
	<div class='social'>
		<a href='{twitterLink}' target='_blank'><img src='{twitterLogo}' alt='Twitter logo'></a>
		<a href='{discordLink}' target='_blank'><img src='{discordLogo}' alt='Discord logo'></a>
	</div>
</footer>

<style lang='scss'>
  footer {
    background: var(--background-color__light);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 3px black solid;
    padding: 40px var(--container-size);

    p {
      font-size: 1.5rem;
    }

    .social {
      display: flex;
      gap: 20px;

      img {
        width: 80px;

        &:hover {
          position: relative;
          bottom: 5px;
          cursor: pointer;
        }
      }
    }

    @media (max-width: 600px) {
			padding: 40px;
			gap: 40px;
      flex-direction: column;
    }
  }
</style>
