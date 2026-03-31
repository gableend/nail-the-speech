/**
 * Returns a truncated preview of a speech for non-Pro users.
 * Shows the first ~20% of paragraphs (minimum 2 paragraphs).
 */
export function getPreviewText(fullSpeech: string): string {
  const paragraphs = fullSpeech.split(/\n\n+/).filter(p => p.trim().length > 0);

  if (paragraphs.length <= 2) {
    // Very short speech — show first paragraph only
    return paragraphs[0] || '';
  }

  const previewCount = Math.max(2, Math.ceil(paragraphs.length * 0.2));
  return paragraphs.slice(0, previewCount).join('\n\n');
}

/**
 * Returns the word count of the preview portion.
 */
export function getPreviewWordCount(previewText: string): number {
  return previewText.split(/\s+/).filter(w => w.length > 0).length;
}
