export default function showPartialPhone(
  value: string | undefined,
  showFrom: number = 8,
  showEnd: number = 5,
) {
  if (!value) {
    return '';
  }

  return (
    value.slice(0, showFrom) +
    '*'.repeat(value.length - showEnd - showFrom) +
    value.slice(-showEnd)
  );
}
