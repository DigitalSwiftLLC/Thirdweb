import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";
import { inAppWallet, createWallet } from "thirdweb/wallets";

const client = createThirdwebClient({
  clientId: "7186123044a881cb3bcf785b92cd0ffa",
});

const wallets = [
  inAppWallet({
    auth: {
      options: [
        "google",
        "discord",
        "telegram",
        "farcaster",
        "email",
        "x",
        "passkey",
        "phone",
      ],
    },
  }),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
];

function WalletConnect() {
  return (
    <div className="wallet-container">
      <h2>Connect Your Wallet</h2>
      <p>Click below to connect with your favorite wallet</p>
      <ConnectButton
        client={client}
        wallets={wallets}
        connectModal={{ size: "compact" }}
      />
    </div>
  );
}

export default WalletConnect;
