import NetworkDonationPage from "@/components/NetworkDonationPage";
const WALLET = "0xC83358e435119c4B5A85e060AfAFb29768Cfe955";
export default function Ink() {
  return <NetworkDonationPage config={{
    name: "Ink",
    badgeLabel: "i",
    badgeColor: "#7B2BF9",
    explorerUrl: `https://explorer.inkonchain.com/address/${WALLET}`,
    explorerLabel: "Ver en Ink Explorer",
    warningText: "Envía solo tokens compatibles con la red Ink.",
  }} />;
}
