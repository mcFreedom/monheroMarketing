import Layout from "../components/layout";
import Features from "../components/features";
import VideoPreview from "../components/videoPreview";
import { appUrl, blurDataYacht } from "../utils/constants";
import { Comparison, Wave } from "../components";
import Image from "next/image";

function IndexPage() {
  return (
    <Layout gradient>
      <div className="relative">
        <div className="w-full top-0 z-min1 h-screen bottom-0 absolute">
          <Image
            src="/yacht.jpg"
            alt="Yacht"
            layout="fill"
            placeholder="blur"
            blurDataURL={blurDataYacht}
            objectFit="cover"
            quality={100}
          />
          <div className="absolute bottom-0 w-full max-h-500 block z-0">
            <Image
              src="/screenshot.png"
              alt="Screenshot"
              layout="responsive"
              width={882}
              height={500}
            />
          </div>
        </div>
        <div className="container pt-12 px-3 mx-auto flex flex-col md:flex-wrap justify-start h-screen">
          <div className="max-w-500 flex flex-col w-full justify-center items-center text-center p-4 ">
            <p className="tracking-loose w-full"></p>
            <h1 className="hidden">Monhero</h1>
            <h2 className="leading-normal text-2xl md:text-4xl mb-8 font-bold">
              Track all your assets in one simple but powerful dashboard.
            </h2>
            <p className="leading-normal md:text-2xl mb-8 bg-black bg-opacity-50">
              The <strong>only</strong> private, and end-to-end encrypted asset
              management tool out there. No snooping by anyone,
              <strong className="pl-1"> guaranteed</strong>.
            </p>

            <div className="w-full flex flex-col justify-center items-center">
              <a
                onClick={() => (window.location = appUrl("", "#sign-up"))}
                // style={{ height: "75px" }}
                className="cursor-pointer hover:grows"
                target="_blank"
                rel="noopener"
                tabIndex="0"
              >
                <button className="btn purple mx-auto lg:mx-0 mt-2 lg:mt-0 py-2 md:py-4 px-8">
                  Get started - for free
                </button>
              </a>
              <div className="w-1 h-1"></div>
              <a
                onClick={() => (window.location = appUrl("demo"))}
                // style={{ height: "75px" }}
                className="cursor-pointer hover:grows hidden md:block"
                target="_blank"
                rel="noopener"
                tabIndex="0"
              >
                <button className="btn white mx-auto lg:mx-0 mt-4 lg:mt-0 py-2 md:py-4 px-8">
                  Try our demo
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="">
        <div className="flex flex-wrap text-white">
          <div className="w-full md:w-5/6 sm:w-1/2 p-6">
            <h3 className="text-2xl  font-bold leading-none">
              Track your cryptos
            </h3>
            <p className="mb-8">
              Lives rates from hundreds of coins, updating often (but not too
              often, to reduce stress and addiction)
            </p>
            <p className=" mb-8">
              A dashboard, inspired by CoinMarketCap, but with your actual
              assets.
            </p>
          </div>
          <div className="w-full sm:w-1/2 pb-6 md:p-6 money h-40"></div>
        </div>

        <Wave colour="rgba(0,0,0,0)" colour2="#FFFFFF" />

        {/* <Features /> */}

        <div className="flex flex-wrap flex-col-reverse sm:flex-row bg-white">
          <div className="w-full sm:w-1/2 md:p-6 mt-6 spy h-40"></div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Track your other assets
              </h3>
              <p className="text-gray-600 mb-8">
                Bank accounts, Real estate, shares, pensions, art, vehicles...
              </p>
              <p className="text-gray-600 mb-8">
                Whatever you can think of, input it on MonHero.
              </p>
              <p className="text-gray-600 mb-8">
                Gain key insights into your profit or losses from each
                investment
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap text-white">
          <div className="w-full md:w-5/6 sm:w-1/2 p-6">
            <h3 className="text-2xl  font-bold leading-none pb-2">
              Ultimate privacy
            </h3>
            <p className="mb-8">
              End-to-end encryption means that the data is encrypted in our
              databases and your password is the only to decrypt it.
            </p>
            <p className=" mb-8">
              We work with{" "}
              <a
                href="www.userbase.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                userbase
              </a>
              . A leader in database encryption
            </p>
          </div>
        </div>

        <div className="w-full min-h-1/2">
          <Image
            src="/ben.jpeg"
            alt="Ben Franklin"
            layout="responsive"
            width={853}
            height={1280}
          />
        </div>

        <div className="flex flex-wrap text-white">
          <div className="w-full md:w-5/6 sm:w-1/2 p-6">
            <h3 className="text-2xl  font-bold leading-none pb-2">
              Open source
            </h3>
            <p className="mb-8">
              Anyone can visit our github and audit our code.
            </p>
            <p className=" mb-8">
              Guaranteed no snooping, third-party or governmental spying.
            </p>
          </div>
        </div>
      </section>

      {/* <Pricing/> */}

      <Wave colour="#FFF" />

      <Comparison />

      <section className="container mx-auto text-center py-6 mb-12">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
          Start managing money, privately
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <h3 className="my-4 text-3xl leading-tight"></h3>

        <a
          onClick={() => (window.location = appUrl("", "#sign-up"))}
          style={{ height: "75px" }}
          className="cursor-pointer hover:grows"
          target="_blank"
          rel="noopener"
          tabIndex="0"
        >
          <button className="btn mx-auto lg:mx-0 mt-4 lg:mt-0 py-4 px-8 white">
            Get started
          </button>
        </a>
      </section>
    </Layout>
  );
}

export default IndexPage;
