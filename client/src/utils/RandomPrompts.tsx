import { surpriseMePrompts } from "./SurpriseMePrompts";

const getRandomPrompts = (prompt: string[]): string => {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];
  if (prompt.includes(randomPrompt)) {
    return getRandomPrompts(prompt);
  } else {
    return randomPrompt;
  }
};

export default getRandomPrompts;
