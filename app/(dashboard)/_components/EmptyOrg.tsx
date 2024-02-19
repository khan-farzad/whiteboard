import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import Image from "next/image";

const EmptyOrg = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Image src={"/elements.svg"} alt="logo" height={300} width={300} />
      <h2 className="text-2xl font-semibold mt-4">Welcome to Miro</h2>
      <p className="text-muted-foreground text-sm mt-2">Create new one</p>
      <Dialog>
        <DialogTrigger>
            <Button size='lg'>Create New Organisation</Button>
        </DialogTrigger>
        <DialogContent className="bg-transparent border-none max-w-[480px] p-0">
            <CreateOrganization/>
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default EmptyOrg;
