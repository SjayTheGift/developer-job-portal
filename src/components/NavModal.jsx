
const NavModal = (setShowModal) => {
  return (
    <>
          <div className="flex justify-center items-center md:items-start fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-xl font-semibold">Sign up as a developer or company member</h3>
                  <button
                    className="bg-transparent border-0 text-black ml-6 font-bold text-xl"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Hire developers
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Find a developer job
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
  )
}

export default NavModal
