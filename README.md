# @voluspa/ui

A collection of high-quality React components styled with Tailwind CSS for building modern web interfaces.

## Features

- **Modular Components:** Easily import only what you need.
- **Tailwind Integration:** Components are styled with Tailwind CSS for rapid UI development.
- **TypeScript Support:** Written in TypeScript for type safety and enhanced developer experience.

## Installation

Install the package via npm:

```zsh
npm install @voluspa/ui
```

Or via Bun:

```zsh
bun add @voluspa/ui
```

## Usage

Import the component you need from the package. For example, to use the button component:

```tsx
import { Button } from '@voluspa/ui/button';

function App() {
  return <Button>Click Me</Button>;
}

export default App;
```

## Development

To work on this project locally, follow these steps:

1. Clone the repo: `git clone https://github.com/voluspa-labs/ui.git`
2. Install dependencies: `bun install`

For building the package, run: `bun run build`

The built files will be output to the dist directory as defined in package.json.

## Tailwind CSS Configuration

For more details on configuring Tailwind CSS with this package, please refer to the [Tailwind CSS docs](https://tailwindcss.com/docs/detecting-classes-in-source-files#explicitly-registering-sources).

## License

This project is licensed under the BSL-1.0 License. See the LICENSE file for more details.
