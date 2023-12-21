
const Home = () => {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md">
        <form>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="inputField"
          >
            Type your question here...
          </label>
          <input
            className="w-full p-2 border rounded-md"
            type="text"
            id="inputField"
            name="inputField"
            placeholder="Type question..."
          />
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};
export default Home;
