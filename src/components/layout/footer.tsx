import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-between w-screen p-4 border-t border-gray-600 bg-secondary-color md:justify-center md:items-center ">
      <p className="mx-4 text-gray-400 ">
        &copy; WeTube {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
