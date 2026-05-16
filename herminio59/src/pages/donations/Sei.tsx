import NetworkDonationPage from "@/components/NetworkDonationPage";
const WALLET = "0xC83358e435119c4B5A85e060AfAFb29768Cfe955";
export default function Sei() {
  return <NetworkDonationPage config={{
    name: "Sei",
    badgeLabel: "S",
    badgeColor: "#9B1C1C",
    explorerUrl: `https://seitrace.com/address/${WALLET}`,
    explorerLabel: "Ver en SEI Explorer",
    warningText: "Envía solo tokens compatibles con la red Sei EVM.",
  }} />;
}
