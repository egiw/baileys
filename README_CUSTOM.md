# @egiw/baileys - Custom Build with Interactive Messages

[![npm version](https://img.shields.io/npm/v/@egiw/baileys.svg)](https://www.npmjs.com/package/@egiw/baileys)
[![Tests](https://img.shields.io/badge/tests-14%2F14%20passed-brightgreen.svg)](.)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

> Custom build of [Baileys](https://github.com/WhiskeySockets/Baileys) with full support for WhatsApp interactive messages including buttons, lists, and carousels.

## 🚀 What's New?

This custom build adds **three tiers** of interactive message support to Baileys:

### 📦 **Tier 1: Button Messages**
- Regular buttons (up to 3 per message)
- Template buttons (Quick Reply, URL, Call)

### ⚡ **Tier 2: Interactive Messages**  
- Native Flow Messages with modern button types
- List Messages with sections and rows
- Helper functions for easy button creation

### 🎠 **Tier 3: Carousel Messages**
- Horizontal scrolling carousel
- Multiple cards with individual buttons
- Support for images, headers, and footers

## 📥 Installation

```bash
npm install @egiw/baileys
```

## 🎯 Quick Start

### Basic Button Message

```javascript
import makeWASocket from '@egiw/baileys'

const sock = makeWASocket({ /* auth config */ })

await sock.sendMessage('1234567890@s.whatsapp.net', {
    buttons: {
        text: 'Choose an option:',
        footer: 'Select one below',
        buttons: [
            { buttonId: 'opt1', buttonText: { displayText: 'Option 1' }, type: 1 },
            { buttonId: 'opt2', buttonText: { displayText: 'Option 2' }, type: 1 }
        ]
    }
})
```

### Interactive Message with Helper Functions

```javascript
import { createQuickReplyButton, createUrlButton } from '@egiw/baileys'

await sock.sendMessage('1234567890@s.whatsapp.net', {
    interactiveMessage: {
        header: { title: 'Welcome!' },
        body: { text: 'What would you like to do?' },
        footer: { text: 'Powered by Baileys Custom' },
        nativeFlowMessage: {
            buttons: [
                createQuickReplyButton('🛒 Shop Now', 'shop'),
                createUrlButton('🌐 Website', 'https://example.com')
            ],
            messageVersion: 3
        }
    }
})
```

### Carousel Message

```javascript
await sock.sendMessage('1234567890@s.whatsapp.net', {
    carouselMessage: {
        cards: [
            {
                header: { title: 'Product 1' },
                body: { text: 'Amazing product\n💰 $99' },
                nativeFlowMessage: {
                    buttons: [createQuickReplyButton('🛒 Buy', 'buy_1')]
                }
            },
            {
                header: { title: 'Product 2' },
                body: { text: 'Great product\n💰 $149' },
                nativeFlowMessage: {
                    buttons: [createQuickReplyButton('🛒 Buy', 'buy_2')]
                }
            }
        ],
        messageVersion: 2
    }
})
```

## 📚 Full Documentation

For complete examples and API reference, see:
- [CUSTOM_FEATURES.md](CUSTOM_FEATURES.md) - Full feature documentation
- [examples.md](examples.md) - Code examples for all message types
- [Original Baileys README](https://github.com/WhiskeySockets/Baileys#readme) - Core Baileys documentation

## 🎨 Available Helper Functions

```javascript
import {
    createQuickReplyButton,
    createUrlButton,
    createCallButton,
    createCopyButton
} from '@egiw/baileys'

// Quick Reply - Standard button with callback
createQuickReplyButton('Display Text', 'button_id')

// URL Button - Opens a link
createUrlButton('Visit Site', 'https://example.com')

// Call Button - Initiates phone call
createCallButton('Call Us', '+1234567890')

// Copy Button - Copies text to clipboard
createCopyButton('Copy Code', 'PROMO123')
```

## 🧪 Testing Status

All features have been thoroughly tested:

```
✅ Tier 1 Tests: 4/4 passed
✅ Tier 2 Tests: 6/6 passed  
✅ Tier 3 Tests: 4/4 passed
━━━━━━━━━━━━━━━━━━━━━━━━━
📊 Total: 14/14 (100%)
```

## 🔄 Keeping Up to Date

This custom build is based on Baileys `7.0.0-rc.9`. To stay updated with upstream changes:

```bash
# Check for updates from upstream
git fetch upstream
git merge upstream/master
```

## 🤝 Contributing

Contributions are welcome! This custom build maintains compatibility with the original Baileys library while adding interactive message features.

## 📄 License

MIT License - same as the original Baileys library

## 🙏 Acknowledgments

- **Original Baileys**: [WhiskeySockets/Baileys](https://github.com/WhiskeySockets/Baileys)
- **Custom Features**: Interactive message support by [@egiw](https://github.com/egiw)

## 🔗 Links

- [NPM Package](https://www.npmjs.com/package/@egiw/baileys)
- [GitHub Repository](https://github.com/egiw/baileys)
- [Original Baileys](https://github.com/WhiskeySockets/Baileys)

---

**Happy coding with interactive WhatsApp messages! 🎉**
