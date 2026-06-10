export const PODCAST_CATEGORIES_PAGE_SIZE = 2;

export function getPodcastPaginationMeta(totalItems: number, currentPage: number) {
  const totalPages = Math.max(1, Math.ceil(totalItems / PODCAST_CATEGORIES_PAGE_SIZE));
  const safePage = Math.min(Math.max(1, currentPage), totalPages);
  const startIndex = (safePage - 1) * PODCAST_CATEGORIES_PAGE_SIZE;

  return {
    totalPages,
    currentPage: safePage,
    pageSize: PODCAST_CATEGORIES_PAGE_SIZE,
    startIndex,
    endIndex: startIndex + PODCAST_CATEGORIES_PAGE_SIZE,
  };
}
