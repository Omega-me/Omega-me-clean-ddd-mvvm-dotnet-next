'use client';
import React from 'react';
import { useSellerType1LandingVm } from '../useSellerType1LandingVm';
import Partial1 from './partials/Partial1';
import Partial2 from './partials/Partial2';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props {}

const SellerType1LandingUi: React.FC<Props> = () => {
  const vm = useSellerType1LandingVm();

  return (
    <div>
      {JSON.stringify(vm)}
      <Partial1 />
      <Partial2 />
    </div>
  );
};

export default SellerType1LandingUi;
