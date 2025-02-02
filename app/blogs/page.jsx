import Link from "next/link";
import React from "react";

export const blogs = [
  {
    id: 1,
    img: "https://picsum.photos/200/150",
    title: "Blog 1 - Default Fuad 1",
    des: "Blog Description How is Fuad survive in the baku?",
  },
  {
    id: 2,
    img: "https://picsum.photos/200/150",
    title: "Blog 2 - Default ELxan 2",
    des: "Blog Description How is Elxan survive in the kruk?",
  },
];
const Blogs = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl tracking-wide text-gray-300">
        Blogs Page
      </h1>

      <div className="flex flex-col gap-5 border border-white">
        {blogs.map((item) => {
          return (
            <Link href={`/blogs/${item.id}`} className="flex gap-4">
              <img src={item.img} alt="" />
              <div>
                <h2 className="text-4xl tracking-wide py-2 text-gray-200">
                  {item.title}
                </h2>
                <p className="text-2xl text-gray-300 tracking-wide">
                  {item.des }
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
