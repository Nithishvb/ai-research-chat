export function isOpenAiKeyPresent(): boolean {
  const openAiKey = localStorage.getItem("API_KEY");
  return openAiKey !== null && openAiKey !== undefined && openAiKey.trim() !== "";
}
