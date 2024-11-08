import { defineNuxtPlugin } from "#app";
import { WagmiPlugin, createConfig, http } from "@wagmi/vue";
import { mainnet, sepolia } from "@wagmi/vue/chains";
import { metaMask } from '@wagmi/connectors'
export default defineNuxtPlugin((nuxtApp) => {
  // Create the Wagmi configuration
  const config = createConfig({
    chains: [mainnet, sepolia],
    connectors: [metaMask()],
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
    },
  });

  // Use WagmiPlugin with the created config
  nuxtApp.vueApp.use(WagmiPlugin, { config });
});
