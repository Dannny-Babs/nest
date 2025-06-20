export interface ListItem {
  id: string;
  title: string;
  completed: boolean;
}

export interface List {
  id: string;
  title: string;
  items: ListItem[];
  completed?: boolean;
  progress?: {
    completed: number;
    total: number;
  };
}
