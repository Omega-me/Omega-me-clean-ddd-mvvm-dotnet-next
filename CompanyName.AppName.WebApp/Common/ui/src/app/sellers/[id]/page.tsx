import { IPageParams } from '@/common/interfaces';
import { SellerType1DetailUi, SellerType2DetailUi } from '@/modules';

export default function SellersDetail(props: IPageParams) {
  return (
    <>
      <div>
        <p>SellerType1DetailUi module</p>
        <SellerType1DetailUi pageParams={props} />
      </div>
      <div>
        <p>SellerType2DetailUi module</p>
        <SellerType2DetailUi pageParams={props} />
      </div>
    </>
  );
}
