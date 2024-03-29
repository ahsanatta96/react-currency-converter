import React, { useEffect, useId, useRef } from "react";

const InputBox = ({
  label,
  amount,
  amountChangeHandler,
  currencyChangeHandler,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) => {
  const amountInputId = useId();
  const inputReference = useRef();

  useEffect(() => {
    inputReference.current.focus();
  }, []);

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className='w-1/2'>
        <label
          htmlFor={amountInputId}
          className='text-black/40 mb-2 inline-block'
        >
          {label}
        </label>
        <input
          id={amountInputId}
          ref={inputReference}
          className='outline-none w-full bg-transparent py-1.5'
          type='number'
          placeholder='Amount'
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            amountChangeHandler && amountChangeHandler(Number(e.target.value))
          }
        />
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black/40 mb-2 w-full'>Currency Type</p>
        <select
          className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
          value={selectedCurrency}
          onChange={(e) =>
            currencyChangeHandler && currencyChangeHandler(e.target.value)
          }
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
