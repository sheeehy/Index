import IndexLogo from "../assets/logo-index.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillInstagram } from "react-icons/ai";
import { PiSoundcloudLogoFill } from "react-icons/pi";
import { FaMeta } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { Sheet, SheetContent, SheetClose, SheetHeader, SheetTitle, SheetTrigger } from "./Sheet";

const Navbar = () => {
  return (
    <nav className="relative px-4 pt-4 text-center tracking-wider font-Archivo text-2xl  text-white">
      {/* Left side */}
      <div className="absolute left-8 top-8 flex items-center z-10 hover-opacity">
        <Sheet>
          <SheetTrigger>
            <GiHamburgerMenu className="" />
          </SheetTrigger>
          <SheetContent side="left" className="bg-zinc-950 select-none">
            <SheetHeader className="flex flex-col justify-center h-full">
              <div className="flex flex-col justify-center gap-4 flex-1">
                <Link to="/" className="text-white mr-4">
                  <SheetClose>
                    <SheetTitle className="text-4xl font-Archivo text-white hover-opacity">HOME</SheetTitle>
                  </SheetClose>
                </Link>
                <Link to="/Tickets" className="text-white mr-4">
                  <SheetClose>
                    <SheetTitle className="text-4xl font-Archivo text-white hover-opacity">TICKETS</SheetTitle>
                  </SheetClose>
                </Link>
                <Link to="/Gallery" className="text-white mr-4">
                  <SheetClose>
                    <SheetTitle className="text-4xl font-Archivo text-white hover-opacity">GALLERY</SheetTitle>
                  </SheetClose>
                </Link>

                <Link to="/Welfare" className="text-white mr-4">
                  <SheetClose>
                    <SheetTitle className="text-4xl font-Archivo text-white hover-opacity">WELFARE</SheetTitle>
                  </SheetClose>
                </Link>

                <Link to="Location" className="text-white mr-4">
                  <SheetClose>
                    <SheetTitle className="text-4xl font-Archivo text-white hover-opacity">LOCATION</SheetTitle>
                  </SheetClose>
                </Link>
                <Link to="/PastEvents" className="text-white mr-4">
                  <SheetClose>
                    <SheetTitle className="text-4xl font-Archivo text-white hover-opacity">PAST EVENTS</SheetTitle>
                  </SheetClose>
                </Link>
              </div>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/indexdublin/" className="text-4xl font-Archivo text-white hover-opacity">
                  <SheetTitle className="text-4xl font-Archivo text-white hover-opacity">
                    <AiFillInstagram />
                  </SheetTitle>
                </a>
                <a href="https://soundcloud.com/indexdublin" className="text-4xl font-Archivo text-white hover-opacity">
                  <SheetTitle className="text-4xl font-Archivo text-white hover-opacity">
                    <PiSoundcloudLogoFill />
                  </SheetTitle>
                </a>
                <a href="https://www.facebook.com/indexdublin">
                  <SheetTitle className="text-4xl font-Archivo text-white hover-opacity">
                    <FaMeta />
                  </SheetTitle>
                </a>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      {/* Center logo */}
      <div className="absolute inset-x-0 pt-2">
        <Link to="/" style={{ display: "block", width: "fit-content", margin: "0 auto" }}>
          <img src={IndexLogo} alt="Index Logo" className="h-12 mx-auto filter hover-opacity" />
        </Link>
      </div>

      {/* Right side */}
      <div className="absolute top-8 flex items-center right-8 hover-opacity ">
        <Link to="/Tickets" className="text-white mr-4">
          TICKETS
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
