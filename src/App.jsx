import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="card w-[500px] bg-base-200 shadow-xl">
          <figure>
            <img src="/src/images/image-equilibrium.jpg" />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title text-2xl text-sky-500 ">
              Equilibrium #3492
            </h2>
            <p className="text-left text-xl">
              Our Equilibrium collection promotes balance and calm!
            </p>
            <div className="card-actions justify-end"></div>
            <div className="flex">
              <img src="/src/images/icon-ethereum.svg" className="w-[12px]" />
              <p>0.041ETH</p>
              <p>3 days left</p>
              <img src="/src/images/icon-clock.svg" />
            </div>
            <hr></hr>
            <div className="flex mt-20">
              <img src="/src/images/image-avatar.png" className="w-20 -mt-10" />
              <p>Creation of Kenneth</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
