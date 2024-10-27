import { IPageParams } from '@/common/interfaces';
import React from 'react';
import { useSellerType2DetailVm } from '../useSellerType2DetailVm';

interface Props {
  pageParams: IPageParams;
}

const SellerType2DetailUi: React.FC<Props> = props => {
  const vm = useSellerType2DetailVm();
  return (
    <div>
      <p>{JSON.stringify(props)}</p>
      <p>{JSON.stringify(vm)}</p>
    </div>
  );
};

export default SellerType2DetailUi;
