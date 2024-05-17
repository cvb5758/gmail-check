export const AddTag = async (name: string) => {
  try {
    const response = await fetch('/api/tags', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });

    console.log('Response from adding tag:', response);

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error('Failed to add tag:', error);
    return null;
  }
};

export const fetchTags = async () => {
  try {
    const response = await fetch('/api/tags', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const tags = await response.json();
      return tags;
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error('Failed to fetch tags:', error);
    return null;
  }
};

export const DeleteTag = async (name: string) => {
  try {
    const response = await fetch('/api/tags', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error('Failed to delete tag:', error);
    return null;
  }
};

export const ToggleTag = async (tagId: string) => {
  console.log('Toggling tag:', tagId);
  try {
    const response = await fetch('/api/tags/toggle', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: tagId }),
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error('Failed to toggle tag:', error);
    return null;
  }
};
