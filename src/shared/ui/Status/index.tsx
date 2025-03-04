import React from 'react';
import { StatusWrapper } from './Status.styled';
import { StatusTypes } from '@/entities';

const statusMap: Record<StatusTypes, string> = {
  Scheduled: "Match preparing",
  Ongoing: "Live",
  Finished: "Finished",
};

export const Status = ({ status }: { status: StatusTypes }) => (
  <StatusWrapper status={status}>{statusMap[status] || status}</StatusWrapper>
);