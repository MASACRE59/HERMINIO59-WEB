import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Donaciones from "@/pages/Donaciones";
import EthereumDonation from "@/pages/EthereumDonation";
import Linea from "@/pages/donations/Linea";
import MegaETH from "@/pages/donations/MegaETH";
import Monad from "@/pages/donations/Monad";
import ZkSync from "@/pages/donations/ZkSync";
import BNB from "@/pages/donations/BNB";
import Avalanche from "@/pages/donations/Avalanche";
import Arbitrum from "@/pages/donations/Arbitrum";
import Polygon from "@/pages/donations/Polygon";
import Optimism from "@/pages/donations/Optimism";
import HyperEVM from "@/pages/donations/HyperEVM";
import Soneium from "@/pages/donations/Soneium";
import Sei from "@/pages/donations/Sei";
import Base from "@/pages/donations/Base";
import Unichain from "@/pages/donations/Unichain";
import Ink from "@/pages/donations/Ink";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/donaciones" component={Donaciones} />
      <Route path="/donaciones/ethereum" component={EthereumDonation} />
      <Route path="/donaciones/linea" component={Linea} />
      <Route path="/donaciones/megaeth" component={MegaETH} />
      <Route path="/donaciones/monad" component={Monad} />
      <Route path="/donaciones/zksync" component={ZkSync} />
      <Route path="/donaciones/bnb" component={BNB} />
      <Route path="/donaciones/avalanche" component={Avalanche} />
      <Route path="/donaciones/arbitrum" component={Arbitrum} />
      <Route path="/donaciones/polygon" component={Polygon} />
      <Route path="/donaciones/optimism" component={Optimism} />
      <Route path="/donaciones/hyperevm" component={HyperEVM} />
      <Route path="/donaciones/soneium" component={Soneium} />
      <Route path="/donaciones/sei" component={Sei} />
      <Route path="/donaciones/base" component={Base} />
      <Route path="/donaciones/unichain" component={Unichain} />
      <Route path="/donaciones/ink" component={Ink} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
