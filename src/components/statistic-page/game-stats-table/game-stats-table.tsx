import React from 'react';
import { Table } from 'antd';

interface GameStatsProps{
  data: any,
  title: string
}

function GameStatsPage({ data, title }: GameStatsProps) {
  let dataArray;
  let datesArray;
  switch (title) {
    case 'English Puzzle':
      datesArray = data.optional.games.puzzle.statistics;
      dataArray = data.optional.games.puzzle;
      break;
    case 'Sprint': dataArray = data.optional.games.sprint; break;
    case 'Savannah': dataArray = data.optional.games.savannah; break;
    case 'Speak It': dataArray = data.optional.games.speakIt; break;
    case 'Audio Call': dataArray = data.optional.games.audioCall; break;
    case 'Own Game': dataArray = data.optional.games.ownGame; break;
    default: break;
  }
  const newdataSource = [];

  if (title === 'English Puzzle' && datesArray) {
    for (let i = 0; i < datesArray.length; i += 1) {
      const obj = {
        key: '', date: '', totalWords: 0, correctWords: '',
      };
      obj.key = `${(i + 1)}`;
      obj.date = datesArray[i].date;
      obj.correctWords = dataArray.percentCorrect[i] ? `${dataArray.percentCorrect[i]}%` : '0';
      obj.totalWords = dataArray.words[i] ? dataArray.words[i] : 0;
      newdataSource.push(obj);
    }
  } else {
    for (let i = 0; i < dataArray.lastPlay.length; i += 1) {
      const obj = {
        key: '', date: '', totalWords: 0, correctWords: '',
      };
      obj.key = `${(i + 1)}`;
      obj.date = dataArray.lastPlay[i];
      obj.correctWords = `${dataArray.percentCorrect[i]}%`;
      obj.totalWords = dataArray.words[i];
      newdataSource.push(obj);
    }
  }

  console.log('source', newdataSource);

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Total words',
      dataIndex: 'totalWords',
      key: 'totalWords',
    },
    {
      title: 'Of them correct',
      dataIndex: 'correctWords',
      key: 'correctWords',
    },
  ];
  return (
    <>
      <Table dataSource={newdataSource} columns={columns} size="small" pagination={{ position: ['bottomCenter'] }} />
    </>
  );
}

export default GameStatsPage;
