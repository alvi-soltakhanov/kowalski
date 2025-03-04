import React from 'react';
import { MatchList } from '@/widgets';
import { Header } from '@/widgets/Header';
import { Layout } from './MatchTracker.styled';

export const MatchTracker = () => {
  return (
    <Layout>
      <Header />
      <MatchList />
    </Layout>
  );
};
