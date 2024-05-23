import { defineConfig } from "@wagmi/cli";
import { react, actions } from "@wagmi/cli/plugins";
import { erc20Abi } from "viem";
import { abi } from "./constants";


export default defineConfig({
  out: "./lib/wagmiGen.ts",
  contracts: [
    {
      name: "ERC20",
      abi: erc20Abi,
    },
    {
      name: "Option",
      abi: abi
    }
  ],
  plugins: [
    react({ getHookName: "legacy" }),
    actions({
      getActionName: "legacy",
    }),
  ], // todo: remove legacy option, which will change the naming convention of generated hooks, i.e., a lot of changes
});
