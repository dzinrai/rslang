/* eslint-disable */
interface UserStatistic{
  learnedWords: number,
  optional: {
    common:{
    wordsToday:number;
    newWordsToday:number;
    lastWord:any;
    weekDay: string;
    dayProgress:number;// wordsToday/wordsTodayPlan
    //(get this one from setting's back)*100% and put it in progress rainbow line style
    // this may be week days progress
    },
    games:{
      speakIt:{
        lastPlay: string;
        words: number;
        percentCorrect:number;// correct/words*100%
      },
      savannah:{
        lastPlay: string;
        words: number;
        percentCorrect:number;
      },
      audioCall:{
        lastPlay: string;
        words: number;
        percentCorrect:number;
      },
      sprint:{
        lastPlay: string;
        words: number;
        percentCorrect:number;
      },
      puzzle:{
        lastPlay: string;
        words: number;
        percentCorrect:number;
      },
      ownGame:{
        lastPlay: string;
        words: number;
        percentCorrect:number;
      },
    }
  }
}

export async function createStatistic(statisticObj:UserStatistic) {
  const statistic = statisticObj;
  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${localStorage.getItem('userId')}/statistics`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ learnedWords: statistic.learnedWords, optional: statistic.optional }),
    });
  console.log(JSON.stringify({ learnedWords: statistic.learnedWords, optional: statistic.optional }));
  if (rawResponse.status !== 200) return { error: 'Failed to get words' };
  const content = await rawResponse.json();
  console.log('new', content);
  return content;
}

export async function getStatistic() {
  const settingsFromBack = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${localStorage.getItem('userId')}/statistics`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      Accept: 'application/json',
    },
  });
  if (settingsFromBack.status === 404) return { error: 'Statistics not found', status: 404 };
  if (settingsFromBack.status !== 200) return { error: 'Failed to get statistic' };
  const content = await settingsFromBack.json();
  return content;
}
