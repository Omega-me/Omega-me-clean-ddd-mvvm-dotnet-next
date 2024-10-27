'use client';
import React from 'react';
import { useSellerType2LandingVm } from '../useSellerType2LandingVm';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props {}

const SellerType2LandingUi: React.FC<Props> = () => {
  const vm = useSellerType2LandingVm();

  return <div>{JSON.stringify(vm)}</div>;
};

export default SellerType2LandingUi;
