export type Email = {
  id: string;
  subject: string;
};

export type Tag = {
  tags: string[];
  selectedTags: Set<string>;
  toggleTagSelection: (tag: string) => void;
  onDeleteTag: (tag: string) => void;
};
