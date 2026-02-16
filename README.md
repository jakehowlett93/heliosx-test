# HeliosX Tech Test

A simple consultation form built in React + Vite that presents questions one at a time. Users can select answers and submit, with a mock hook simulating backend submission.

`npm install` to install dependencies
`npm run dev` to run the app
`npx vitest` to run tests

## Versions:

- Node: v22.12.0
- npm: 10.9.0
- React: 19.2.4

## Tech:

Project built using Vite and React with TypeScript, along with with vitest for testing. No other libraries used beyond whats standard setup for the tech stack.

## Approach:

- Treated the questions as data coming from the backend, and built the ConsultationForm/QuestionCard components to work with this. This approach allows questions to be added / removed / altered easily without requiring changes to the UI code.
- To handle only showing one question at a time I built the ConsultationForm with just one QuestionCard thats props are changed as the user progresses through the form. I chose to do it this way over mapping over all the questions and using css or some other method to conditionally render them as its easier for screen readers to follow.
- State requirements were simple so I stuck with useState
- For the data flow, the component calls a custom hook that handles loading / error / success states (I added some code for illustrative purposes but typically I'd use ReactQuery here), this hook then calls a client that console.logs the data for demonstration (in a real world app this client would handle the fetch and server errors).
- Tests cover the flow of the form, written using Vitest + React Testing Library.
- I went with basic css, I know HeliosX uses Tailwind which I've not used before so I didn't want to add it to the mix given the time limit

## Todos with more time

- A way to track progress
- A previous button
- More tests
