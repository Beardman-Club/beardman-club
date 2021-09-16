<script>
	import beardman1 from '/static/assets/images/pixil-frame-0.png';
	import beardman2 from '/static/assets/images/pixil-frame-0_1.png';
	import beardman3 from '/static/assets/images/pixil-frame-0_2.png';
	import beardman4 from '/static/assets/images/pixil-frame-0_3.png';
	import beardman5 from '/static/assets/images/pixil-frame-0_4.png';
	import beardman6 from '/static/assets/images/pixil-frame-0_5.png';
	import beardman7 from '/static/assets/images/pixil-frame-0_6.png';
	import beardman8 from '/static/assets/images/pixil-frame-0_7.png';
	import beardman9 from '/static/assets/images/pixil-frame-0_8.png';
	import beardman10 from '/static/assets/images/pixil-frame-0_9.png';

	import BearmanCard from './BearmanCard.svelte';
</script>

<div>
	<BearmanCard name='Beardman 1' url='{beardman1}' />
	<BearmanCard name='Beardman 2' url='{beardman2}' />
	<BearmanCard name='Beardman 3' url='{beardman3}' />
	<BearmanCard name='Beardman 4' url='{beardman4}' />
	<BearmanCard name='Beardman 5' url='{beardman5}' />
	<BearmanCard name='Beardman 6' url='{beardman6}' />
	<BearmanCard name='Beardman 7' url='{beardman7}' />
	<BearmanCard name='Beardman 8' url='{beardman8}' />
	<BearmanCard name='Beardman 9' url='{beardman9}' />
	<BearmanCard name='Beardman 10' url='{beardman10}' />
</div>

<style>
    div {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        justify-items: center;
        gap: 50px;
    }
</style>
