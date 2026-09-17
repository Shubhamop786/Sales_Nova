import React from "react";

function NotFound() {
  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-white"
      aria-labelledby="not-found-heading"
    >
      {/* Visual 404 */}
      <div className="text-9xl font-bold text-blue-100 select-none mb-4" aria-hidden="true">
        404
      </div>

      {/* Single H1 — proper semantic structure */}
      <h1
        id="not-found-heading"
        className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4"
      >
        Page Not Found
      </h1>

      <p className="text-lg text-gray-500 mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </p>

      <a
        href="/"
        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-blue-700 transition-colors duration-300"
        aria-label="Return to Sales Nova homepage"
      >
        ← Back to Home
      </a>

      <p className="mt-8 text-sm text-gray-400">
        Need help? <a href="/#contact" className="text-blue-600 hover:underline">Contact Sales Nova</a>
      </p>
    </main>
  );
}

export default NotFound;
