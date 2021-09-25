import { writable } from 'svelte/store';

export interface Beardman {
	name: string,
	imageUrl: string,
	price: string,
	link: string,
}

export const beardmansStore = writable([
	{
		'name': 'Beardman 1',
		'imageUrl': '/assets/images/pixil-frame-0.png',
		'price': '1 SOL',
		'link': 'https://solsea.io/collection/61349862c380013a65a17a7b'
	},
	{
		'name': 'Beardman 2',
		'imageUrl': '/assets/images/pixil-frame-0_1.png',
		'price': '1 SOL',
		'link': 'https://solsea.io/collection/61349862c380013a65a17a7b'
	},
	{
		'name': 'Beardman 3',
		'imageUrl': '/assets/images/pixil-frame-0_2.png',
		'price': '1 SOL',
		'link': 'https://solsea.io/collection/61349862c380013a65a17a7b'
	},
	{
		'name': 'Beardman 4',
		'imageUrl': '/assets/images/pixil-frame-0_3.png',
		'price': '1 SOL',
		'link': 'https://solsea.io/collection/61349862c380013a65a17a7b'
	},
	{
		'name': 'Beardman 5',
		'imageUrl': '/assets/images/pixil-frame-0_4.png',
		'price': '1 SOL',
		'link': 'https://solsea.io/collection/61349862c380013a65a17a7b'
	},
	{
		'name': 'Beardman 6',
		'imageUrl': '/assets/images/pixil-frame-0_5.png',
		'price': '1 SOL',
		'link': 'https://solsea.io/collection/61349862c380013a65a17a7b'
	},
	{
		'name': 'Beardman 7',
		'imageUrl': '/assets/images/pixil-frame-0_6.png',
		'price': '1 SOL',
		'link': 'https://solsea.io/collection/61349862c380013a65a17a7b'
	},
	{
		'name': 'Beardman 8',
		'imageUrl': '/assets/images/pixil-frame-0_7.png',
		'price': '1 SOL',
		'link': 'https://solsea.io/collection/61349862c380013a65a17a7b'
	},
	{
		'name': 'Beardman 9',
		'imageUrl': '/assets/images/pixil-frame-0_8.png',
		'price': '1 SOL',
		'link': 'https://solsea.io/collection/61349862c380013a65a17a7b'
	},
	{
		'name': 'Beardman 10',
		'imageUrl': '/assets/images/pixil-frame-0_9.png',
		'price': '1 SOL',
		'link': 'https://solsea.io/collection/61349862c380013a65a17a7b'
	}
]);
