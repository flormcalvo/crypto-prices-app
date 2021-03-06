import React, { useEffect } from "react";
import styled from "@emotion/styled";
import useCurrency from "../hooks/useCurrency";
import useCrypto from "../hooks/useCrypto";

const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Form = () => {
  const CURRENCY_LIST = [
    { code: "USD", name: "US Dollar" },
    { code: "ARS", name: "Argentinian Peso" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "Pound Sterling" }
  ];
  const [currency, SelectCurrency] = useCurrency(
    "Choose Currency",
    "",
    CURRENCY_LIST
  );

  const [crypto, SelectCryto] = useCrypto("Choose Crypto", "");

  return (
    <form>
      <SelectCurrency />
      <SelectCryto />
      <Button type="submit" value="Calculate" />
    </form>
  );
};

export default Form;
