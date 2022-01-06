import Layout from "../components/layout";
import Emoji from "../components/emoji";

function AboutPage() {
  return (
    <Layout gradient>
      <div className="min-h-screen container px-3 mx-auto flex flex-col">
        <Emoji emoji="ℹ️" className="pt-24 text-center" />
        <h1 className="text-center text-2xl font-bold">About</h1>
        <div className="flex flex-wrap flex-col md:flex-row items-center flex-grow">
          <div className="space-y-6 md:w-1/2">
            {[
              {
                heading: `Who are we?`,
                body: `Just a few crazies trying to visualise how much money we have, in a safe and private way.`,
              },
              {
                heading: `Should I use this app?`,
                body: `100%. It's made by nice people, our code is open-source and all we want is to help people preserve their money.`,
              },
              {
                heading: `Is it secure?`,
                body: `100%. We don't have any trackers or spyware. 🙅‍♀. You control everything and can delete your account (if you create one!) at any time.`,
              },
              {
                heading: `Is it on iOs / Android?`,
                body: `Not yet. We will make web apps that you can access with shortcuts soon.
                No native app means less data for big tech 👏🏻`,
              },
            ].map((section) => (
              <div key={section.heading}>
                <h2 className="mb-3 text-xl font-bold">{section.heading}</h2>
                <p>{section.body}</p>
              </div>
            ))}
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
