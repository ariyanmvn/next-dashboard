import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CalendarIcon from "@/icons/CalendarIcon";

export default function HeroTabs() {
    return (
      <div className=' flex justify-between items-center p-[25px] text-[#A2A6AA]  '>
        <Tabs defaultValue="tab1" className="w-full">
          <TabsList className="flex space-x-2 ">
            <TabsTrigger value="tab1">Overview</TabsTrigger>
            <TabsTrigger value="tab2">Transaction</TabsTrigger>
            <TabsTrigger className="hidden lg:block" value="tab3">Statistics</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <p>Content for Tab 1</p>
          </TabsContent>
          <TabsContent value="tab2">
            <p>Content for Tab 2</p>
          </TabsContent>
          <TabsContent value="tab3">
            <p>Content for Tab 3</p>
          </TabsContent>
        </Tabs>
       <div className="calendar h-[42] w-[42] bg-[#FFFFFF12] rounded-full p-2">
        <CalendarIcon></CalendarIcon>
       </div>
      </div>
    );
  }
  