import FileSaver from 'file-saver';

import { surpriseMePrompts } from '../constants/surprisePrompts';

// Choose a prompt randomly from the surpriseMePrompts array
export function getRandomPrompt(prompt) {
	const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
	const randomPrompt = surpriseMePrompts[randomIndex];

	// Avoid getting the same prompt multiple times in a row
	if (randomPrompt === prompt) return getRandomPrompt(prompt);

	return randomPrompt;
}

// Image download handler
export async function downloadImage(_id, photo) {
	FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
