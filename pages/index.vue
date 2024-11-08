<script setup lang="ts">
import {
  useConnect,
  useChainId,
  useDisconnect,
  useAccount,
  useChains,
  useConnectors,
  useSignMessage,
} from "@wagmi/vue";
import { Button } from "@/components/ui/button";
const chainId = useChainId();
const { connectors, connect } = useConnect();

const { address, connector } = useAccount();
const { disconnect } = useDisconnect();
const chains = useChains();
const connectorMore = useConnectors();
console.log(connectorMore.value);
const { signMessage } = useSignMessage();
</script>

<template>
  <div class="my-4"></div>

  <div class="">
    <h1 v-if="connector">Chain {{ chains[0].name }}</h1>

    <div v-if="connector">Address: {{ address }}</div>
    <div v-if="connector">Connected to {{ connector?.name }} Connector.</div>

    <Button v-if="connector" @click="disconnect()">Disconnect</Button>
    <Button
      v-else
      v-for="connector in connectors"
      @click="connect({ connector, chainId })">
      {{ connector.name }}
    </Button>

    <Button @click="signMessage({ message: 'hello world' })">
      Sign message
    </Button>
  </div>
</template>
