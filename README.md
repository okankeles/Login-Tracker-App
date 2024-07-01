# Login Tracker App

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Code Explanation

### Home Component

This component renders a login page with tracking for mouse movements, clicks, and key presses. Here's a breakdown of the main features:

1. **State Management**:
    - `email`: Stores the user's email.
    - `password`: Stores the user's password.
    - `textNotRobot`: Stores the text input for the "I'm not a robot" check.
    - `notRobot`: Boolean state for the checkbox.
    - `mouseMoves`, `mouseClicks`, `keyPresses`: Arrays to store respective events.

2. **Event Handlers**:
    - `handleLogin`: Logs the current state values to the console.
    - `trackMouseMove`: Adds mouse move events to the `mouseMoves` state.
    - `trackClick`: Adds click events to the `mouseClicks` state.
    - `trackKeyPress`: Adds key press events to the `keyPresses` state.

3. **Event Listeners**:
    - `useEffect`: Adds event listeners for `mousemove`, `click`, and `keydown` events on component mount and removes them on unmount.

4. **UI Components**:
    - `TextField`: For email, password, and "I'm not a robot" text input.
    - `Checkbox`: For "I'm not a robot" confirmation.
    - `Button`: To trigger the login action.


