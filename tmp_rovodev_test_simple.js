/**
 * Simple test for Button Messages types
 */

import { generateWAMessageContent } from './lib/Utils/messages.js'

console.log('🧪 Testing Button Messages Implementation...\n')

// Mock options
const mockOptions = {
	upload: async () => ({ mediaUrl: 'test', directPath: 'test' }),
	logger: {
		debug: () => {},
		info: () => {},
		warn: () => {},
		error: () => {}
	}
}

async function test() {
	// Test 1: Regular Button Message
	console.log('1️⃣ Testing Regular Button Message:')
	try {
		const result = await generateWAMessageContent(
			{
				buttons: {
					text: 'Hello! Choose an option:',
					footer: 'Powered by Baileys Custom',
					buttons: [
						{
							buttonId: 'btn1',
							buttonText: { displayText: 'Option 1' },
							type: 1
						},
						{
							buttonId: 'btn2',
							buttonText: { displayText: 'Option 2' },
							type: 1
						}
					]
				}
			},
			mockOptions
		)

		if (result.buttonsMessage) {
			console.log('✅ Regular Button Message generated!')
			console.log('  - Text:', result.buttonsMessage.contentText)
			console.log('  - Footer:', result.buttonsMessage.footerText)
			console.log('  - Buttons:', result.buttonsMessage.buttons.length)
		} else {
			console.log('❌ buttonsMessage not found in result')
		}
	} catch (error) {
		console.error('❌ Error:', error.message)
	}

	// Test 2: Template Button Message
	console.log('\n2️⃣ Testing Template Button Message:')
	try {
		const result = await generateWAMessageContent(
			{
				templateButtons: {
					text: 'Welcome to our service!',
					footer: 'Choose an action below',
					templateButtons: [
						{
							index: 1,
							quickReplyButton: {
								displayText: 'Quick Reply',
								id: 'qr1'
							}
						},
						{
							index: 2,
							urlButton: {
								displayText: 'Visit Website',
								url: 'https://github.com'
							}
						}
					]
				}
			},
			mockOptions
		)

		if (result.templateMessage) {
			console.log('✅ Template Button Message generated!')
			console.log('  - Text:', result.templateMessage.hydratedTemplate?.hydratedContentText)
			console.log('  - Footer:', result.templateMessage.hydratedTemplate?.hydratedFooterText)
			console.log('  - Buttons:', result.templateMessage.hydratedTemplate?.hydratedButtons?.length)
		} else {
			console.log('❌ templateMessage not found in result')
		}
	} catch (error) {
		console.error('❌ Error:', error.message)
	}

	console.log('\n✨ Tests completed!')
}

test().catch(console.error)
