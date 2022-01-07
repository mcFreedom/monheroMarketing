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
          <div className="absolute bottom-0 w-full md:max-w-700 lg:max-w-900 md:h-500 left-1/2 right-1/2 -translate-x-1/2 max-h-500 block z-0">
            <Image
              src="/screenshot.png"
              alt="Screenshot"
              layout="responsive"
              width={882}
              height={500}
            />
          </div>
        </div>
        <div className="container pt-12 md:pt-24 px-3 mx-auto flex flex-col md:flex-wrap justify-start h-screen items-center">
          <div className="max-w-500 md:max-w-900 flex flex-col w-full justify-center items-center text-center p-4 ">
            <p className="tracking-loose w-full"></p>
            <h1 className="hidden">Monhero</h1>
            <h2 className="leading-normal text-2xl md:text-6xl mb-8 font-bold">
              The World's Most Private Portfolio Tracker
            </h2>
            <p className="leading-normal md:text-2xl mb-8 bg-black bg-opacity-50 p-2">
              The <strong>only</strong> private, and end-to-end encrypted asset
              management tool out there.
              <br />
              No snooping by anyone,
              <strong className="pl-1"> guaranteed</strong>.
              <br /> Simple yet powerful
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
        <div className="flex flex-wrap text-white pt-4 md:min-h-400 items-center">
          <div className="w-full sm:w-1/2 p-6 md:text-right flex justify-end">
            <div className="max-w-500 right-0">
              <h3 className="text-3xl md:text-4xl font-bold leading-none py-2">
                Track your cryptos
              </h3>
              <p className="mb-8 md:text-2xl md:text-right text-justify">
                Lives rates from hundreds of coins, updating often (but not too
                often, to reduce stress and addiction)
              </p>
              <p className="mb-8 md:text-2xl md:text-right text-justify">
                A dashboard, inspired by CoinMarketCap, but with your actual
                assets.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 pb-6 md:p-6 money h-40"></div>

          <div className="flex-center pb-4 w-full">
            <a
              onClick={() => (window.location = appUrl("demo"))}
              // style={{ height: "75px" }}
              className="cursor-pointer hover:grows md:hidden"
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

        {/* <Wave colour="rgba(0,0,0,0)" colour2="#FFFFFF" /> */}

        {/* <Features /> */}

        <div className="flex flex-wrap flex-col-reverse sm:flex-row bg-white md:min-h-400 items-center">
          <div className="w-full sm:w-1/2 md:p-6 mt-6 spy h-40"></div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl md:text-4xl text-gray-800 font-bold leading-none mb-3">
                Track your other assets
              </h3>
              <p className="text-gray-600 mb-8 md:text-2xl text-justify">
                Bank accounts, Real estate, shares, pensions, art, vehicles...
              </p>
              <p className="text-gray-600 mb-8 md:text-2xl text-justify">
                Whatever you can think of, input it on MonHero.
              </p>
              <p className="text-gray-600 mb-8 md:text-2xl text-justify">
                Gain key insights into your profit or losses from each
                investment
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-center text-white md:text-2xl">
          <div className="w-full max-w-500 p-6 text-center">
            <h3 className="text-3xl md:text-4xl font-bold leading-none pb-2">
              Ultimate privacy
            </h3>
            <p className="mb-8 text-justify">
              End-to-end encryption means that the data is encrypted in our
              databases and your password is the only to decrypt it.
            </p>
            <p className=" mb-8 text-justify">
              We work with{" "}
              <a
                href="https://www.userbase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                userbase
              </a>
              . A leader in database encryption
            </p>
          </div>
        </div>

        <div className="w-full justify-center flex">
          <div className="w-full min-h-1/2 max-w-500">
            <Image
              src="/ben.jpeg"
              alt="Ben Franklin"
              layout="responsive"
              width={853}
              height={1280}
            />
          </div>
        </div>

        <div className="flex flex-center text-white md:text-2xl">
          <div className="w-full p-6 max-w-500 text-center">
            <h3 className="text-3xl md:text-4xl font-bold leading-none pb-2">
              Source of truth
            </h3>
            <p className="mb-8 text-justify">
              The amounts from the assets will not change unless you decide to
              import the data from the APIs
            </p>
            <p className=" mb-8 text-justify">
              That way, if a bail-in or some assets are stolen, you will know
              how much is gone.
            </p>
          </div>
        </div>

        <div className="flex flex-center  bg-white md:text-2xl">
          <div className="w-full  max-w-500 text-center p-6">
            <h3 className="text-2xl md:text-4xl font-bold leading-none pb-2 text-gray-800">
              Open source
            </h3>
            <p className="mb-8 text-gray-600 text-justify">
              Anyone can visit our
              <a
                href="https://github.com/Antoine007/monhero"
                target="_blank"
                rel="noopener noreferrer"
                className="underline px-1"
              >
                github
              </a>
              and audit our code.
            </p>
            <p className=" mb-8 text-gray-600 text-justify">
              Guaranteed no snooping, third-party software or governmental
              spying.
            </p>
          </div>
        </div>
      </section>

      {/* <Pricing/> */}

      <Wave colour="#FFF" />

      <Comparison />

      <section className="container mx-auto text-center py-6 mb-12 ">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
          Start managing money, privately
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <h3 className="my-4 text-3xl leading-tight"></h3>

        <div className="flex flex-col md:flex-row flex-center">
          <a
            onClick={() => (window.location = appUrl("", "#sign-up"))}
            className="cursor-pointer hover:grows"
            target="_blank"
            rel="noopener"
            tabIndex="0"
          >
            <button className="btn mx-auto lg:mx-0 mt-4 lg:mt-0 py-2 px-8 white">
              Get started
            </button>
          </a>
          <span className="px-3">or</span>
          <a
            onClick={() => (window.location = appUrl("demo"))}
            className="cursor-pointer"
            target="_blank"
            rel="noopener"
            tabIndex="0"
          >
            <button className="btn white mx-auto lg:mx-0 mt-4 lg:mt-0 py-2 px-8">
              Try our demo
            </button>
          </a>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
