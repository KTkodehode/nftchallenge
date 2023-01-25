import { useState } from "react";

// CSS
import "./App.css";
// Images
import Equilibrium from "./images/image-equilibrium.jpg";
import EtherumView from "./images/icon-ethereum.svg";
import Clock from "./images/icon-clock.svg";
import Avatar from "./images/image-avatar.png";
import EtheriumView from "./images/icon-view.svg";

function App() {
  const [isHovered, setHovered] = useState(false);
  return (
    <>
      <div className="App flex justify-center absolute top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%]">
        <div className="card xl:w-[400px] w-80 bg-[#14253d] shadow-xl p-6">
          <div>
            <img
              src={Equilibrium}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="rounded-xl w-[350px] m-auto"
            />
            {isHovered ? (
              <img
                src={EtheriumView}
                className="translate-x-[110px] -translate-y-[160px] xl:-translate-y-[200px] xl:translate-x-[153px] fixed hover:text-[#00FFFF]"
              />
            ) : null}
          </div>
          <div className="text-[#FFFFFF] h-[250px] xl:h-[300px]">
            <div className="card-body">
              <h2 className="big-text card-title text-2xl hover:text-[#00FFFF] -translate-x-8 tracking-wide">
                Equilibrium #3492
              </h2>
              <p className="medium-text text-left text-[18px] w-[250px] xl:w-[280px] xl:text-[20px] xl:mt-2 -translate-x-8 text-[#8bacda]">
                Our Equilibrium collection promotes balance and calm.
              </p>
              <div className="flex justify-between mt-4 xl:text-[18px] -translate-x-8">
                <img src={EtherumView} className="xl:w-[18px] h-6" />
                <p className="big-text ml-2 xl:ml-4 text-[#00FFFF] tracking-wider xl:text-xl">
                  0.041 ETH
                </p>
                <div className="flex translate-x-16">
                  <img
                    src={Clock}
                    className="w-[20px] h-[20px] translate-y-1"
                  />
                  <p className="ml-2 xl:ml-4 text-[#8bacda] medium-text tracking-wide text-[17px] xl:text-xl">
                    3 days left
                  </p>
                </div>
              </div>

              <hr className="border-[#2f415b] mt-2 w-[275px] -translate-x-8 xl:w-[355px]"></hr>

              <div className="flex -mt-10">
                <img
                  src={Avatar}
                  className="w-10 h-10 xl:h-12 xl:w-12 xl:mt-6 -translate-x-8 translate-y-[53px] border-solid border-2 rounded-[100%] border-white xl:translate-y-[30px]"
                />
                <div className="flex items-center xl:text-[18px]">
                  <p className="absolute right-[165px] bottom-[30px] text-[#8bacda] font-light medium-text tracking-wide xl:text-xl xl:bottom-[58px] xl:right-[220px]">
                    Creation of
                  </p>
                  <div className="hover:text-[#00FFFF] absolute right-[63px] bottom-[30px] xl:bottom-[58px] xl:right-[108px]">
                    Jules Wyvern
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
