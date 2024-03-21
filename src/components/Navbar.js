import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const onWorkspaceClick = useCallback(() => {
    navigate("/workspace-editor");
  }, [navigate]);

  const onRequestsClick = useCallback(() => {
    window.open("/request-log-editor");
  }, []);

  return (
    <div className="absolute top left-[0px] w-[1440px] h-[185px] flex flex-row items-center justify-between py-0 px-[15px] box-border text-left text-base text-darkslategray-400 font-inter">
      <img
        className="w-[301px] relative h-[114px] object-cover mix-blend-darken z-[0]"
        alt=""
        src="/logo.png"
      />
      <div className="w-[747.4px] flex flex-row items-center justify-between relative z-[1]">
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] w-[130px] relative text-xl leading-[20px] font-bold font-inter text-darkslategray-400 text-center flex items-center justify-center h-8 shrink-0 z-[0]"
          onClick={onWorkspaceClick}
        >
          Workspace
        </button>
        <b className="w-[135px] relative text-xl leading-[20px] flex text-center items-center justify-center h-[34px] shrink-0 z-[1]">
          My Creators
        </b>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] w-[94px] relative text-xl leading-[20px] font-bold font-inter text-darkslategray-400 text-center flex items-center justify-center h-11 shrink-0 z-[2]"
          onClick={onRequestsClick}
        >
          Requests
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[131px] relative text-xl leading-[20px] font-bold font-inter text-darkslategray-400 text-center flex items-center justify-center h-10 shrink-0 z-[3]">
          Contact Us
        </button>
  
      </div>
      <div className="w-[311.5px] hidden flex-row items-center justify-center gap-[20px] z-[2] text-center text-black">
       
      </div>
     
    </div>
  );
};

export default Navbar;
