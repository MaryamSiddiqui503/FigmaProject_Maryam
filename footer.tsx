

export default function Footer() {
    return (
      <div className="w-1440 h-505 bg-white flex justify-between items-end text-justify text-black border-2 border-gray mt-80">
        <div className=" flex w-1240.01 h-419 text-gray-600 font-bold p-20 pb-10 ">
            <h1 className="w-85 h-36">Funiro.</h1><p className="font-light text-gray-500 flex  ml-60 w-40 h-24 ">Links</p><p className="font-light text-gray-500 flex  ml-60 w-40 h-24 ">Help</p>
            <div className="w-285 h-72 text-gray-400 font-light" >
                <p>400 University Drive Suite 200 Coral <br />Gables,
                <br />FL 33134 USA</p>
                <ul className="ml-60  gap-10 list-none">
                  <li className="w-48 h-24">Home</li>
                  <li className="w-42 h-24">Shop</li>
                  <li className="w-49 h-24">About</li>
                  <li className="w-66 h-24">Contact</li>
                </ul>
            </div>
            <div className="text-gray-400 font-light">
              <ul className="ml-60  gap-10 list-none ">
                <li>Payment Options</li>
                <li>Returns</li>
                <li>Privacy Policies</li>
              </ul>
            </div>
            
        </div>
        <div className="w-1240.01 h-59 font-light border-b-0 ">
              <p>2023 furino. All rights reverved</p>
            </div>
      </div>
    );
  }