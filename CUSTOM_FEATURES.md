# 🚀 Baileys Custom v7 - Interactive Messages Features

Custom build of Baileys with support for modern WhatsApp interactive messages including buttons, lists, and carousels.

## 📦 Version Information

- **Package**: `@egiw/baileys`
- **Version**: `7.0.0-rc.9`
- **Base**: WhiskeySockets/Baileys
- **Custom Features**: Button, Interactive & Carousel Messages

## ✨ Features Implemented

### 📦 Tier 1: Button Messages

#### Regular Button Messages
- Up to 3 buttons per message
- Custom button IDs and display text
- Footer text support

```javascript
await sock.sendMessage(jid, {
    buttons: {
        text: 'Choose an option:',
        footer: 'Footer text',
        buttons: [
            { buttonId: 'btn1', buttonText: { displayText: 'Option 1' }, type: 1 },
            { buttonId: 'btn2', buttonText: { displayText: 'Option 2' }, type: 1 }
        ]
    }
})
```

#### Template Button Messages
- Quick Reply Buttons
- URL Buttons
- Call Buttons
- Support for mixed button types

```javascript
await sock.sendMessage(jid, {
    templateButtons: {
        text: 'Welcome!',
        footer: 'Choose an action',
        templateButtons: [
            { index: 1, quickReplyButton: { displayText: 'Quick Reply', id: 'qr1' } },
            { index: 2, urlButton: { displayText: 'Visit', url: 'https://example.com' } },
            { index: 3, callButton: { displayText: 'Call', phoneNumber: '+1234567890' } }
        ]
    }
})
```

### ⚡ Tier 2: Interactive Messages

#### Native Flow Messages
Modern interactive messages with helper functions:

```javascript
import { createQuickReplyButton, createUrlButton, createCallButton, createCopyButton } from '@egiw/baileys'

await sock.sendMessage(jid, {
    interactiveMessage: {
        header: { title: 'Welcome!' },
        body: { text: 'Choose an action:' },
        footer: { text: 'Powered by Baileys' },
        nativeFlowMessage: {
            buttons: [
                createQuickReplyButton('🛒 Shop', 'shop'),
                createUrlButton('🌐 Website', 'https://example.com'),
                createCallButton('📞 Call', '+1234567890'),
                createCopyButton('📋 Copy', 'CODE123')
            ],
            messageVersion: 3
        }
    }
})
```

#### List Messages
Sectioned list messages with multiple options:

```javascript
await sock.sendMessage(jid, {
    listMessage: {
        header: 'Choose a Product',
        body: 'Select from available products',
        footer: 'Best deals',
        buttonText: 'View Products',
        sections: [
            {
                title: 'Electronics',
                rows: [
                    { title: 'Smartphone', description: 'Latest model', rowId: 'phone_001' },
                    { title: 'Laptop', description: 'High performance', rowId: 'laptop_001' }
                ]
            },
            {
                title: 'Fashion',
                rows: [
                    { title: 'T-Shirt', description: 'Premium cotton', rowId: 'tshirt_001' }
                ]
            }
        ]
    }
})
```

### 🎠 Tier 3: Carousel Messages

Horizontal scrolling carousel with multiple cards:

```javascript
await sock.sendMessage(jid, {
    carouselMessage: {
        cards: [
            {
                header: { title: 'Product 1' },
                body: { text: 'Amazing product\n💰 $99' },
                footer: { text: 'Limited stock' },
                nativeFlowMessage: {
                    buttons: [
                        createQuickReplyButton('🛒 Buy', 'buy_1'),
                        createUrlButton('📋 Details', 'https://example.com/p1')
                    ]
                }
            },
            {
                header: { title: 'Product 2' },
                body: { text: 'Great product\n💰 $149' },
                footer: { text: 'Best seller' },
                nativeFlowMessage: {
                    buttons: [
                        createQuickReplyButton('🛒 Buy', 'buy_2'),
                        createUrlButton('📋 Details', 'https://example.com/p2')
                    ]
                }
            }
        ],
        messageVersion: 2,
        carouselCardType: 1 // HSCROLL_CARDS
    }
})
```

## 🎯 Helper Functions

### Button Creators

```javascript
// Quick Reply Button
createQuickReplyButton(displayText, id)

// URL Button
createUrlButton(displayText, url)

// Call Button
createCallButton(displayText, phoneNumber)

// Copy Code Button
createCopyButton(displayText, copyCode)
```

## 📝 Type Definitions

All message types are fully typed with TypeScript:

- `ButtonsMessageContent`
- `TemplateMessageContent`
- `InteractiveMessageContent`
- `ListMessageContent`
- `CarouselMessageContent`
- `NativeFlowButton`
- `Button`
- `TemplateButton`

## 🔧 Installation

```bash
npm install @egiw/baileys
```

## 🧪 Testing

All features have been comprehensively tested:

- ✅ 14/14 tests passed
- ✅ 100% success rate
- ✅ All message types working
- ✅ All button types functional

## 📚 Documentation References

For complete implementation details and examples, see:
- `examples.md` - Code examples for all message types
- `implementation_plan.md` - Technical implementation details
- `tasks.md` - Task breakdown and development guide

## 🙏 Credits

- Original Baileys library: [WhiskeySockets/Baileys](https://github.com/WhiskeySockets/Baileys)
- Custom modifications by: egiw

## 📄 License

MIT License (same as original Baileys)

---

**Note**: This is a custom build with additional features. For the official Baileys library, visit the [original repository](https://github.com/WhiskeySockets/Baileys).
