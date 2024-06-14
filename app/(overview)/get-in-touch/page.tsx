import { ContactForm } from "@/components/mui-form";

export default function Page() {
  return (
    <div className="pt-[5em] newsreader md:w-[70%] md:mx-auto lg:w-[90%]">
      <h1 className="text-2xl font-semibold text-center">Pricing</h1>

      <p className="text-center ">Affordable Pricing for everyone!</p>

      <div className="mt-8 lg:grid lg:grid-cols-3 lg:w-[100%] lg:mx-auto">
        <div className="border-2 rounded-lg w-[95%] mx-auto text-center pb-4 min-h-[20em] shadow-lg mb-4">
          <h1 className="text-2xl font-semibold p-2 py-4 bg-[#f7f7f7] mb-8 ">
            Free
          </h1>

          <h1 className="text-2xl font-semibold mb-4">$0</h1>

          <p className="mb-8">
            free resouces <br /> free tutorial guides <br />
            free access to code
          </p>

          <a
            href="https://www.youtube.com/@tech_watt"
            className="bg-blue-300 p-2 rounded-lg shadow-lg"
          >
            Get Free Content
          </a>
        </div>

        <div className="border-2 rounded-lg w-[95%] mx-auto text-center pb-4 min-h-[20em] shadow-lg mb-4">
          <h1 className="text-2xl font-semibold p-2 py-4 bg-[#f7f7f7] mb-8">
            Consultations
          </h1>

          <h1 className="text-2xl font-semibold mb-4">$10</h1>

          <p className="mb-8">
            Make Enquires <br /> Get Access To Demos <br />
            Advice and Expert Directions
          </p>

          <a href="#get-in-touch" className="bg-blue-300 p-2 rounded-lg">
            Get in Touch
          </a>
        </div>

        <div className="border-2 rounded-lg w-[95%] mx-auto text-center pb-4 min-h-[20em] shadow-lg mb-4">
          <h1 className="text-2xl font-semibold p-2 py-4 bg-[#f7f7f7] mb-8">
            AI Integration and Projects
          </h1>

          <h1 className="text-2xl font-semibold mb-">$50</h1>

          <p className="mb-4 p-4">
            Contact us for price based on complexcity of the project. Price is
            also based on the timeline of the project.
          </p>

          <a href="#get-in-touch" className="bg-blue-300 p-2 rounded-lg">
            Get in Touch
          </a>
        </div>
      </div>

      <div id="get-in-touch" className="mt-20 p-2" >
        <h1 className="text-2xl font-semibold text-center mb-4" >Get In Touch</h1>

        <p className="text-center mb-4" >It&apos;s exciting that you are here, trust that we wouldn&apos;t disappoint. Please submit the form below to reach out to us.</p>

        <div className="w-[90%] mx-auto mb-8 lg:w-[70%]" >
          <ContactForm/>
        </div>
      </div>
    </div>
  );
}
