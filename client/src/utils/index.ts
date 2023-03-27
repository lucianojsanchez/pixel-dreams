import { surpriseMePrompts } from "./SurpriseMePrompts";
import FileSaver from "file-saver";

export const getRandomPrompts = (prompt: string[]): string => {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];
  if (prompt.includes(randomPrompt)) {
    return getRandomPrompts(prompt);
  } else {
    return randomPrompt;
  }
};

export function downloadImage(_id: number, photo: any) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
