# MemeCoinForge - Base Mini App

Rapidly design, launch, and manage meme coins on Base with integrated Kimbo burn and Farcaster social tools.

## Features

- 🚀 **Simplified Token Launchpad** - Deploy meme coins in minutes
- 🔥 **Kimbo Burn Integration** - Transparent burn mechanics on every transaction
- ⚡ **Gasless Transactions** - Sponsored gas fees for seamless UX
- 👥 **Social Distribution** - Launch with Farcaster Frames
- 📊 **Real-time Analytics** - Track burns, holders, and transactions
- 🎨 **Custom Branding** - Unique visual identity for your tokens

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2 on Ethereum)
- **Wallet Integration**: OnchainKit, Coinbase Wallet
- **Social**: Farcaster Mini App SDK
- **Styling**: Tailwind CSS with BASE theme
- **Type Safety**: TypeScript

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   ```
   Then add your OnchainKit API key and other credentials.

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
memecoinforge-base-miniapp/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Main landing page
│   ├── providers.tsx       # OnchainKit & React Query providers
│   └── globals.css         # Global styles with BASE theme
├── components/
│   ├── ConnectWallet.tsx   # Wallet connection component
│   ├── HeroSection.tsx     # Hero section with CTA
│   ├── FeatureCard.tsx     # Feature showcase cards
│   ├── StatsCard.tsx       # Statistics display
│   └── CreateTokenButton.tsx # Token creation CTA
├── public/
│   └── .well-known/
│       └── farcaster.json  # Farcaster manifest
└── package.json
```

## Key Integrations

### OnchainKit
- Wallet connection and management
- Transaction handling with gas sponsorship
- Identity components (Avatar, Name, Badge)

### Farcaster Mini App SDK
- User authentication via FID
- Frame creation and sharing
- Push notifications
- Social primitives

### Base Network
- Chain ID: 8453 (mainnet), 84532 (testnet)
- RPC: https://mainnet.base.org
- Explorer: https://basescan.org

## Design System

The app uses the **BASE theme** with:
- Dark blue background (#0a1929)
- Light text (#e3f2fd)
- Base blue accents (#0052ff)
- Rounded borders and smooth animations
- Glass morphism effects
- Fire and coin visual metaphors

## Development

### Building for Production
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## License

MIT

## Support

For issues and questions:
- GitHub Issues
- Discord Community
- Documentation: https://docs.base.org
