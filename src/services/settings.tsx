export async function getSettings() {
  const settingsFromBack = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${localStorage.getItem('userId')}/settings`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      Accept: 'application/json',
    },
  });
  if (settingsFromBack.status !== 200) return { error: 'Failed to get settings' };
  const content = await settingsFromBack.json();
  return content;
}

interface UserSettings {
    wordsPerDay: number,
    optional: {
     cardsPerDay:number;

    }
  }

export async function createSettings(settings:UserSettings) { // settings:{ "wordsPerDay": 20, "optional": {cardsPerDay: 10, ...} }
  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${localStorage.getItem('userId')}/settings`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(settings),
    });
  if (rawResponse.status !== 200) return { error: 'Failed to get words' };
  const content = await rawResponse.json();
  return content;
}
