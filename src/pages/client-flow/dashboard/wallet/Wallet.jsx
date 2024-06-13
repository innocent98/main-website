import { IoCopy } from "react-icons/io5";
import Card from "./cards/Card";
import "./wallet.scss";
import WalletActivityCard from "./cards/WalletActivityCard";
import transactiondata from "./dummydata";
import { useState } from "react";
import Emptystate from "./Emptystate";
import BasicModal from "./Modal";


const Wallet = () => {
  const copy = (
    <small style={{ color: "gray" }}>
      <IoCopy />
    </small>
  );
  const walletAddress = (
    <small style={{ color: "gray" }}>Twbbwwtud109hjuy</small>
  );
  const [data, setData] = useState(false);
  const [showWalletActivity, setShowWalletActivity] = useState(false);

  const handleWalletActivityClick = () => {
    setShowWalletActivity(!showWalletActivity);
  };

  return (
    <div className="wallet_wrapper">
      <div className="card-wrapper">
        <Card
          cardTitle="Available Balance"
          walletBalance="$ 0.00"
          lastChild="Escrowed:"
          lastChildContent="$0.00"
        />
        <Card
          cardTitle="Crypto Balance"
          walletBalance="$ 10,000ZWT"
          lastChild={walletAddress}
          lastChildContent={copy}
        />
      </div>

      <div className="chart-sections">
        {!showWalletActivity && (
          <div className="chart-section">
            <div className="chart-section_header">
              <div className="chart-section_header1">
                <div>
                  <p>Overview Balance</p>
                  <span>Lorem ipsum dolor sit</span>
                </div>
                <select>
                  <option>Monthly (2024)</option>
                  <option>Monthly (2023)</option>
                </select>
              </div>
              <div className="chart-section_header2">
                <p>Last Month :</p>
                <p style={{ color: "#37D159" }}> $563,443</p>
              </div>
            </div>
            <div className="chart-section_content">
              {data ? "" : <Emptystate />}
            </div>
          </div>
        )}

        <div
          className={`wallet-section ${showWalletActivity ? "full-width" : ""}`}
        >
          <div
            className="wallet-section_header"
            onClick={handleWalletActivityClick}
          >
            <div className="wallet-section_header1">
              <div>
                <p>Wallet Activity</p>
                <span>Lorem ipsum dolor sit</span>
              </div>
            </div>
          </div>
          <div className="wallet-section_content">
            {data ? (
              <Emptystate />
            ) : (
              <>
                {transactiondata.map((data, index) => (
                  <WalletActivityCard
                    key={index}
                    type={data.type}
                    amount={data.amount}
                    status={data.status}
                    time={data.time}
                    withdraw={data.withdraw}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <BasicModal />
    </div>
  );
};

export default Wallet;
