import Navigation from "./Navigation";
import { Footer } from "../pages/Footer";

export function Placeholder({ title, description }) {
  return (
    <div>
      <Navigation />
      <div className="min-h-screen  bg-s8ul-dark">
        <main className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {title}
            </h1>
            <p className="text-xl text-gray-300 mb-8">{description}</p>
            <p className="text-gray-400 mb-8">
              This page is currently under development. Continue prompting to
              have me fill in the content for this page.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-s8ul-green hover:bg-s8ul-green-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Back to Home
            </button>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
