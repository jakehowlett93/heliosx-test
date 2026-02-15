export type Option = {
  label: string;
  value: string;
};
export type Question = {
  id: string;
  name: string;
  label: string;
  options: Option[];
  description: string | null;
};
