const Color = () => {
  return (
    <div>
      <h1 className="text-center underline text-3xl text-violet-800">
        {" "}
        Colors
      </h1>
      <div className="flex bg-slate-400">
        <div className="flex">
          <div className="m-10">
            <h3>Text Color</h3>
            <p className="text-blue-100">Tailwind</p>
            <p className="text-blue-200">Tailwind</p>
            <p className="text-blue-300">Tailwind</p>
            <p className="text-blue-400">Tailwind</p>
            <p className="text-blue-500">Tailwind</p>
            <p className="text-blue-600">Tailwind</p>
            <p className="text-blue-700">Tailwind</p>
            <p className="text-blue-800">Tailwind</p>
            <p className="text-blue-900">Tailwind</p>
          </div>
          <div className="m-10">
            <h3>Background</h3>
            <p className="bg-pink-600 text-white">Tailwind</p>
            <p className="bg-purple-600 text-white">Tailwind</p>
            <p className="bg-slate-600 text-white">Tailwind</p>
            <p className="bg-gray-600 text-white">Tailwind</p>
            <p className="bg-green-600 text-white">Tailwind</p>
            <p className="bg-blue-600 text-white">Tailwind</p>
            <p className="bg-red-600 text-white">Tailwind</p>
            <p className="bg-green-600 text-white">Tailwind</p>
          </div>
          <div className="m-10">
            <h3>Text-Decoration</h3>
            <p className="text-green-600 underline">Tailwind</p>
            <p className="text-green-600 overline">Tailwind</p>
            <p className="text-green-600 no-underline">Tailwind</p>
            <p className="text-green-600 underline decoration-double">
              Tailwind
            </p>
            <p className="text-green-600 underline decoration-blue-600">
              Tailwind
            </p>
          </div>
          <div className="m-10">
            <input type="checkbox" className="accent-yellow-600"></input>
            <input
              placeholder="Type Something...."
              type="text"
              className="accent-green-600"
            ></input>
            <input type="radio" className="accent-red-600"></input>
            <input type="checkbox" className="accent-blue-600"></input>
          </div>
          <div>
            <h3>Arbitrary Color</h3>
            <p className="text-[#ffff]">Tailwind</p>
            <p className="text-[#c9c9c9]">Tailwind</p>
            <p className="text-[#ffd0c9]">Tailwind</p>
            <p className="text-[#ffddd0]">Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Color;
