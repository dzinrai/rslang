interface UserStatistic{
        learnedWords: number,
        optional: {
//properties
        }
}

export async function createStatistic(statistic:UserStatistic) {
    const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${localStorage.getItem('userId')}/statistic`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('userToken')}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(statistic),
      });
    if (rawResponse.status !== 200) return { error: 'Failed to get words' };
    const content = await rawResponse.json();
    return content;
  }

  export async function getStatistic() {
    const settingsFromBack = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${localStorage.getItem('userId')}/statistic`, {
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
  