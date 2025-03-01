import "./styles.css";
import WalletConnect from "./WalletConnect";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>My Web3 Website</h1>
      </header>

      <main>
        <WalletConnect />
      </main>

      <footer>
        <p>Created by Me - 2025</p>
      </footer>
    </div>
  );
}
