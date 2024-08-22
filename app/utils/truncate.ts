export default function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  }

  const truncatedText = text.slice(0, maxLength + 1);
  const lastSpaceIndex = truncatedText.lastIndexOf(" ");

  // If there are no spaces, return the truncated text as is
  if (lastSpaceIndex === -1) {
    return text.slice(0, maxLength) + "...";
  }

  // Return the truncated text up to the last space and add ellipsis
  return truncatedText.slice(0, lastSpaceIndex) + "...";
}
