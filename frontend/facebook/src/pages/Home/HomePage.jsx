import SidebarLeft from "../../components/SidebarLeft";
import SidebarRight from "../../components/SidebarRight";
import Feed from "../../components/Feed";
import Navbar from "../../components/Navbar";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col h-full md:min-h-screen bg-background text-foreground font-semibold">
        <main>
          <Navbar />
          <SidebarLeft />
          <SidebarRight />
          <Feed />
        </main>
      </div>
    </>
  );
};

export default HomePage;
