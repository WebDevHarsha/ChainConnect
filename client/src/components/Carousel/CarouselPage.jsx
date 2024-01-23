import Carousel from "./components/Carousel";
import { reviews } from "./components/data";

function CarouselPage() {
  return (
    <div>
      <div>
        <h2>Places to Meet</h2>
        <p>After you Like &amp; Subscribe!</p>
      </div>
      <Carousel reviews={reviews} />
    </div>
  );
}

export default CarouselPage;
