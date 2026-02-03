/**
 * Test file for Carousel Messages (Tier 3)
 */

import { generateWAMessageContent, createQuickReplyButton, createUrlButton } from './lib/Utils/messages.js'

console.log('🧪 Testing Tier 3: Carousel Messages...\n')

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
	// Test 1: Basic Carousel Message
	console.log('1️⃣ Testing Basic Carousel Message (3 cards):')
	try {
		const result = await generateWAMessageContent(
			{
				carouselMessage: {
					cards: [
						{
							header: {
								title: 'Product 1 - Smartphone'
							},
							body: {
								text: 'Latest model with amazing features\n💰 Price: $999'
							},
							footer: {
								text: 'Limited stock available'
							},
							nativeFlowMessage: {
								buttons: [
									createQuickReplyButton('🛒 Buy Now', 'buy_product_1'),
									createUrlButton('📋 Details', 'https://example.com/product1')
								]
							}
						},
						{
							header: {
								title: 'Product 2 - Laptop'
							},
							body: {
								text: 'High performance laptop for professionals\n💰 Price: $1499'
							},
							footer: {
								text: 'Free shipping'
							},
							nativeFlowMessage: {
								buttons: [
									createQuickReplyButton('🛒 Buy Now', 'buy_product_2'),
									createUrlButton('📋 Details', 'https://example.com/product2')
								]
							}
						},
						{
							header: {
								title: 'Product 3 - Headphones'
							},
							body: {
								text: 'Premium noise-cancelling headphones\n💰 Price: $299'
							},
							footer: {
								text: 'Best seller'
							},
							nativeFlowMessage: {
								buttons: [
									createQuickReplyButton('🛒 Buy Now', 'buy_product_3'),
									createUrlButton('📋 Details', 'https://example.com/product3')
								]
							}
						}
					],
					messageVersion: 2,
					carouselCardType: 1 // HSCROLL_CARDS
				}
			},
			mockOptions
		)

		if (result.viewOnceMessage?.message?.interactiveMessage?.carouselMessage) {
			const carousel = result.viewOnceMessage.message.interactiveMessage.carouselMessage
			console.log('✅ Carousel Message generated!')
			console.log('  - Total Cards:', carousel.cards?.length)
			console.log('  - Card 1 Title:', carousel.cards?.[0]?.header?.title)
			console.log('  - Card 1 Body:', carousel.cards?.[0]?.body?.text?.substring(0, 30) + '...')
			console.log('  - Card 1 Buttons:', carousel.cards?.[0]?.nativeFlowMessage?.buttons?.length)
			console.log('  - Message Version:', carousel.messageVersion)
			console.log('  - Card Type:', carousel.carouselCardType === 1 ? 'HSCROLL_CARDS' : 'IMAGE_CARDS')
		} else {
			console.log('❌ carouselMessage not found')
		}
	} catch (error) {
		console.error('❌ Error:', error.message)
	}

	// Test 2: Simple Carousel (minimal config)
	console.log('\n2️⃣ Testing Simple Carousel (2 cards, minimal):')
	try {
		const result = await generateWAMessageContent(
			{
				carouselMessage: {
					cards: [
						{
							body: {
								text: 'Option A\nChoose this for feature X'
							},
							nativeFlowMessage: {
								buttons: [
									createQuickReplyButton('Select A', 'option_a')
								]
							}
						},
						{
							body: {
								text: 'Option B\nChoose this for feature Y'
							},
							nativeFlowMessage: {
								buttons: [
									createQuickReplyButton('Select B', 'option_b')
								]
							}
						}
					]
				}
			},
			mockOptions
		)

		if (result.viewOnceMessage?.message?.interactiveMessage?.carouselMessage) {
			const carousel = result.viewOnceMessage.message.interactiveMessage.carouselMessage
			console.log('✅ Simple Carousel generated!')
			console.log('  - Total Cards:', carousel.cards?.length)
			console.log('  - Default Message Version:', carousel.messageVersion)
			console.log('  - Default Card Type:', carousel.carouselCardType)
		} else {
			console.log('❌ carouselMessage not found')
		}
	} catch (error) {
		console.error('❌ Error:', error.message)
	}

	// Test 3: Carousel with multiple button types
	console.log('\n3️⃣ Testing Carousel with Mixed Button Types:')
	try {
		const result = await generateWAMessageContent(
			{
				carouselMessage: {
					cards: [
						{
							header: {
								title: 'Contact Support'
							},
							body: {
								text: 'Get help from our team'
							},
							nativeFlowMessage: {
								buttons: [
									createQuickReplyButton('💬 Chat', 'chat_support'),
									createUrlButton('📧 Email', 'mailto:support@example.com')
								]
							}
						},
						{
							header: {
								title: 'Visit Us'
							},
							body: {
								text: 'Find our locations and hours'
							},
							nativeFlowMessage: {
								buttons: [
									createUrlButton('🗺️ Map', 'https://maps.google.com'),
									createQuickReplyButton('📍 Nearest', 'nearest_location')
								]
							}
						}
					],
					messageVersion: 2
				}
			},
			mockOptions
		)

		if (result.viewOnceMessage?.message?.interactiveMessage?.carouselMessage) {
			console.log('✅ Mixed Button Carousel generated!')
			const carousel = result.viewOnceMessage.message.interactiveMessage.carouselMessage
			console.log('  - Total Cards:', carousel.cards?.length)
			
			// Parse button types
			const card1Btn1 = JSON.parse(carousel.cards?.[0]?.nativeFlowMessage?.buttons?.[0]?.buttonParamsJson || '{}')
			console.log('  - Card 1, Button 1 Type:', carousel.cards?.[0]?.nativeFlowMessage?.buttons?.[0]?.name)
			console.log('  - Card 1, Button 1 Text:', card1Btn1.display_text)
		} else {
			console.log('❌ carouselMessage not found')
		}
	} catch (error) {
		console.error('❌ Error:', error.message)
	}

	console.log('\n✨ Tier 3 tests completed!')
}

test().catch(console.error)
