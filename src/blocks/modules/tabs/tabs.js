
    const tabsBtn = document.querySelectorAll(".tabs__btn");
    const tabsItems = document.querySelectorAll(".tabs__article");

    tabsBtn.forEach((item) => {
        item.addEventListener("click", () => {
            const currentBtn = item;
            const tabId = currentBtn.getAttribute("data-tab");
            const currentTab = document.querySelector(tabId);

            if (!currentTab.classList.contains("active")) {

                tabsBtn.forEach((item) => {
                    item.classList.remove("active");
                });

                tabsItems.forEach((item) => {
                    item.classList.remove("active");
                });

                currentBtn.classList.add("active");
                currentTab.classList.add("active");
            }
        });
    });
