import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CalendarIcon from "@/icons/CalendarIcon";
import TransTable from "./TransTable";

export default function HeroTabs() {
  return (
    <div className="  p-[25px] text-[#A2A6AA]  ">
      <Tabs defaultValue="tab2" className="w-full relative">
        <TabsList className="flex space-x-2  ">
          <TabsTrigger className="cursor-pointer" value="tab1">Overview</TabsTrigger>
          <TabsTrigger className="cursor-pointer" value="tab2">Transaction</TabsTrigger>
          <TabsTrigger className="hidden lg:block cursor-pointer" value="tab3">
            Statistics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tab1">
          <p>Content for Tab 1</p>
        </TabsContent>
        <TabsContent className="w-full max-w-[1320px] mx-auto" value="tab2">
          <div className="w-full mx-auto">
            <TransTable />
          </div>
        </TabsContent>

        <TabsContent value="tab3">
          <p>Content for Tab 3</p>
        </TabsContent>
       

      </Tabs>

      <div className="calendar absolute  top-[230px] right-[20px]  h-[42] lg:hidden  w-[42] bg-[#FFFFFF12] rounded-full p-2">
        <CalendarIcon></CalendarIcon>
      </div>

      <div className="calendar absolute  top-[200px] right-[20px] hidden lg:flex gap-3 justify-center items-center w-[157px] h-[48px] bg-[#FFFFFF12] rounded-[100px] ">
        <CalendarIcon></CalendarIcon>
        <p className="hidden lg:block text-[14px]">
          {new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}




