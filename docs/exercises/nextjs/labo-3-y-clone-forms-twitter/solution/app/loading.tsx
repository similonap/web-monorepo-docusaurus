import { PostListSkeleton } from "@/components/PostList";

const Loading = () => {
    return (
        <div className="flex justify-center p-4">
            <PostListSkeleton />
        </div>
    );
};

export default Loading;
