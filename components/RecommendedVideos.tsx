import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

const RecommendedVideos = () => {
  return (
    <aside className="w-96 overflow-y-auto border-l hidden xl:block">
        <ScrollArea className="h-full">
          <div className="p-4">
            <h3 className="font-semibold mb-4">Up next</h3>
            {Array.from({ length: 10 }).map((_, i) => (
              <Link
                href={`/video/${i + 1}`}
                key={i}
                className="flex gap-2 mb-4 group"
              >
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
                  <h4 className="font-semibold line-clamp-2">
                    Related Video Title {i + 1}
                  </h4>
                  <p className="text-sm text-gray-500">Channel Name</p>
                  <p className="text-sm text-gray-500">
                    100K views • 1 day ago
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </ScrollArea>
      </aside>
  )
}

export default RecommendedVideos