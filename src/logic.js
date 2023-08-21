function search() {

	searchValue = document.getElementById("searchBox").value;
	searchLink = document.getElementById("searchLink");

	searchEngines = [{name: ":archwiki:", url: "https://wiki.archlinux.org/index.php?search="}, 
					{name: ":duckduckgo:", url: "https://duckduckgo.com/?q="}, 
					{name: ":google:", url: "https://www.google.com/search?q="}, 
					{name: ":yandex:", url: "https://yandex.ru/search/?text="}, 
					{name: ":youtube:", url: "https://www.youtube.com/results?search_query="}];
				
	for (i=0; i < searchEngines.length; i++) {
		if (searchValue.includes(searchEngines[i].name)) {
			searchValue = searchValue.replace(searchEngines[i], "")
			searchLink.href = searchEngines[i].url + searchValue;
		}
	}

	document.getElementById("searchLink").click();

}
