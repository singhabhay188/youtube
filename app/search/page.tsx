"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import VideoLoader from "@/components/VideoLoader";
import VideoNew from "@/components/VideoNew";
import fetchSearch from "@/utils/fetchSearch";
import { VideoType } from "@/types/types";


type SavedSearch = {
  query: string;
  results: VideoType[];
};

function Component() {
  const [videos, setVideos] = useState<VideoType[]>([]);
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  console.log(q);

  useEffect(() => {
    async function getSearch() {
      if (!q) return;

      // Check in localStorage
      const savedSearches: SavedSearch[] = JSON.parse(localStorage.getItem("searches") || "[]");

      // Check if the query is already saved
      const existingSearch = savedSearches.find(search => search.query === q);

      if (!existingSearch) {
        const fvideos = await fetchSearch(q);
        setVideos(fvideos);

        // Save the new search with its results
        savedSearches.push({ query: q, results: fvideos });
        if (savedSearches.length > 10) savedSearches.shift();
        localStorage.setItem("searches", JSON.stringify(savedSearches));
        console.log('returning from api');
      } else {
        setVideos(existingSearch.results);
        console.log('returning from localstorage');
      }
    }
    getSearch();
  }, [q]);

  if (!q) return <h2 className="text-2xl font-bold mb-4">No search query found</h2>;

  return (
    <main className="flex-1 overflow-y-auto p-4 max-w-screen-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Search Results for &quot;{q}&quot;</h2>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {videos.length === 0 ? (
          Array.from({ length: 12 }).map((_, i) => <VideoLoader key={i} />)
        ) : (
          videos.map((video, i) => <VideoNew key={i} video={video} i={i} />)
        )}
      </div>
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  )
}
