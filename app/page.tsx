import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex-1 overflow-y-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Recommended</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <Link href={`/video/${i + 1}`} key={i} className="group">
            <div className="rounded-lg overflow-hidden">
              <img
                alt="Video thumbnail"
                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                height="200"
                src="https://placehold.co/200x400"
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width="400"
              />
              <div className="p-2">
                <h3 className="font-semibold line-clamp-2">
                  Video Title {i + 1}
                </h3>
                <p className="text-sm text-gray-500">Channel Name</p>
                <p className="text-sm text-gray-500">100K views • 1 day ago</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
