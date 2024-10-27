'use client';
import { IPageParams } from '@/common/interfaces';
import React from 'react';
import { useFarmersDetailVm } from '../useFarmersDetailVm';
import FarmersDetailRow from './partials/FarmersDetailRow';
import FarmersDetailHeader from './partials/FarmersDetailHeader';

interface Props {
  pageParams: IPageParams;
}

const FarmersDetailUi: React.FC<Props> = props => {
  const { pageParams } = props;
  const vm = useFarmersDetailVm({ pageParams });

  return (
    <div>
      {vm.id}
      <input className="border-4 border-red-500 w-50" type="text" onChange={e => vm.onChangeId(e.target.value)} />
      <p>new route {vm.route}</p>
      <button className="bg-slate-400 p-2 rounded-md" type="button" onClick={vm.onGoToNewRoute}>
        change page
      </button>
      <FarmersDetailHeader name="test" {...vm} />
      <FarmersDetailRow />
    </div>
  );
};

export default FarmersDetailUi;
