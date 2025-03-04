import React, { useEffect } from 'react';
import { List, Scoring, TeamName } from './MatchList.styled';
import { TeamLogoIcon, Flex, Status} from '@/shared';
import { useMatchStore } from '@/entities/match/store';
import { Match } from '@/entities';
import styled from 'styled-components';

const LoadingBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MatchList = () => {

  const { matches, loading, error, fetchMatches } = useMatchStore();

  useEffect(() => {
    fetchMatches();
  }, [fetchMatches]);

  if (loading) return <LoadingBlock>Загрузка...</LoadingBlock>;

  return (
    <>
      {matches?.map((match: Match, index: React.Key) => {
        return (
          <List key={index}>
            <Flex>
              <TeamLogoIcon />
              <TeamName>{match.awayTeam.name}</TeamName>
            </Flex>
            <Flex direction='column'>
              <Scoring>
                {match.awayScore} : {match.homeScore}
              </Scoring>
              <Status status={match.status} />
            </Flex>
            <Flex>
              <TeamLogoIcon />
              <TeamName>{match.homeTeam?.name}</TeamName>
            </Flex>
          </List>
        );
      })}
    </>
  );
};
