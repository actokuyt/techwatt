import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  X,
  YouTube,
} from "@mui/icons-material";

export default function Footer() {
  return (
    <div>
      <div className="grid grid-cols-6 w-[80%] mx-auto mt-4 justify-items-center md:w-[40%] lg:w-[30%]">
        <a href="https://web.facebook.com/felix.nanor.3?mibextid=LQQJ4d&_rdc=1&_rdr">
          <Facebook />
        </a>
        <a href="https://www.instagram.com/tech_watt/?igsh=bm93ZWV1NmpxNmZz&utm_source=qr">
          <Instagram />
        </a>
        <a href="https://twitter.com/felixsa41013626?s=21&t=m0BDkue5ZnFbsOhDG5Tptg">
          <X />
        </a>
        <a href="https://www.youtube.com/@tech_watt">
          <YouTube />
        </a>
        <a href="https://www.linkedin.com/in/felix-nanor-4599b2204/">
          <LinkedIn />
        </a>
        <a href="https://github.com/Tech-Watt">
          <GitHub />
        </a>
      </div>

      <div className="text-gray-700 my-4 text-center">
        <p>&copy; 2024 TechWatt.ai All rights reserved.</p>
        <p>
          Developed in collaboration with{" "}
          <a href="https://actoportfolio.vercel.app/" className="underline">
            ActoKuyt
          </a>
          .
        </p>
      </div>
    </div>
  );
}
