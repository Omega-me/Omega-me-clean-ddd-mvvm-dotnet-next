import { IPageParams } from '@/common/interfaces';
import React from 'react';
import { useSellerType1DetailVm } from '../useSellerType1DetailVm';
import Partial1 from './partials/Partial1';
import Partial2 from './partials/Partial2';

interface Props {
  pageParams: IPageParams;
}

const SellerType2DetailUi: React.FC<Props> = props => {
  const vm = useSellerType1DetailVm();
  return (
    <div>
      <p>{JSON.stringify(props)}</p>
      <p>{JSON.stringify(vm)}</p>
      <Partial1 />
      <Partial2 />
    </div>
  );
};

export default SellerType2DetailUi;
