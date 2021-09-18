<script lang='ts'>
	import twitterLogo from '/assets/images/twitter.png';
	import discordLogo from '/assets/images/discord-logo-transparent.png';

	const twitterLink: string = 'https://twitter.com/BeardmanClub';
	const discordLink: string = 'https://discord.gg/MjUv4cDt';
</script>

<div class='social'>
	<a href='{twitterLink}' target='_blank'><img src='{twitterLogo}' alt='Twitter logo'></a>
	<a href='{discordLink}' target='_blank'><img src='{discordLogo}' alt='Discord logo'></a>
</div>

<style lang='scss'>
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
</style>
