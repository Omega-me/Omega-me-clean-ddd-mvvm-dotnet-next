import { IPageParams } from '@/common/interfaces';
import { FarmersDetailUi } from '@/modules';

export default function FarmersDetail(props: IPageParams) {
  return <FarmersDetailUi pageParams={props} />;
}
