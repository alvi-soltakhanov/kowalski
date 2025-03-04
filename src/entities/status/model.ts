export enum StatusTypes {
  Live = "Ongoing",
  Finished = "Finished",
  ["Match preparing"] = "Scheduled",
}

export interface StatusProps {
  status: StatusTypes;
}
