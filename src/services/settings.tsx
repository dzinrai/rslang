export async function getSettings() {
  const settingsFromBack = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${localStorage.getItem('userId')}/settings`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      Accept: 'application/json',
    },
  });

  if (settingsFromBack.status === 404) {
    throw new Error('Not found settings');
  }

  if (settingsFromBack.status !== 200) return { error: 'Failed to get settings' };

  const content = await settingsFromBack.json();

  return content;
}

export interface UserSettings {
    wordsPerDay: number,
    optional: {
      isUserOfOurSuperDuperApp:boolean;
      lastVisit:any;
     cardsPerDay:number;
     wordTranscription:boolean;
     spellingOutSentence:boolean;
     picture: boolean;
     sentenceExample:boolean;
     translateDescription:boolean;
     showResultButton:boolean;
     moveToDifficult:boolean;
     deleteWord: boolean;
     difficultyButtons:boolean;
    }
  }


export async function createSettings(settings: UserSettings) {
  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${localStorage.getItem('userId')}/settings`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(settings),
  });

export async function createSettings(settings:UserSettings) {
  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${localStorage.getItem('userId')}/settings`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ wordsPerDay: settings.wordsPerDay, optional: settings.optional }),
    });

  if (rawResponse.status !== 200) return { error: 'Failed to get words' };

  const content = await rawResponse.json();

  return content;
}
