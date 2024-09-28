"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThumbsUp } from "lucide-react";

export default function VideoPage() {
  const id = 5;

  return (
    <>
      <main className="flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video mb-4">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h1 className="text-2xl font-bold mb-2">Video Title {id}</h1>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img
                alt="Channel avatar"
                className="w-10 h-10 rounded-full mr-2"
                src="https://placehold.co/40"
              />
              <div>
                <p className="font-semibold">Channel Name</p>
                <p className="text-sm text-gray-500">1M subscribers</p>
              </div>
            </div>
            <div className="flex items-center">
              <Button className="mr-2">Subscribe</Button>
              <Button variant="secondary">
                <ThumbsUp className="mr-2 h-4 w-4" />
                Like
              </Button>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p className="text-sm text-gray-700">1M views • 1 month ago</p>
            <p className="mt-2">
              Video description lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Comments</h2>
            {/* Add comments section here */}
          </div>
        </div>
      </main>
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
    </>
  );
}
