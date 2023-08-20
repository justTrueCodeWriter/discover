function search() {

	searchValue = document.getElementById("searchBox").value;
	searchLink = document.getElementById("searchLink");

	searchEngines = [":archwiki:", ":duckduckgo:", ":google:", ":yandex:", ":youtube:"];

	if (searchValue.includes(searchEngines[0])) {
		searchValue = searchValue.replace(searchEngines[0], "")
		searchLink.href = "https://wiki.archlinux.org/index.php?search="+searchValue;
	}
	else if (searchValue.includes(searchEngines[1])) {
		searchValue = searchValue.replace(searchEngines[1], "")
		searchLink.href = "https://duckduckgo.com/?q="+searchValue;
	}
	else if (searchValue.includes(searchEngines[2])) {
		searchValue = searchValue.replace(searchEngines[2], "")
		searchLink.href = "https://www.google.com/search?q=" + searchValue;
	}
	else if (searchValue.includes(searchEngines[3])) {
		searchValue = searchValue.replace(searchEngines[3], "")
		searchLink.href = "https://yandex.ru/search/?text="+searchValue;
	}
	else if (searchValue.includes(searchEngines[4])) {
		searchValue = searchValue.replace(searchEngines[4], "")
		searchLink.href = "https://www.youtube.com/results?search_query="+searchValue;
	}

	document.getElementById("searchLink").click();

}
