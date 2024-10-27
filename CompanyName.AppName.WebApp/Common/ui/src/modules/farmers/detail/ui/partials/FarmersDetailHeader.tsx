import React from 'react';
import { IFarmersDetailVm } from '../../useFarmersDetailVm';

interface Props extends IFarmersDetailVm {
  name: string;
}
const FarmersDetailHeader: React.FC<Props> = props => {
  return (
    <div>
      {props.name}

      <p>
        Route name from a viewModel to partial component <b>{props.route}</b>
      </p>
    </div>
  );
};

export default FarmersDetailHeader;
