import type { Question } from "./types";

export const questions: Question[] = [
  {
    id: "123",
    name: "ageBracket",
    label: "Are you male aged between 18-75?",
    options: [
      { label: "Yes", value: "Yes" },
      { label: "No", value: "No" },
    ],
    description: null,
  },
  {
    id: "234",
    name: "smokeOrDrink",
    label: "Do you smoke or drink?",
    options: [
      { label: "Yes", value: "Yes" },
      { label: "No", value: "No" },
    ],
    description: null,
  },
  {
    id: "345",
    name: "AllergicResponse",
    label: "Have you ever had an allegric response to the Genovian Pear?",
    options: [
      { label: "Yes", value: "Yes" },
      { label: "No", value: "No" },
    ],
    description: null,
  },
  {
    id: "456",
    name: "twoWeekSymptoms",
    label:
      "Do you understand you should stop taking antihistamine tablets and speak to your GP if your symptoms do not improve after 2 weeks of starting treatment?",
    options: [
      { label: "Yes", value: "Yes" },
      { label: "No", value: "No" },
    ],
    description: null,
  },
  {
    id: "567",
    name: "agree",
    label: "Do you agree to the following",
    options: [
      { label: "Yes", value: "Yes" },
      { label: "No", value: "No" },
    ],
    description:
      "You have answered all the above questions accurately and truthfully. You understand our prescribers take your answers in good faith and base their prescribing decisions accordingly, and that incorrect information can be hazardous to your health.",
  },
];
