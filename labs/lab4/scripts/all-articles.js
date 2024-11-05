// Tags
const searchTags = [];

// Individual elements
let parentElement = null;
const tagLists = Array.from(document.querySelectorAll("article .tags"));

// Search Functions

/**
 * initializeSearch(): sets up the article search by tag funcationality 
 * 
 * This function is called at the beginning to set up the search functionality.
 * It takes a DOM element (newParentElement) to insert search tags into. If
 * newParentElement is null, it logs an error to the console. Else,
 * it sets parentElement to newParentElement and retrieves all URL search parameters
 * named "tag." For each tag, it calls addSearchTerm to create and display the tag, then filter articles by that tag.
 */
function initializeSearch(newParentElement) {
  const params = new URLSearchParams(window.location.search);
  if (newParentElement === null) {
    console.error(
      "Cannot insert tags, parent element is null",
      params.getAll("tag")
    );
    return;
  }

  parentElement = newParentElement;
  for (const tag of params.getAll("tag")) {
    addSearchTerm(tag);
  }
}

/**
 * hideArticles: hides/displays articles that do not have a given tag
 * 
 * If searchTags is empty, all articles are shown. Otherwise, it finds articles
 * that contain at least one tag from searchTags by calling findArticlesWithTag,
 * and it hides all articles that do not match.
 */ 
function hideArticles() {
  if (searchTags.length === 0) {
    for (const article of document.querySelectorAll("article")) {
      article.classList.remove("hidden");
    }
    return;
  }

  const articlesWithTags = [];
  for (const tag of searchTags) {
    articlesWithTags.push(...findArticlesWithTag(tag));
  }

  /**
   * use querySelectorAll to select all articles
   * iterate over them in a for loop
   * check if articlesWithTags array does not include the current article being iterated over,
   * then add "hidden" to that article's classList
   * else, remove "hidden" from that article's classList
   */
  // write your code here
  const articles = document.querySelectorAll("article");
  for (let article of articles) {
    if (!articlesWithTags.includes(article)) {
      article.classList.add("hidden");
    } else {
      article.classList.remove("hidden");
    }
  }
}

/**
 * createTag: Creates a clickable tag button for a given search term (text).
 * 
 * The button's text displays the tag text passed in as the argument. When clicked,
 * the button removes itself from the DOM, removes the tag from searchTags, and
 * calls hideArticles to update the displayed articles.
 */
function createTag(text) {
  /**
   * create a new element called button
   * add the class "tag" to its classList
   * set the button's textContent property to text (the passed in argument)
   */
  // write your code here
  let button = document.createElement("button");
  button.classList.add("tag");
  button.textContent = text;

  function remove() {
    button.remove();
    const index = searchTags.indexOf(text);
    if (index !== -1) {
      searchTags.splice(index, 1);
    }

    hideArticles();
  }

  /**
   * add a click event listener to the button, and set the listener to the remove function.
   * return the button element 
   */
  // write your code here
  button.addEventListener("click", remove);
  return button;
}

/** findArticlesWithTag: finds all articles containing a given tag (phrase)
 * 
 * This function takes a tag phrase as a parameter, finds all articles that have that
 * tag, and returns an array of these articles. It first converts the tag to
 * lowercase and removes extra spaces to make matching easier. Then, it iterates
 * through each list of tags in articles to find matches and add those articles to
 * the results array.
 */

function findArticlesWithTag(phrase) {
  const articles = [];
  const sanitizedPhrase = phrase.toLowerCase().trim();
  for (const tl of tagLists) {
    const tags = Array.from(tl.querySelectorAll("li"));
    for (const tag of tags) {
      if (tag.textContent.toLowerCase().trim() === sanitizedPhrase) {
        articles.push(tl.parentElement);
        break;
      }
    }
  }

  return articles;
}

/**
 * addSearchTerm: appends tag button to parent element
 * 
 * This function takes a tag text, creates a tag button for it by calling createTag,
 * and appends the button to parentElement. It also adds the tag to searchTags
 * to keep track of active tags, and it calls hideArticles to update displayed articles.
 */
function addSearchTerm(text) {
  parentElement.appendChild(createTag(text));
  searchTags.push(text);
  hideArticles();
}

// Handlers

/**
 * onSearch: event handler for search bar
 * 
 * This function is triggered when a key is pressed in the search input. If the
 * pressed key is "Enter," it adds the input's current value as a new search tag
 * by calling addSearchTerm. Then, it clears the input field.
 */
function onSearch(event) {
  const input = event.currentTarget;
  /**
   * If event.key equals "Enter":
   * call addSearchTerm and pass the input element's value
   * set input value to an empty string
   */
  // write your code here
  if (event.key == "Enter") {
    addSearchTerm(input.value);
    input.value = "";
  }
}

// Main function

/**
 * main:
 * 
 * This function sets up the main functionality of the page by calling initializeSearch
 * with a specified parent element, and it adds a keypress event listener to the
 * search input that calls onSearch for each key press.
 */
function main() {
  initializeSearch(document.querySelector("#searched-tags"));

  document
    .querySelector("input[type=search]")
    .addEventListener("keypress", onSearch);
}

// Execute main function
main();

/**
 * Order of execution for each event:
 * Pressing Enter:
 * onSearch -> addSearchTerm -> createTag -> hideArticles
 * 
 * Clicking to Remove a Tag:
 * createTag (remove function) -> hideArticles
 * 
 * Loading the Page:
 * main -> initializeSearch -> addSearchTerm -> createTag -> hideArticles 
 */