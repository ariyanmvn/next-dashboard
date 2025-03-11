import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HeroTabs() {
    return (
      <div className='w-[90%] mx-auto text-[#A2A6AA] '>
        <Tabs defaultValue="tab1" className="w-full">
          <TabsList className="flex space-x-2 ">
            <TabsTrigger value="tab1">Overview</TabsTrigger>
            <TabsTrigger value="tab2">Transaction</TabsTrigger>
            <TabsTrigger className="hidden lg:block" value="tab2">Statistics</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <p>Content for Tab 1</p>
          </TabsContent>
          <TabsContent value="tab2">
            <p>Content for Tab 2</p>
          </TabsContent>
        </Tabs>
      </div>
    );
  }
  