import { features } from "./feature.data";
import { Dot } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";

export default function Features() {
  return (
    <Carousel className="relative w-full">
      <CarouselContent>
        {features.map((feature, index) => {
          const Icon = feature.symbol;
          return (
            <CarouselItem key={index}>
              <div className="p-5 h-screen flex flex-col">
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <div className="text-3xl font-semibold">
                      <span>
                        {feature.firstTitle}
                        <br />
                      </span>
                      <span>{feature.secondTitle}</span>
                    </div>
                    <Icon />
                  </div>
                  <p className="mt-5 text-sm">{feature.description}</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex mb-16">
                    <Dot />
                    <span>FEATURE</span>
                  </div>
                  <div className="">{feature.pageNumber}</div>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <div className="absolute bottom-8 left-16">
        <CarouselPrevious className="p-5 rounded-md" size="icon-lg" />
        <CarouselNext className="p-5 rounded-md" size="icon-lg" />
      </div>
    </Carousel>
  );
}
