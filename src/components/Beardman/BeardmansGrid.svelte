<script>
	import beardman1 from '/assets/images/pixil-frame-0.png';
	import beardman2 from '/assets/images/pixil-frame-0_1.png';
	import beardman3 from '/assets/images/pixil-frame-0_2.png';
	import beardman4 from '/assets/images/pixil-frame-0_3.png';
	import beardman5 from '/assets/images/pixil-frame-0_4.png';
	import beardman6 from '/assets/images/pixil-frame-0_5.png';
	import beardman7 from '/assets/images/pixil-frame-0_6.png';
	import beardman8 from '/assets/images/pixil-frame-0_7.png';
	import beardman9 from '/assets/images/pixil-frame-0_8.png';
	import beardman10 from '/assets/images/pixil-frame-0_9.png';

	import BearmanCard from './BearmanCard.svelte';
</script>

<div>
	<BearmanCard name='Beardman 1' url='{beardman1}' price='1 SOL' />
	<BearmanCard name='Beardman 2' url='{beardman2}' price='1 SOL' />
	<BearmanCard name='Beardman 3' url='{beardman3}' price='1 SOL' />
	<BearmanCard name='Beardman 4' url='{beardman4}' price='1 SOL' />
	<BearmanCard name='Beardman 5' url='{beardman5}' price='1 SOL' />
	<BearmanCard name='Beardman 6' url='{beardman6}' price='1 SOL' />
	<BearmanCard name='Beardman 7' url='{beardman7}' price='1 SOL' />
	<BearmanCard name='Beardman 8' url='{beardman8}' price='1 SOL' />
	<BearmanCard name='Beardman 9' url='{beardman9}' price='1 SOL' />
	<BearmanCard name='Beardman 10' url='{beardman10}' price='1 SOL' />
</div>

<style>
    div {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        justify-items: center;
        gap: 50px;
    }

    @media (max-width: 1600px) {
        div {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    @media (max-width: 1300px) {
        div {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (max-width: 1000px) {
        div {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (max-width: 700px) {
        div {
            grid-template-columns:  1fr;
        }
    }
</style>
