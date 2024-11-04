import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className=" flex dark:bg-gray-600 bg-amber-100 justify-center p-4 text-lg gap-6">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
