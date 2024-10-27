/* eslint-disable @typescript-eslint/no-empty-object-type */
import { useState } from 'react';

export const useFarmersLandingVm = () => {
  const [name, setName] = useState('');

  const onChangeName = (name: string) => {
    setName(name);
  };
  return {
    onChangeName,
    name,
  };
};

export interface IFarmersLandingVm extends ReturnType<typeof useFarmersLandingVm> {}
