import Layout from "../components/layout";
import Emoji from "../components/emoji";

function Crypto() {
  return (
    <Layout gradient>
      <div className="min-h-screen container px-3 mx-auto flex flex-col">
        <Emoji emoji="ℹ️" className="pt-24 text-center" />
        <h1 className="text-center text-2xl font-bold">Crypto</h1>
        <div className="flex flex-wrap flex-col md:flex-row items-center flex-grow">
          <div className="space-y-6 md:w-1/2">
            Forget CoinmarketCap, forget Coingecko, forget the exchanges. All
            the info you need but guaranteed no snooping.
          </div>

          <div className="md:w-1/2">
            <img
              alt="A one-eyed alien holding a broken cable connected between a server and a desktop computer"
              className="w-full"
              src="critter.svg"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
