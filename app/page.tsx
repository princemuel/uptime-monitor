export default function Page() {
  return (
    <main
      aria-labelledby="page-heading"
      className="min-h-full container px-4 mx-auto my-16 space-y-8"
    >
      <h1
        id="page-heading"
        className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
      >
        Uptime Monitoring
      </h1>

      <section>
        <form className="flex items-center gap-4">
          <label>
            <input
              type="text"
              placeholder="**********"
              className="mt-1 block w-full rounded-md border-gray-300 p-2 border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </label>

          <label>
            <input
              type="url"
              placeholder="example.com"
              className="mt-1 block w-full rounded-md border-gray-300 p-2 border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </label>
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm enabled:hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-75"
          >
            Add Website
          </button>
        </form>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Monitored Websites
        </h2>
        <p className="text-sm text-gray-700">
          A list of all the websites being monitored, their current status, and
          when they were last checked.
        </p>

        <table></table>
      </section>
    </main>
  );
}
