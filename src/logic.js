searchEngines = [{name: ":archiveorg:", url: "https://archive.org/search?query="},
					{name: ":archwiki:", url: "https://wiki.archlinux.org/index.php?search="}, 
					{name: ":duckduckgo:", url: "https://duckduckgo.com/?q="}, 
					{name: ":google:", url: "https://www.google.com/search?q="}, 
					{name: ":yandex:", url: "https://yandex.ru/search/?text="}, 
					{name: ":youtube:", url: "https://www.youtube.com/results?search_query="},
					{name: ":ytmusic:", url: "https://music.youtube.com/search?q="}];

function loadCompletionList() {

	document.getElementById("searchList")
	for (i=0; i < searchEngines.length; i++) {
		newOption = document.createElement("option");
		newOption.innerHTML = searchEngines[i].name;
		document.getElementById("searchList").appendChild(newOption);
	}

}

function setupSearch() {

	searchValue = document.getElementById("searchBox").value;
	searchLink = document.getElementById("searchLink");

	isSearchEngine = false;
	for (i=0; i < searchEngines.length; i++) {
		if (searchValue.includes(searchEngines[i].name)) {
			searchValue = searchValue.replace(searchEngines[i].name, "")
			searchLink.href = searchEngines[i].url + searchValue;
			isSearchEngine = true;
		}
	}

  if (isSearchEngine) {
    return
  }
  else if (isSearchEngine == false && searchValue.includes("http")) {
    searchLink.href = searchValue;
    return
  }
  else {
    searchLink.href = "https://search.brave.com/search?q=" + searchValue;
  }


}
