import { db } from "@/lib/db";
import Button from "./components/ui/Button";

export default async function Home() {
  return (
    <div className="text-red-500">
      <Button>Hello</Button>
    </div>
  );
}
