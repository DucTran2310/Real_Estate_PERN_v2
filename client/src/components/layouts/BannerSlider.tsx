import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { banner } from "@/lib/constants";
import { EmblaCarouselType } from "embla-carousel";
import { useEffect, useRef, useState } from "react";

const BannerSlider = () => {
  const intervalRef = useRef<number | null>(null);

  const [api, setApi] = useState<EmblaCarouselType | undefined>(undefined);
  const [scrollDirection, setScrollDirection] = useState<'next' | 'prev'>('next')

  const startAutoScroll = () => {
    intervalRef.current = window.setInterval(() => {
      if (api) {
        if (scrollDirection === 'next') {
          if (api.canScrollNext()) {
            api.scrollNext();
          } else {
            setScrollDirection('prev')
          }
        } else {
          if (api.canScrollPrev()) {
            api.scrollPrev()
          } else {
            setScrollDirection('next')
          }
        }
      }
    }, 3000)
  };

  // useEffect(() => {
  //   if (api) {
  //     startAutoScroll();
  //   }

  //   return () => {
  //     if (intervalRef.current) {
  //       clearInterval(intervalRef.current);
  //     }
  //   };
  // }, [api, scrollDirection]); 
  return (
    <div className="w-full">
      <Carousel setApi={setApi} opts={{ loop: false }}>
        <CarouselContent>
          {banner.map((item) => (
            <CarouselItem key={item.id}>
              <img src={item.imageUrl} alt="Banner" className="w-full aspect-[3/1] object-cover" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 hover:bg-white/50 bg-transparent" />
        <CarouselNext className="right-2 hover:bg-white/50 bg-transparent" />
      </Carousel>
    </div>
  );
};

export default BannerSlider;