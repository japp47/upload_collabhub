import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const UploadScreen = () => {
  return (
    <div className="w-screen relative bg-whitesmoke-200 h-[1870px] overflow-hidden text-left text-29xl text-darkslategray-400 font-inter">
          
      <Footer />
      <img
        className="absolute h-[3.73%] w-[29.1%] top-[86.31%] right-[33.54%] bottom-[9.96%] left-[37.36%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-1000000881.svg"
      />
      <div className="absolute top-[1318px] left-[0px] w-full h-[185.6px] text-base">
        
        
        <div className="absolute top-[0px] left-[984.4px] flex flex-col items-start justify-start gap-[16px]">
          <div className="w-[106.8px] relative text-xl leading-[22px] font-medium flex items-center h-[22.9px] shrink-0">
            Company
          </div>
          <div className="w-[53.4px] relative leading-[23.88px] flex items-center h-[25px] shrink-0">
            About
          </div>
          <div className="w-[45.3px] relative leading-[23.88px] flex items-center h-[25px] shrink-0">
            FAQs
          </div>
          <div className="w-[70.8px] relative leading-[23.88px] flex items-center h-[25px] shrink-0">
            Contact
          </div>
          <div className="w-[39.5px] relative leading-[23.88px] flex items-center h-[25px] shrink-0">
            Blog
          </div>
        </div>
        <div className="absolute top-[0px] left-[661px] h-[148.1px] flex flex-col items-start justify-between">
          <div className="w-[88.3px] relative text-xl leading-[22px] font-medium flex items-center h-[22.9px] shrink-0">
            Product
          </div>
          <div className="w-[117.3px] relative leading-[23.88px] flex items-center h-[25px] shrink-0">
            How It Works
          </div>
          <div className="w-[76.6px] relative leading-[23.88px] flex items-center h-[25px] shrink-0">
            Services
          </div>
          <div className="w-[60.4px] relative leading-[23.88px] flex items-center h-[25px] shrink-0">
            Pricing
          </div>
        </div>
        <img
          className="absolute top-[23px] left-[79px] w-[362px] h-[139px] object-cover mix-blend-darken"
          alt=""
          src="/logo.png"
        />
      </div>
      <div className="absolute top-[1568.5px] left-[17.5px] box-border w-full h-px border-t-[1px] border-solid border-black" />
      <div className="absolute top-[1254.5px] left-[-0.5px] box-border w-full h-px border-t-[1px] border-solid border-black" />
      <div className="absolute top-[345px] left-[0px] w-full h-[910px] overflow-hidden text-xl text-darkslategray-100 font-poppins">
        <img
          className="absolute top-[150px] right-[150px] rounded-[500px] w-[400px] h-[400px] object-cover"
          alt=""
          src="/video.png"
        />
        <div className="absolute top-[77px] left-[112px] w-[523px] h-[741px] flex flex-col items-start justify-center gap-[25px]">
          <div className="w-[522px] relative h-[97px]">
            <div className="absolute top-[0px] left-[0px] font-medium flex items-center">
              Title (required)
            </div>
            <input
              className="[outline:none] font-medium font-poppins text-mini bg-white absolute top-[37px] left-[0px] rounded-3xs box-border w-auto h-20 overflow-hidden flex flex-row items-center justify-start py-[15px] px-[30px] text-darkgray-200 border-[1px] border-solid border-lightgray-200"
              placeholder="Your Title"
              type="text"
            />
          </div>
          <div className="w-[523px] relative h-[105.8px]">
            <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[121px] h-[26px]">
              Description
            </div>
            <input
              className="[outline:none] font-medium font-poppins text-mini bg-white absolute top-[25.8px] left-[0px] rounded-3xs box-border w-2/3 h-20 overflow-hidden flex flex-row items-center justify-start py-[15px] px-[30px] text-darkgray-200 border-[1px] border-solid border-lightgray-200"
              placeholder="Example@gmail.com"
              type="text"
            />
          </div>
          <div className="w-[521.3px] relative h-[113.1px]">
            <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[521.3px] h-[49px]">
              Thumbnail
            </div>
            <div className="absolute top-[3.1px] left-[169px] rounded-3xs bg-gainsboro-500 box-border w-[212px] h-[110px] border-[1px] border-dashed border-black" />
            <div className="absolute top-[67.7px] left-[0px] rounded-6xl bg-white box-border w-[2708px] h-28 overflow-hidden hidden flex-row items-center justify-start py-[15px] pr-[21px] pl-[30px] text-xs text-darkgray-200 border-[1px] border-solid border-lightgray-200">
              <div className="relative font-medium">Example@gmail.com</div>
            </div>
            <img
              className="absolute top-[24.2px] left-[224px] w-[101px] h-[67px] object-cover"
              alt=""
              src="/upload.png"
            />
          </div>
          <div className="w-[520px] relative h-[121px] text-mini">
            <div className="absolute top-[6.7px] left-[0px] text-xl font-medium flex items-center w-[103px] h-[25px]">
              Audience
            </div>
            <div className="absolute top-[42.7px] left-[0px] flex items-center w-[299px] h-[13px]">
              Is this video made for kids?(required)
            </div>
            <div className="absolute top-[65.7px] left-[69px] inline-block w-[225px] h-[21px]">
              Yes, it's made for kids.
            </div>
            <div className="absolute top-[90.7px] left-[70.5px] inline-block w-[253px] h-[21px]">
              No, it's not made for kids
            </div>
           
            <input
              className="m-0 absolute top-[68px] left-[18px] rounded box-border w-[17px] h-[17px] border-[1px] border-solid border-darkslategray-100"
              type="checkbox"
            />
            <input
              className="m-0 absolute top-[95px] left-[18px] rounded box-border w-[17px] h-[17px] border-[1px] border-solid border-darkslategray-100"
              type="checkbox"
            />
          </div>
          <div className="w-[523px] relative h-8">
            <div className="absolute top-[8.2px] left-[0px] font-medium flex items-center w-[331px] h-[15px]">
              Add Subtitle ( .SRT, .EXT)
            </div>
            <button className="cursor-pointer [border:none] py-2.5 px-3.5 bg-darkslategray-300 absolute top-[0px] left-[348px] rounded w-[175px] h-8 flex flex-row items-center justify-center box-border">
              <div className="relative text-xs font-semibold font-inter text-white text-left">
                Select
              </div>
            </button>
          </div>
          <div className="w-[288.3px] relative h-[69.1px] text-xs text-darkgray-200">
            <div className="absolute top-[26.4px] left-[0.5px] rounded-6xl bg-white box-border w-[521.6px] h-[43.6px] overflow-hidden hidden flex-row items-center justify-start py-[15px] pr-[21px] pl-[30px] border-[1px] border-solid border-lightgray-200">
              <div className="relative font-medium">Example@gmail.com</div>
            </div>
            <select className="absolute top-[29.1px] left-[0px] rounded-sm bg-[transparent] box-border w-[288.3px] h-10 pt-[10.400000000000091px] px-1 pb-[10.499999999999908px] font-poppins text-sm text-darkslategray-100 border-[0.5px] border-solid border-black" />
            <div className="absolute top-[0px] left-[0.5px] text-xl font-medium text-darkslategray-100 flex items-center w-[104.3px] h-[19.1px]">
              Playlist
            </div>
          </div>
          <div className="w-[523px] h-[50px] flex flex-row items-center justify-start gap-[25px] text-sm text-white font-inter">
            <button className="cursor-pointer [border:none] py-2.5 px-3.5 bg-red w-[146px] rounded h-[55px] flex flex-row items-center justify-center box-border">
              <div className="relative text-xs font-semibold font-inter text-white text-left">
                Cancel
              </div>
            </button>
            <div className="w-[332px] relative h-[59px]">
              <button className="cursor-pointer [border:none] p-0 bg-darkslategray-300 absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xl" />
              <div className="absolute h-3/6 w-[35.03%] top-[25.08%] right-[36.23%] bottom-[24.92%] left-[28.73%]">
                
                <div className="absolute top-[5.08%] left-[30.35%] font-semibold">
                  Ask Creator
                </div>
              </div>
            </div>
            <div className="w-[317px] rounded-6xl [background:linear-gradient(90deg,_#1da684,_rgba(190,_220,_124,_0.99))] overflow-hidden shrink-0 hidden flex-row items-center justify-center py-2.5 px-[78px] box-border text-lg font-poppins">
              <div className="relative font-semibold">Sign Up</div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full absolute top-[185px] left-[0px] bg-antiquewhite h-40 overflow-hidden text-center text-[65px] text-darkslategray-300">
        <b className="absolute top-[39px] left-[calc(50%_-_311px)] flex items-center justify-center w-[689px] h-[81px]">
          Upload On Youtube
        </b>
       
        <img
          className="absolute top-[30px] left-[287px] w-[100px] h-[100px] object-cover"
          alt=""
          src="/yt-icon.png"
        />
      </div>
      <div className="w-full absolute top-[184.5px] left-[-2.5px] box-border h-[5px] border-t-[5px] border-solid border-orangered-100" />
      <Navbar />
    </div>
  );
};

export default UploadScreen;
