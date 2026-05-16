import NetworkDonationPage from "@/components/NetworkDonationPage";
const WALLET = "0xC83358e435119c4B5A85e060AfAFb29768Cfe955";
export default function Linea() {
  return <NetworkDonationPage config={{
    name: "Linea",
    badgeLabel: "L",
    badgeColor: "#61D4F8",
    explorerUrl: `https://lineascan.build/address/${WALLET}`,
    explorerLabel: "Ver en LineaScan",
    warningText: "Envía solo tokens compatibles con la red Linea.",
  }} />;
}
