import Header from "../../components/Header";
import Sidebar from "../../components/SidebarLeft";
import SidebarRight from "../../components/SidebarRight";
import Feed from "../../components/Feed";

const HomePage = () => {
  return (
    <div className="flex flex-col h-full md:min-h-screen bg-background text-foreground font-semibold">
      <Header />
      <main className="grid grid-cols-1 py-0.5 my-20 md:grid-cols-3 dark:bg-[#181820] bg-gray-200">
        <Sidebar />
        <SidebarRight />
        <Feed />
      </main>
    </div>
  );
};

export default HomePage;
