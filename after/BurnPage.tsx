import React from 'react';
import BurnButtonBar from './components/BurnButtonBar';
import BurnStatsContainer from './components/BurnStatsContainer';
import BurnTxTable from './components/BurnTxTable';
import ChainSelector from './components/ChainSelector';
import AppToast from './components/AppToast';

const BurnPage = ({ executeBurn, burnAmount, onChangeBurnAmount, txButton, txProgress, statsSupplies, burnTransactions, coinData }) => {

  return (
    <div className="burn-page">
      <div className="top-container">
        <BurnButtonBar
          executeBurn={executeBurn}
          burnAmount={burnAmount}
          onChangeBurnAmount={onChangeBurnAmount}
          txButton={txButton}
          txProgress={txProgress}
        />
        <BurnStatsContainer statsSupplies={statsSupplies} />
      </div>

      <BurnTxTable data={burnTransactions} priceUSD={coinData?.current_price?.usd} />

      <ChainSelector />

      <AppToast />
    </div>
  );
};

export default BurnPage;

