import NetworkDonationPage from "@/components/NetworkDonationPage";
const WALLET = "0xC83358e435119c4B5A85e060AfAFb29768Cfe955";
export default function ZkSync() {
  return <NetworkDonationPage config={{
    name: "zkSync Era",
    badgeLabel: "⇆",
    badgeColor: "#1755F4",
    explorerUrl: `https://explorer.zksync.io/address/${WALLET}`,
    explorerLabel: "Ver en ZkSync Explorer",
    warningText: "Envía solo tokens compatibles con la red zkSync Era.",
  }} />;
}
