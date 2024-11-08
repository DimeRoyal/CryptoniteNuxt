<script setup lang="ts">
import { useConnect, useChainId, useDisconnect, useAccount } from "@wagmi/vue";

const chainId = useChainId();
const { connectors, connect } = useConnect();

const { address, connector } = useAccount();
const { disconnect } = useDisconnect();
const nonceStr = ref(null);

</script>

<template>
  <div class="flex items-center justify-center">
    <button
      class="mx-4 bg-black text-white p-4 rounded-md"
    >
      Nonce
    </button>
    {{ nonceStr }}
    <div>Address: {{ address }}</div>
    <div>Connected to {{ connector?.name }} Connector.</div>
    <button @click="disconnect()">Disconnect</button>
    <button
      v-for="connector in connectors"
      @click="connect({ connector, chainId })"
    >
      {{ connector.name }}
    </button>
  </div>
</template>
