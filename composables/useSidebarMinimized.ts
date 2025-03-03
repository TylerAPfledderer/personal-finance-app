export const IS_LOCAL_MENU_MINIMIZED = "is-menu-minimized";

export const useSidebarMinimized = () => {
  const localStorageVal = useLocalStorage(IS_LOCAL_MENU_MINIMIZED, false, {
    mergeDefaults: true,
    flush: "sync",
  });

  const toggleMinimizedMenu = () => {
    localStorageVal.value = !localStorageVal.value;
  };

  return {
    isMinimized: localStorageVal,
    toggleMinimizedMenu,
  };
};
