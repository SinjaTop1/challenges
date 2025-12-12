# The Competence Grid

**Become the kind of person who can handle things.**

A challenge-based system designed to build practical competence across multiple domains: movement, food, systems, fire & shelter, preparation, tools, navigation, and social mindset.

## Features

- **Challenge Library**: 25+ challenges across 8 categories
- **Three Difficulty Levels**: Initiate, Operator, and Survivor
- **Points & Badges System**: Track your progress and earn recognition
- **Self-Paced**: Complete challenges at your own pace throughout the year

## Categories

- 🧭 **Navigation**: Learn to navigate without GPS
- 🔨 **Tools**: Master rope work, woodwork, bicycle maintenance, and more
- 🛡️ **Preparation**: Emergency kits, drills, document prep, and security
- 📚 **Social & Mindset**: Build resilience, panic control, and social skills
- 🔥 **Fire & Shelter**: Fire-making, camping, and shelter building
- 🍖 **Food**: Fishing, cooking, and food security
- ⚙️ **Systems**: Car maintenance, utilities, and electricity basics
- 🚶 **Movement**: Physical challenges and endurance

## Tech Stack

- **React 19** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SinjaTop1/challenges.git
   cd challenges
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This project is configured for deployment on Vercel. Simply connect your GitHub repository to Vercel and it will automatically deploy.

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to Vercel:
   ```bash
   vercel --prod
   ```

## Project Structure

```
├── components/          # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── ChallengeLibrary.tsx
│   ├── PointsAndBadges.tsx
│   ├── JoinSubmit.tsx
│   ├── FAQ.tsx
│   └── Footer.tsx
├── App.tsx             # Main app component
├── constants.tsx       # Challenge data and constants
├── types.ts            # TypeScript type definitions
├── index.tsx           # Entry point
└── vite.config.ts      # Vite configuration
```

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
