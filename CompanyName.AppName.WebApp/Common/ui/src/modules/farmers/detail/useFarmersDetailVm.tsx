/* eslint-disable @typescript-eslint/no-empty-object-type */
import { IPageParams } from '@/common/interfaces';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface IVmConfig {
  pageParams: IPageParams;
}

export const useFarmersDetailVm = (config: IVmConfig) => {
  const [route, setRoute] = useState('');
  const router = useRouter();

  const onChangeId = (id: string) => {
    setRoute(id);
  };

  const onGoToNewRoute = () => {
    router.push(route);
  };

  return {
    id: config.pageParams.params.id,
    onChangeId,
    route,
    onGoToNewRoute,
  };
};

export interface IFarmersDetailVm extends ReturnType<typeof useFarmersDetailVm> {}
