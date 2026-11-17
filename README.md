# Expo Calculator — Native Arithmetic Calculator

A simple calculator application built with React Native and Expo. It provides a dark calculator interface with a numeric keypad, arithmetic operator buttons, a display area, and reusable blurred button components.

## Features

- Numeric keypad (0–9).
- Basic arithmetic operators: addition, subtraction, multiplication, and division.
- Clear current display.
- Delete the last entered character.
- Evaluate the current expression and display the result.
- Reusable calculator button component.
- Dark interface with accent colours and Expo Blur styling.
- Expo Router application entry point.

## Technology Stack

- React Native 0.81
- React 19
- Expo SDK 54
- Expo Router 6
- TypeScript
- Expo Blur
- React Navigation

## Project Structure

```text
expo-calculator/
├── app/
│   └── index.tsx             # Calculator screen and keypad logic
├── components/
│   ├── Button.tsx            # Reusable blurred calculator button
│   └── Footer.tsx
├── assets/
├── app.json
├── eas.json
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites
- Node.js and npm
- Expo Go or an Android/iOS development build
- Android emulator, iOS simulator, or a physical device

### Install

```bash
git clone https://github.com/sampatakumar/expo-calculator.git
cd expo-calculator
npm install
```

### Start the app

```bash
npx expo start
```

Platform-specific commands:

```bash
npm run android
npm run ios
npm run web
```

## Important Security and Reliability Note

The current calculator evaluates the display expression using JavaScript `eval()`. This is acceptable only as a limited learning prototype with tightly controlled input, and should be replaced with a safe arithmetic expression parser before accepting arbitrary input. Validate operator sequences, division by zero, and invalid expressions.

## Future Improvements

- [ ] Replace `eval()` with a safe expression parser.
- [ ] Add decimal, sign-change, parentheses, and memory operations.
- [ ] Add calculation history.
- [ ] Add keyboard input support on web.
- [ ] Improve error messages and numeric precision handling.
- [ ] Add unit tests for expression evaluation.
- [ ] Add accessibility labels and responsive tablet layouts.

## License

No root license file was identified. Add a license before permitting reuse.
