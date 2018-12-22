export default function showPartialEmail(
  value: string | undefined,
  hideMax: number = 4,
) {
  if (!value) {
    return '';
  }

  const atPos = value.indexOf('@');

  return (
    value.slice(0, atPos - hideMax) + '*'.repeat(hideMax) + value.slice(atPos)
  );
}
