import React from 'react';
import { Button, Flex } from '@/shared/ui';
import { ErrorBlock, ErrorText, Wrapper } from './Header.Styled';
import { useMatchStore } from '@/entities/match/store';
import styled from 'styled-components';
import { LogoIcon } from '@/shared';
import { ErrorIcon } from '@/shared/assets';

const ERRORTEXT = 'Ошибка: не удалось загрузить информацию';
export const Header: React.FC = () => {
  const { fetchMatches, error } = useMatchStore();

  const handleClick = () => {
    fetchMatches();
  };

  return (
    <Wrapper>
      <LogoIcon />
      <Flex>
        {error && (
          <ErrorBlock>
            <ErrorIcon />
            <ErrorText>{ERRORTEXT}</ErrorText>
          </ErrorBlock>
        )}
        <Button onClick={handleClick}>Обновить</Button>
      </Flex>
    </Wrapper>
  );
};
