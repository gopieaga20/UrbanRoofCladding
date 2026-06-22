export interface Project {
  id: string;
  name: string;
  type: string;
  description: string;
  status: 'Completed' | 'Ongoing';
  images: string[];
  created_at: string;
}

export type ProjectInsert = Omit<Project, 'id' | 'created_at'>;
