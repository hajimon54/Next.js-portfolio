import ImageCarousel from "app/components/imageCarousel.js";
import PersonalHeading from "app/components/PersonalHeading.js";

export default function page() {
  return (
    <div>
      <div className="introduction-section">
        <h1>All about me</h1>
        <PersonalHeading />
      </div>
      <ImageCarousel />
    </div>
  );
}
