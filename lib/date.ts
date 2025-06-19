export function getCurrentWeekDates(): string[] {
  const today = new Date();
  const currentDay = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
  
  // Calculate Monday of current week
  const monday = new Date(today);
  const daysFromMonday = currentDay === 0 ? 6 : currentDay - 1; // Adjust for Sunday
  monday.setDate(today.getDate() - daysFromMonday);
  
  // Generate array of 7 dates (Mon-Sun)
  const weekDates: string[] = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    weekDates.push(date.toISOString().split('T')[0]); // YYYY-MM-DD format
  }
  
  return weekDates;
}

export function computeWeeklyStatus(historyDates: string[]): boolean[] {
  const weekDates = getCurrentWeekDates();
  const today = new Date().toISOString().split('T')[0];
  
  return weekDates.map(date => {
    // For future dates, always return false
    if (date > today) return false;
    // For past dates, check if in history
    return historyDates.includes(date);
  });
}
