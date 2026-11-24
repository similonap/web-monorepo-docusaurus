import { PostCardSkeleton } from "@/components/PostCard";

const Loading = () => {
    return (
        <div className="flex min-h-screen flex-col items-stretch p-4 bg-zinc-50 font-sans dark:bg-black">
            {Array.from({ length: 5 }).map((_, index) => (
                <PostCardSkeleton key={index} />
            ))}
        </div>
    );
};

export default Loading;
