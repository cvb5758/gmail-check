import { useMutation, useQueryClient } from 'react-query';
import { AddTag, DeleteTag, ToggleTag } from '@/lib/Tag';

export function useTagActions() {
  const queryClient = useQueryClient();

  const toggleTagSelection = useMutation(ToggleTag, {
    onSuccess: () => queryClient.invalidateQueries('tags'),
  });

  const deleteTag = useMutation(DeleteTag, {
    onSuccess: () => queryClient.invalidateQueries('tags'),
  });

  const addTag = useMutation(AddTag, {
    onSuccess: () => queryClient.invalidateQueries('tags'),
  });

  return { addTag, deleteTag, toggleTagSelection };
}
