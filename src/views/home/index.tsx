import { WideBits } from "@project-serum/serum/lib/layout";
import { Button, Col, Row } from "antd";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactButton from "../../components/Button";
import MessengerButton from "../../components/Button/Messenger";
import { ConnectButton } from "../../components/ConnectButton";
import { TokenIcon } from "../../components/TokenIcon";
import { useConnectionConfig } from "../../contexts/connection";
import { useMarkets } from "../../contexts/market";
import { useUserBalance, useUserTotalBalance } from "../../hooks";
import { WRAPPED_SOL_MINT } from "../../utils/ids";
import { formatUSD } from "../../utils/utils";



export const HomeView = () => {
  const { marketEmitter, midPriceInUSD } = useMarkets();
  const { tokenMap } = useConnectionConfig();
  const SRM_ADDRESS = 'SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt';
  const KIN_ADDRESS = 'kinXdEcpDQeHPEuQnqmUgtYykqKGVFq6CeVX5iAHJq6';
  const KIN = useUserBalance(KIN_ADDRESS);
  const SRM = useUserBalance(SRM_ADDRESS);
  const SOL = useUserBalance(WRAPPED_SOL_MINT);
  const { balanceInUSD: totalBalanceInUSD } = useUserTotalBalance();

  useEffect(() => {
    const refreshTotal = () => {};

    const dispose = marketEmitter.onMarket(() => {
      refreshTotal();
    });

    refreshTotal();

    return () => {
      dispose();
    };
  }, [marketEmitter, midPriceInUSD, tokenMap]);

  return (
    <Row gutter={[16, 16]} align="middle">
      <Col span={24}>
        <h2 style={{  }}>Your balances ({formatUSD.format(totalBalanceInUSD)}):</h2>
        <h2>Kin: {KIN.balance} ({formatUSD.format(KIN.balanceInUSD)})</h2>
        <h2 style={{ display: 'inline-flex', alignItems: 'center' }}>
          <TokenIcon mintAddress={SRM_ADDRESS} /> SOL: {SOL?.balance} ({formatUSD.format(SOL?.balanceInUSD)})
        </h2>
      </Col>
      <Col span={12}>
        <ConnectButton />
      </Col>
      <Col span={6}>
        <ReactButton />
      </Col>
      <Col span={12}>
        <Link to="/faucet">
          <Button
          style={{ background: "linear-gradient(90deg, rgba(90,90,249,1) 0%, rgba(80,80,255,1) 35%, rgba(0,212,255,1) 100%)",borderRadius: "30px"}}
          >Faucet</Button>
        </Link>
      </Col>
      <Col span={6}>
        <MessengerButton
        />
      </Col>
      <Col span={24}>
        <div className="builton" />
      </Col>
    </Row>
  );
};
