# irlua
Simple app that has english ukrainian and irish basic words and phrases
## File: `README.md`

```markdown
# Irish-English-Ukrainian Learning App 🇮🇪 🇺🇦

A trilingual vocabulary learning application helping Ukrainian speakers and international learners master essential English for daily life in Ireland, with Irish (Gaeilge) translations.

## Features

- 🗣️ **293 Essential Words** across 14 categories
- 🎯 **Three Learning Modes**: Browse, Flashcards, Quiz
- 🔊 **Audio Pronunciation** for English, Irish, and Ukrainian
- ✅ **Progress Tracking** with learned word markers
- 🔍 **Search & Filter** by category or keyword
- 📱 **Fully Responsive** design for mobile, tablet, desktop

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

### Option 1: GitHub Integration (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Web Speech API** - Audio pronunciation

## Perfect For

- Ukrainian refugees learning English in Ireland
- International protection applicants
- Gaeltacht region language learners
- English language training programs
- Anyone learning Irish alongside English

## License

MIT

## Acknowledgments

Created for language learners in Donegal's Gaeltacht regions and throughout Ireland.
```

---

## Deployment Instructions

### Quick Start:

```bash
# 1. Create project folder and navigate to it
mkdir irish-english-learner
cd irish-english-learner

# 2. Create all the files above with their contents

# 3. Initialize npm and install dependencies
npm init -y
npm install react react-dom next lucide-react
npm install -D typescript @types/react @types/node tailwindcss postcss autoprefixer eslint eslint-config-next

# 4. Initialize Tailwind CSS
npx tailwindcss init -p

# 5. Test locally
npm run dev

# 6. Deploy to Vercel
npx vercel
```

Your app will be live on Vercel in minutes! 🚀

