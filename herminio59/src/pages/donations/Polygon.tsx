import NetworkDonationPage from "@/components/NetworkDonationPage";
const WALLET = "0xC83358e435119c4B5A85e060AfAFb29768Cfe955";
export default function Polygon() {
  return <NetworkDonationPage config={{
    name: "Polygon",
    badgeLabel: "P",
    badgeColor: "#8247E5",
    explorerUrl: `https://polygonscan.com/address/${WALLET}`,
    explorerLabel: "Ver en PolygonScan",
    warningText: "Envía solo tokens compatibles con la red Polygon (ERC-20).",
  }} />;
}
