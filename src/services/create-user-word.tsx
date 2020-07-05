import { getWords } from './getWords';

interface WordsGetter {
    page: number;
    group: number;
    wordsPerExampleSentenceLTE: number,
    wordsPerPage: number
}

interface WordsSetter {
  userId: string;
  wordId: string;
  word: UserWord;
}

interface UserWord {
  difficulty: 'easy' | 'normal' | 'hard';
  optional: {
    newWord: boolean;
    views: number;
    errors: number;
    repeat: boolean;
    wordId: string;
  }
}

export async function createUserWord({ userId, wordId, word }: WordsSetter) {

  console.log(`https://afternoon-falls-25894.herokuapp.com/users/${userId}/words/${wordId}`);
  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${userId}/words/${wordId}`
    , {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(word)
    });
  if (rawResponse.status !== 200) return { error: 'Failed to get words' };
}

export async function preloadWords({ page, group, wordsPerExampleSentenceLTE, wordsPerPage }: WordsGetter){
  const wordsFromBackend = await getWords({ page, group, wordsPerExampleSentenceLTE, wordsPerPage});
  wordsFromBackend.forEach((oneWord: any) => {
    createUserWord({
      userId: `${localStorage.getItem('userId')}`,
      wordId: oneWord.id,
      word: { "difficulty": "normal", "optional": { newWord: true, views: 0, errors: 0, repeat: false,  wordId:oneWord.id } }
    })
  })
}