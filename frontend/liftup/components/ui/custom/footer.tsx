export default function Footer() {
  return (
    <div className="flex min-w-full justify-between bg-black gap-y-4 min-h-full p-16">
      <div className="flex flex-col justify-between text-left">
        <h2 className="flex font-bold">LyftUp</h2>
        <p className="text-sm">
          We are a team of fitness enthusiasts who are passionate <br />
          about helping you achieve your fitness goals. You just worry <br />
          about working out, well take care of the rest.
        </p>
      </div>
      <div className="flex justify-between w-[25%]">
        <div className="flex flex-col justify-between text-left relative left-0">
          <h2 className="flex font-bold">ABOUT</h2>
          <div className="flex flex-col text-left ">
            <p className="text-sm ">About Us</p>
            <p className="text-sm">Our Team</p>
            <p className="text-sm">Careers</p>
          </div>
        </div>

        <div className="flex flex-col justify-between text-left">
          <h2 className="flex font-bold">CONTACT</h2>
          <div className="flex flex-col text-left">
            <p className="text-sm">Contact Us</p>
            <p className="text-sm ">Support</p>
            <p className="text-sm ">Privacy Policy</p>
          </div>
        </div>

        <div className="flex flex-col justify-between text-left">
          <h2 className="flex font-bold">Links</h2>
          <div className="flex flex-col text-left">
            <p className="text-sm">Facebook</p>
            <p className="text-sm">Instagram</p>
            <p className="text-sm">Twitter</p>
          </div>
        </div>
      </div>
    </div>
  );
}
