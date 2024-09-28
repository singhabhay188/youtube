import { Home, Library, Tv } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

const Aside = () => {
  return (
    <aside className="w-60 overflow-y-auto border-r hidden lg:block">
      <ScrollArea className="h-full">
        <nav className="flex flex-col gap-2 p-2">
          <Button className="justify-start" variant="ghost">
            <Home className="mr-2 h-4 w-4" />
            Home
          </Button>
          <Button className="justify-start" variant="ghost">
            <Tv className="mr-2 h-4 w-4" />
            Subscriptions
          </Button>
          <Button className="justify-start" variant="ghost">
            <Library className="mr-2 h-4 w-4" />
            Library
          </Button>
        </nav>
      </ScrollArea>
    </aside>
  );
};

export default Aside;
