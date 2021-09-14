export const parseNavigationStructure = (pages) => {
  if (pages === null) {
    return [];
  }

  return pages.map((page) => {
    return {
      pageName:
        !page.menuPage || (page.menuPageSubpages && page.pageContainerName)
          ? page.pageContainerName
          : page.menuPage.pageName,
      pageSlug: page.menuPage ? page.menuPage.slug : '',
      linkToExternalUrl: page.linkToExternalUrl,
      subPages: parseNavigationStructure(page.menuPageSubpages),
    };
  });
};
