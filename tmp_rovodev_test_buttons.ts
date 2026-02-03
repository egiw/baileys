/**
 * Test file for Button Messages (Tier 1)
 * This is a temporary test to verify button implementation
 */

import { generateWAMessageContent } from './src/Utils/messages.js'
import type { ButtonsMessageContent, TemplateMessageContent } from './src/Types/Message.js'

// Mock options for testing
const mockOptions = {
	upload: async () => ({ mediaUrl: '', directPath: '' }),
	logger: console
}

async function testButtonMessages() {
	console.log('🧪 Testing Button Messages Implementation...\n')

	// Test 1: Regular Button Message
	console.log('1️⃣ Testing Regular Button Message:')
	try {
		const buttonMessage: ButtonsMessageContent = {
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

		const result = await generateWAMessageContent(
			{ buttons: buttonMessage },
			mockOptions as any
		)

		console.log('✅ Regular Button Message generated successfully!')
		console.log('Content:', JSON.stringify(result.buttonsMessage, null, 2))
	} catch (error) {
		console.error('❌ Regular Button Message failed:', error)
	}

	// Test 2: Template Button Message
	console.log('\n2️⃣ Testing Template Button Message:')
	try {
		const templateMessage: TemplateMessageContent = {
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
						url: 'https://github.com/WhiskeySockets/Baileys'
					}
				},
				{
					index: 3,
					callButton: {
						displayText: 'Call Us',
						phoneNumber: '+1234567890'
					}
				}
			]
		}

		const result = await generateWAMessageContent(
			{ templateButtons: templateMessage },
			mockOptions as any
		)

		console.log('✅ Template Button Message generated successfully!')
		console.log('Content:', JSON.stringify(result.templateMessage?.hydratedTemplate, null, 2))
	} catch (error) {
		console.error('❌ Template Button Message failed:', error)
	}

	console.log('\n✨ All tests completed!')
}

// Run tests
testButtonMessages().catch(console.error)
