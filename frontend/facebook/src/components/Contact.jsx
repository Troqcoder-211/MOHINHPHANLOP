import assetsImgs from "../assets/imgs/LibraryImgs";
const Contact = () => {
  return (
    <div className="mt-2 py-2 hover:bg-gray-300 hover:rounded-2xl">
      <div className="flex gap-3 items-center">
        <img
          className="h-[34px] rounded-full"
          src={assetsImgs.Profile}
          alt="anhdaidien"
        />
        <h1 className="font-medium">Nguyễn Thành Trọng</h1>
      </div>
    </div>
  );
};

export default Contact;
