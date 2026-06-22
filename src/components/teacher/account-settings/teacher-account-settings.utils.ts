export function formatTeacherEarnings(amount: number) {
  return `৳${amount.toLocaleString("en-IN")}`;
}

export function formatTeacherStatCount(value: number) {
  return value.toString().padStart(2, "0");
}
