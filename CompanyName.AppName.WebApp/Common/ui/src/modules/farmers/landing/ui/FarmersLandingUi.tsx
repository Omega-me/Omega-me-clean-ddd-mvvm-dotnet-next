'use client';
import React from 'react';
import { useFarmersLandingVm } from '../useFarmersLandingVm';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props {}

const FarmersLandingUi: React.FC<Props> = () => {
  const vm = useFarmersLandingVm();

  return (
    <div>
      <div>test</div>
      <input className="border-4 border-red-500 w-50" type="text" onChange={e => vm.onChangeName(e.target.value)} />
      <p>{vm.name}</p>
    </div>
  );
};

export default FarmersLandingUi;
