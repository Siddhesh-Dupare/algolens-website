import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="flex flex-col justify-between items-center text-center">
      <div className="flex-1 flex flex-col justify-between">
        <p className="text-4xl mt-5">Understand every step.</p>
        <span className="text-sm p-2">
          An interactive platform for visualizing algorithms, tracing code
          execution, and mastering complex programming concepts.
        </span>
      </div>
      <div className="mt-5 mb-5">
        <Button className="p-5 rounded-sm" variant="outline">
          Download
        </Button>
      </div>
    </div>
  );
}
