export const BLOG_PAGE_SIZE = 9;

export function getBlogPaginationMeta(totalItems: number, currentPage: number) {
  const totalPages = Math.max(1, Math.ceil(totalItems / BLOG_PAGE_SIZE));
  const safePage = Math.min(Math.max(1, currentPage), totalPages);
  const startIndex = (safePage - 1) * BLOG_PAGE_SIZE;

  return {
    totalPages,
    currentPage: safePage,
    pageSize: BLOG_PAGE_SIZE,
    startIndex,
    endIndex: startIndex + BLOG_PAGE_SIZE,
  };
}
