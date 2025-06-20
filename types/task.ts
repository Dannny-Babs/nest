export interface Task {
  id: string;
  title: string;
  dateTime?: string; // e.g. '08:30'
  priority?: 'High' | 'Medium' | 'Low';
  completed?: boolean;
  slot?: 'Morning' | 'Afternoon' | 'Evening' | 'Unscheduled';
  dueDate?: string; // ISO date string
  overdue?: boolean;
}
