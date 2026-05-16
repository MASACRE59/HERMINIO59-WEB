import NetworkDonationPage from "@/components/NetworkDonationPage";
const WALLET = "0xC83358e435119c4B5A85e060AfAFb29768Cfe955";
export default function Unichain() {
  return <NetworkDonationPage config={{
    name: "Unichain",
    badgeLabel: "✦",
    badgeColor: "#FF007A",
    explorerUrl: `https://uniscan.xyz/address/${WALLET}`,
    explorerLabel: "Ver en Unichain Explorer",
    warningText: "Envía solo tokens compatibles con la red Unichain.",
  }} />;
}
