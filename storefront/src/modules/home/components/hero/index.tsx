import Link from "next/link";
import { Button, Heading } from "@medusajs/ui";

const Hero: React.FC = () => {
  return (
    <div 
      className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle"
      style={{
        backgroundImage: "url('/washmyhair7.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading level="h1" className="text-3xl leading-10 text-white font-bold">
            Curated Fashion Experience
          </Heading>
          <Heading level="h2" className="text-3xl leading-10 text-gray-200 font-normal">
            Expert styling consultation • Personalized recommendations • Exclusive collection
          </Heading>
        </span>
        {/* Link to the Booking Page */}
        <Link href="/booking">
          <Button variant="secondary" className="bg-white hover:bg-gray-100">
            Book Your Private Appointment
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
