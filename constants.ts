
import { createConfig } from "wagmi";
import {
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import { base, canto, fantom, mantle } from "wagmi/chains";
import {
    walletConnectWallet,
    metaMaskWallet,
  } from "@rainbow-me/rainbowkit/wallets";
  import { createClient, http } from "viem";
  
  const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!;
  
  const connectors = connectorsForWallets(
    [
      {
        groupName: "Recommended",
        wallets: [
          metaMaskWallet,
          walletConnectWallet,
        ],
      },
    ],
    {
      projectId: projectId || "YOUR_PROJECT_ID", // rainbowkit will use an example ID when this is YOUR_PROJECT_ID
      appName: "Velocimeter",
    }
  );
  
  export const config = createConfig({
    ssr: true, // https://github.com/wevm/wagmi/issues/3775
    connectors,
    chains: [fantom, base, canto, mantle],
    client({ chain }) {
      return createClient({
        chain,
        transport: http(),
      });
    },
  });

  export const abi = [];