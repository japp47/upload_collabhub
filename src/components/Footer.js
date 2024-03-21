const Footer = () => {
  return (
    <div className="absolute top-[1794px] left-[0px] box-border w-[1440px] h-[76px] flex flex-row items-center justify-center py-[21px] px-0 gap-[196px] text-left text-sm text-darkslategray-400 font-inter border-t-[1px] border-solid border-darkslategray-400">
      <div className="w-[161px] relative leading-[24.85px] text-center flex items-center justify-center h-[25px] shrink-0">
        © Copyright Collabhub
      </div>
      <div className="w-[161px] relative leading-[24.85px] hidden">{`© Copyright CloudWave `}</div>
      <div className="relative leading-[24.85px]">Terms and Conditions</div>
      <div className="relative leading-[24.85px]">Privacy Policy Users</div>
      <div className="relative leading-[24.85px]">Privacy Policy Clients</div>
    </div>
  );
};

export default Footer;
