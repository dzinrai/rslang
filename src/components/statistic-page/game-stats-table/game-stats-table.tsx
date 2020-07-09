import React from 'react';
import { Table } from 'antd';
import styles from './game-stats-table.module.css';

function GameStatsPage() {
    const dataSource = [
        {
          key: '1',
          date: '08/01/2020',
          totalWords: 20,
          correctWords: '50%',
        },
        {
          key: '2',
          date: '09/01/2020',
          totalWords: 40,
          correctWords: '70%',
        },
        {
            key: '1',
            date: '08/01/2020',
            totalWords: 20,
            correctWords: '50%',
          },
          {
            key: '2',
            date: '09/01/2020',
            totalWords: 40,
            correctWords: '70%',
          },
          {
            key: '1',
            date: '08/01/2020',
            totalWords: 20,
            correctWords: '50%',
          },
          {
            key: '2',
            date: '09/01/2020',
            totalWords: 40,
            correctWords: '70%',
          },
          {
            key: '1',
            date: '08/01/2020',
            totalWords: 20,
            correctWords: '50%',
          },
          {
            key: '2',
            date: '09/01/2020',
            totalWords: 40,
            correctWords: '70%',
          },
          {
            key: '1',
            date: '08/01/2020',
            totalWords: 20,
            correctWords: '50%',
          },
          {
            key: '2',
            date: '09/01/2020',
            totalWords: 40,
            correctWords: '70%',
          },
          {
            key: '1',
            date: '08/01/2020',
            totalWords: 20,
            correctWords: '50%',
          },
          {
            key: '2',
            date: '09/01/2020',
            totalWords: 40,
            correctWords: '70%',
          },
          {
            key: '1',
            date: '08/01/2020',
            totalWords: 20,
            correctWords: '50%',
          },
          {
            key: '2',
            date: '09/01/2020',
            totalWords: 40,
            correctWords: '70%',
          },
          {
            key: '1',
            date: '08/01/2020',
            totalWords: 20,
            correctWords: '50%',
          },
          {
            key: '2',
            date: '09/01/2020',
            totalWords: 40,
            correctWords: '70%',
          },
          {
            key: '1',
            date: '08/01/2020',
            totalWords: 20,
            correctWords: '50%',
          },
          {
            key: '2',
            date: '09/01/2020',
            totalWords: 40,
            correctWords: '70%',
          },
        {
          key: '1',
          date: '08/01/2020',
          totalWords: 20,
          correctWords: '50%',
        },
        {
          key: '2',
          date: '09/01/2020',
          totalWords: 40,
          correctWords: '70%',
        },
        {
          key: '1',
          date: '08/01/2020',
          totalWords: 20,
          correctWords: '50%',
        },
        {
          key: '2',
          date: '09/01/2020',
          totalWords: 40,
          correctWords: '70%',
        },
                
      ];
      
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
      <Table dataSource={dataSource} columns={columns} size='small' pagination={{position: ["bottomCenter"]}}/>
      </>
  );
}

export default GameStatsPage;
