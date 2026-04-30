<div class="h-12.25 flex flex-col gap-1">
    <div class="max-md:w-60 md:w-104 h-4 bg-[#DCDCDC] rounded-xs shimmer"></div>
    <div class="max-md:w-48 md:w-88 h-4 bg-[#DCDCDC] rounded-xs shimmer"></div>
</div>

<style lang="postcss">
    @keyframes shimmer {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(100%);
        }
    }
    .shimmer{
        @apply overflow-hidden relative before:content-[''] before:bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.4)_50%,rgba(255,255,255,0)_100%)] before:absolute before:h-full before:w-full before:z-50 before:animate-[shimmer_1s_infinite]
    }
</style>