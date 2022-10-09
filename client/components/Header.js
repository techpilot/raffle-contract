import { useMoralis } from "react-moralis";

const Header = () => {
  const { enableWeb3, account } = useMoralis();

  const connectWallet = async () => {
    await enableWeb3();
  };

  return (
    <div>
      {account ? (
        <p>Connected</p>
      ) : (
        <button onClick={connectWallet}>Connect</button>
      )}
    </div>
  );
};

export default Header;
