"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  console.log(q);

  return (
    <main className="flex-1 overflow-y-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Search Results for "{q}"</h2>
      <div className="space-y-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <Link href={`/video/${i + 1}`} key={i} className="flex gap-4 group">
            <img
              alt="Video thumbnail"
              className="w-40 h-24 object-cover rounded-lg transition-transform group-hover:scale-105"
              height="96"
              src="https://placehold.co/96x160"
              style={{
                aspectRatio: "160/96",
                objectFit: "cover",
              }}
              width="160"
            />
            <div>
              <h3 className="font-semibold line-clamp-2">
                Search Result Video Title {i + 1}
              </h3>
              <p className="text-sm text-gray-500">Channel Name</p>
              <p className="text-sm text-gray-500">100K views • 1 day ago</p>
              <p className="text-sm text-gray-500 line-clamp-2">
                Video description lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
