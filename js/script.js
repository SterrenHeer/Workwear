function tabs(tabsContainerSelector, tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    let tabs = document.querySelectorAll(`${tabsContainerSelector} ${tabsSelector}`),
		tabsContent = document.querySelectorAll(`${tabsContainerSelector} ${tabsContentSelector}`),
		tabsParent = document.querySelector(`${tabsContainerSelector} ${tabsParentSelector}`);

	function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('flex', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
	}

	function showTabContent(i = 0) {
        tabsContent[i].classList.add('flex', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }
    
    hideTabContent();
    showTabContent();

	tabsParent.addEventListener('click', function(event) {
		const target = event.target;
		if(target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
		}
	});
}

if (document.querySelector('.categories_tab') != null) {
    tabs('.categories_tab', '.categories_tab_item', '.categories_tab_content', '.categories_tab_header', 'categories_tab_active');
}
if (document.querySelector('.categories_tab_row_image') != null) {
    tabs('.categories_tab_row_image.subtab_1', '.categories_subtab_item', '.categories_subtab_content', '.categories_subtab_header', 'categories_subtab_active');
    tabs('.categories_tab_row_image.subtab_2', '.categories_subtab_item', '.categories_subtab_content', '.categories_subtab_header', 'categories_subtab_active');
}
