import styled from 'styled-components';
import { TableCell, TableRow } from '@mui/material';
import { useAppSelector } from '../../../store/store';
import { dayToDayFormat } from '../../../utils';

interface OrderbookBidProps {
  index: number;
  bidPrice: number;
  bidSize: number;
  maxSize: number;
}

export default function OrderbookBid({ index, bidPrice, bidSize, maxSize }: OrderbookBidProps) {
  const prevClosingPrice = useAppSelector((state) => state.coin.selectedCoin.prevClosingPrice);
  return (
    <TableRow>
      {index === 0 ? (
        <Inner2 rowSpan={15} colSpan={2}>
          <div>inner2</div>
        </Inner2>
      ) : null}
      <OrderbookBidCell2 sx={{ width: '0px' }} align='center'>
        <a href='#'>
          <p>{bidPrice.toLocaleString()}</p>
          <p style={{ marginLeft: '14px' }}>
            {dayToDayFormat(bidPrice - prevClosingPrice, prevClosingPrice)}%
          </p>
        </a>
      </OrderbookBidCell2>
      <OrderbookBidCell3 sx={{ width: '120px' }} align='right'>
        <a href='#'>
          <Bar style={{ width: `${(bidSize / maxSize) * 100}%` }} />
          <p>{bidSize}</p>
        </a>
      </OrderbookBidCell3>
      <OrderbookBidCell3 sx={{ width: '42px' }} />
    </TableRow>
  );
}

const OrderbookBidCell = styled(TableCell)`
  && {
    padding: 0 8px;
    height: 45px;
    border-right: 1px solid white;
    border-bottom: 1px solid white;
    background-color: rgba(200, 74, 49, 0.0784313725490196);
    font-size: 13px;
  }
`;

const OrderbookBidCell2 = styled(OrderbookBidCell)`
  & > a {
    width: 150px;
    display: flex;
    justify-content: flex-end;
  }
`;

const OrderbookBidCell3 = styled(OrderbookBidCell)`
  && {
    padding-left: 0;
  }

  & > a {
    position: relative;
    display: flex;
    justify-content: flex-start;
    height: 26px;
    line-height: 26px;
    z-index: 1;
  }
`;

const Bar = styled.div`
  position: absolute;
  height: 26px;
  background-color: rgba(200, 74, 49, 0.14901960784313725);
  max-width: 100%;
`;

const Inner2 = styled(TableCell)`
  && {
    padding: 0;
    vertical-align: top;
  }
`;
