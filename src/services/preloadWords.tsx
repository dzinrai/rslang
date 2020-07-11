import getWordsForLibrary from "./getWordsForLibrary";

const preloadWords = async (dispatchWords: any) => {
  const wordsFromBackend = await getWordsForLibrary();
  if (!wordsFromBackend || !wordsFromBackend[0]
    || !wordsFromBackend[0].paginatedResults
    || wordsFromBackend.error) return;
  dispatchWords({ type: 'setWords', value: wordsFromBackend[0].paginatedResults });
};

export default preloadWords;