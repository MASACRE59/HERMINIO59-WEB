import NetworkDonationPage from "@/components/NetworkDonationPage";
const WALLET = "0xC83358e435119c4B5A85e060AfAFb29768Cfe955";
export default function Optimism() {
  return <NetworkDonationPage config={{
    name: "OP",
    badgeLabel: "OP",
    badgeColor: "#FF0420",
    explorerUrl: `https://optimistic.etherscan.io/address/${WALLET}`,
    explorerLabel: "Ver en Optimism Explorer",
    warningText: "Envía solo tokens compatibles con la red Optimism.",
  }} />;
}
