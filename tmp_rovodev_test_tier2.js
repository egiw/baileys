/**
 * Test file for Interactive Messages (Tier 2)
 */

import { generateWAMessageContent, createQuickReplyButton, createUrlButton, createCallButton } from './lib/Utils/messages.js'

console.log('🧪 Testing Tier 2: Interactive Messages...\n')

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
	// Test 1: Interactive Message with Quick Reply Buttons
	console.log('1️⃣ Testing Interactive Message (Quick Reply):')
	try {
		const result = await generateWAMessageContent(
			{
				interactiveMessage: {
					body: {
						text: 'Welcome! What would you like to do?'
					},
					footer: {
						text: 'Powered by Baileys Custom v7'
					},
					nativeFlowMessage: {
						buttons: [
							createQuickReplyButton('🛒 Shop Now', 'shop'),
							createQuickReplyButton('📦 Track Order', 'track'),
							createQuickReplyButton('💬 Support', 'support')
						],
						messageVersion: 3
					}
				}
			},
			mockOptions
		)

		if (result.viewOnceMessage?.message?.interactiveMessage) {
			const interactive = result.viewOnceMessage.message.interactiveMessage
			console.log('✅ Interactive Message generated!')
			console.log('  - Body:', interactive.body.text)
			console.log('  - Footer:', interactive.footer?.text)
			console.log('  - Buttons:', interactive.nativeFlowMessage?.buttons?.length)
			console.log('  - Button 1:', JSON.parse(interactive.nativeFlowMessage?.buttons[0]?.buttonParamsJson || '{}').display_text)
		} else {
			console.log('❌ interactiveMessage not found')
		}
	} catch (error) {
		console.error('❌ Error:', error.message)
	}

	// Test 2: Interactive Message with URL Buttons
	console.log('\n2️⃣ Testing Interactive Message (URL Buttons):')
	try {
		const result = await generateWAMessageContent(
			{
				interactiveMessage: {
					header: {
						title: 'Check Out Our Services'
					},
					body: {
						text: 'Visit our website for more information'
					},
					nativeFlowMessage: {
						buttons: [
							createUrlButton('🌐 Visit Website', 'https://github.com/WhiskeySockets/Baileys'),
							createUrlButton('📱 Download App', 'https://example.com/app')
						],
						messageVersion: 3
					}
				}
			},
			mockOptions
		)

		if (result.viewOnceMessage?.message?.interactiveMessage) {
			const interactive = result.viewOnceMessage.message.interactiveMessage
			console.log('✅ Interactive Message with URL buttons generated!')
			console.log('  - Header:', interactive.header?.title)
			console.log('  - Body:', interactive.body.text)
			console.log('  - Buttons:', interactive.nativeFlowMessage?.buttons?.length)
		} else {
			console.log('❌ interactiveMessage not found')
		}
	} catch (error) {
		console.error('❌ Error:', error.message)
	}

	// Test 3: List Message
	console.log('\n3️⃣ Testing List Message:')
	try {
		const result = await generateWAMessageContent(
			{
				listMessage: {
					header: 'Choose a Product',
					body: 'Select from our available products',
					footer: 'Best deals of the day',
					buttonText: 'View Products',
					sections: [
						{
							title: 'Electronics',
							rows: [
								{
									title: 'Smartphone',
									description: 'Latest model with best features',
									rowId: 'prod_phone_001'
								},
								{
									title: 'Laptop',
									description: 'High performance laptop',
									rowId: 'prod_laptop_001'
								}
							]
						},
						{
							title: 'Fashion',
							rows: [
								{
									title: 'T-Shirt',
									description: 'Premium cotton t-shirt',
									rowId: 'prod_tshirt_001'
								}
							]
						}
					]
				}
			},
			mockOptions
		)

		if (result.viewOnceMessage?.message?.listMessage) {
			const listMsg = result.viewOnceMessage.message.listMessage
			console.log('✅ List Message generated!')
			console.log('  - Header:', listMsg.title)
			console.log('  - Body:', listMsg.description)
			console.log('  - Button Text:', listMsg.buttonText)
			console.log('  - Sections:', listMsg.sections?.length)
			console.log('  - Total Rows:', listMsg.sections?.reduce((sum, s) => sum + (s.rows?.length || 0), 0))
		} else {
			console.log('❌ listMessage not found')
		}
	} catch (error) {
		console.error('❌ Error:', error.message)
	}

	// Test 4: Interactive Message with Call Button
	console.log('\n4️⃣ Testing Interactive Message (Call Button):')
	try {
		const result = await generateWAMessageContent(
			{
				interactiveMessage: {
					body: {
						text: 'Need help? Call us now!'
					},
					nativeFlowMessage: {
						buttons: [
							createCallButton('📞 Call Support', '+1234567890'),
							createQuickReplyButton('💬 Chat Instead', 'chat')
						],
						messageVersion: 3
					}
				}
			},
			mockOptions
		)

		if (result.viewOnceMessage?.message?.interactiveMessage) {
			console.log('✅ Interactive Message with Call button generated!')
			console.log('  - Buttons:', result.viewOnceMessage.message.interactiveMessage.nativeFlowMessage?.buttons?.length)
		} else {
			console.log('❌ interactiveMessage not found')
		}
	} catch (error) {
		console.error('❌ Error:', error.message)
	}

	console.log('\n✨ Tier 2 tests completed!')
}

test().catch(console.error)
