// useTransferCalc.js — Multi-currency transfer calculator logic
import { useState, useCallback, useMemo } from 'react';
import { fxRates, paymentFees } from '../data/fxRates';

export function useTransferCalc() {
  const [sendAmount, setSendAmount] = useState(1000);
  const [fromCurr, setFromCurr] = useState('MXN');
  const [toCurr, setToCurr] = useState('USD');
  const [method, setMethod] = useState('paypal');

  const rate = useMemo(() => {
    if (fxRates[fromCurr] && fxRates[fromCurr][toCurr] != null) {
      return fxRates[fromCurr][toCurr];
    }
    return 1;
  }, [fromCurr, toCurr]);

  const result = useMemo(() => {
    const raw = sendAmount * rate;
    const feeRate = paymentFees[method]?.rate ?? 0;
    const afterFee = raw * (1 - feeRate);
    return afterFee;
  }, [sendAmount, rate, method]);

  const formattedResult = useMemo(
    () => result.toLocaleString('en-US', { maximumFractionDigits: 2 }),
    [result]
  );

  const rateLabel = useMemo(() => {
    const r = rate.toFixed(4).replace(/\.?0+$/, '');
    return `1 ${fromCurr} = ${r} ${toCurr}`;
  }, [rate, fromCurr, toCurr]);

  const reset = useCallback(() => {
    setSendAmount(1000);
    setFromCurr('MXN');
    setToCurr('USD');
    setMethod('paypal');
  }, []);

  return {
    sendAmount,
    setSendAmount,
    fromCurr,
    setFromCurr,
    toCurr,
    setToCurr,
    method,
    setMethod,
    rate,
    result,
    formattedResult,
    rateLabel,
    reset,
  };
}
