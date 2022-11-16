var CATEGORIES = [
  {
    name: "Sports",
    listItems: [
      {
        name: "Football",
        checked: false,
      },
      {
        name: "Soccer",
        checked: false,
      },
      {
        name: "Basketball",
        checked: false,
      },
      {
        name: "Baseball",
        checked: false,
      },
      {
        name: "Tennis",
        checked: false,
      },
      {
        name: "MMA",
        checked: false,
      },
      {
        name: "Boxing",
        checked: false,
      },
      {
        name: "Volleyball",
        checked: false,
      },
      {
        name: "Wrestling",
        checked: false,
      },
      {
        name: "Cricket",
        checked: false,
      },
    ],
  },
  {
    name: "Groceries",
    listItems: [
      {
        name: "Cheese",
        checked: false,
      },
      {
        name: "Bread",
        checked: false,
      },
      {
        name: "Milk",
        checked: false,
      },
      {
        name: "Steak",
        checked: false,
      },
      {
        name: "Rice",
        checked: false,
      },
      {
        name: "Broccoli",
        checked: false,
      },
      {
        name: "Tomatos",
        checked: false,
      },
      {
        name: "Avacado",
        checked: false,
      },
      {
        name: "Coffee Mix",
        checked: false,
      },
      {
        name: "Lettuce",
        checked: false,
      },
    ],
  },
  {
    name: "Video Games",
    listItems: [
      {
        name: "Total War: Warhammer 3",
        checked: false,
      },
      {
        name: "Metro Exodus",
        checked: false,
      },
      {
        name: "The Witcher 3: Wild Hunt",
        checked: false,
      },
      {
        name: "Team Fortress 2",
        checked: false,
      },
      {
        name: "Noita",
        checked: false,
      },
      {
        name: "Sid Meier's Civilization VI",
        checked: false,
      },
      {
        name: "Star Wars: Battlefront II",
        checked: false,
      },
      {
        name: "God of War",
        checked: false,
      },
      {
        name: "Dark Souls",
        checked: false,
      },
      {
        name: "Uncharted",
        checked: false,
      },
    ],
  },
  {
    name: "Movies",
    listItems: [
      {
        name: "John Wick",
        checked: false,
      },
      {
        name: "Mad Max: Fury Road",
        checked: false,
      },
      {
        name: "Shutter Island",
        checked: false,
      },
      {
        name: "Kill Bill",
        checked: false,
      },
      {
        name: "The Witch",
        checked: false,
      },
      {
        name: "The Northman",
        checked: false,
      },
      {
        name: "The Batman",
        checked: false,
      },
      {
        name: "The Black Phone",
        checked: false,
      },
      {
        name: "Gangs of New York",
        checked: false,
      },
      {
        name: "There Will be Blood",
        checked: false,
      },
    ],
  },
  {
    name: "Board Games",
    listItems: [
      {
        name: "Sorry!",
        checked: false,
      },
      {
        name: "Checkers",
        checked: false,
      },
      {
        name: "Chess",
        checked: false,
      },
      {
        name: "Monopoly",
        checked: false,
      },
      {
        name: "Risk",
        checked: false,
      },
      {
        name: "Sorry!",
        checked: false,
      },
      {
        name: "Battleship",
        checked: false,
      },
      {
        name: "Candy Land",
        checked: false,
      },
      {
        name: "Backgammon",
        checked: false,
      },
      {
        name: "Chutes and Ladders",
        checked: false,
      },
    ],
  },
  {
    name: "Albums",
    listItems: [
      {
        name: "Leviathan",
        checked: false,
      },
      {
        name: "May Our Chambers Be Full",
        checked: false,
      },
      {
        name: "Souvlaki",
        checked: false,
      },
      {
        name: "Homogenic",
        checked: false,
      },
      {
        name: "Sinner Get Ready",
        checked: false,
      },
      {
        name: "Songs for the Deaf",
        checked: false,
      },
      {
        name: "The Suburbs",
        checked: false,
      },
      {
        name: "You Fail Me",
        checked: false,
      },
      {
        name: "TR/ST",
        checked: false,
      },
      {
        name: "American Dream",
        checked: false,
      },
    ],
  },
  {
    name: "Colors",
    listItems: [
      {
        name: "Red",
        checked: false,
      },
      {
        name: "Orange",
        checked: false,
      },
      {
        name: "Yellow",
        checked: false,
      },
      {
        name: "Green",
        checked: false,
      },
      {
        name: "Blue",
        checked: false,
      },
      {
        name: "Indigo",
        checked: false,
      },
      {
        name: "Violet",
        checked: false,
      },
      {
        name: "Pink",
        checked: false,
      },
      {
        name: "White",
        checked: false,
      },
      {
        name: "Black",
        checked: false,
      },
    ],
  },
  {
    name: "Software",
    listItems: [
      {
        name: "Adobe XD",
        checked: false,
      },
      {
        name: "Visual Studio Code",
        checked: false,
      },
      {
        name: "Adobe Photoshop",
        checked: false,
      },
      {
        name: "Cyberduck",
        checked: false,
      },
      {
        name: "Blender",
        checked: false,
      },
      {
        name: "Slack",
        checked: false,
      },
      {
        name: "Steam",
        checked: false,
      },
      {
        name: "Discord",
        checked: false,
      },
      {
        name: "Zoom",
        checked: false,
      },
      {
        name: "Adobe Illustrator",
        checked: false,
      },
    ],
  },
  {
    name: "Music Genres",
    listItems: [
      {
        name: "Metal",
        checked: false,
      },
      {
        name: "Rock",
        checked: false,
      },
      {
        name: "Pop",
        checked: false,
      },
      {
        name: "Rap",
        checked: false,
      },
      {
        name: "Country",
        checked: false,
      },
      {
        name: "Electronic",
        checked: false,
      },
      {
        name: "Indie",
        checked: false,
      },
      {
        name: "Blues",
        checked: false,
      },
      {
        name: "Folk",
        checked: false,
      },
      {
        name: "Funk",
        checked: false,
      },
    ],
  },
  {
    name: "D&D Classes",
    listItems: [
      {
        name: "Artificer",
        checked: false,
      },
      {
        name: "Barbarian",
        checked: false,
      },
      {
        name: "Fighter",
        checked: false,
      },
      {
        name: "Bard",
        checked: false,
      },
      {
        name: "Ranger",
        checked: false,
      },
      {
        name: "Rogue",
        checked: false,
      },
      {
        name: "Cleric",
        checked: false,
      },
      {
        name: "Paladin",
        checked: false,
      },
      {
        name: "Sorcerer",
        checked: false,
      },
      {
        name: "Wizard",
        checked: false,
      },
    ],
  },
];

var userExists = false;
var userFullName = "";
/**
 * It toggles the class "strike" on the parent element of the element that was clicked, and then it
 * sets the checked value of the item to the opposite of what it was before.
 * @param element - the element that was clicked
 * @param listIndex - The index of the list in the CATEGORIES array.
 * @param itemIndex - The index of the item in the list
 */
function itemChecked(element, listIndex, itemIndex) {
  $(element).parent().toggleClass("strike");
  let checkedValue = !CATEGORIES[listIndex].listItems[itemIndex].checked;
  CATEGORIES[listIndex].listItems[itemIndex].checked = checkedValue;
}

function addItem(listIndex) {
  let newItemName = $("#addItem").val();
  let newItemObj = {
    name: newItemName,
    checked: false,
  };
  CATEGORIES[listIndex].listItems.push(newItemObj);
  loadListItems(listIndex);
}

function deleteItem(listIndex, idx) {
  CATEGORIES[listIndex].listItems.splice(idx, 1);
  loadListItems(listIndex);
}

function loadListItems(listIndex) {
  let listString = ` <h1>List Manager</h1>
<ul>`;
  $.each(CATEGORIES[listIndex].listItems, function (idx, listItem) {
    listString += `<li id="${idx}" class=${
      listItem.checked ? "strike" : ""
    }><input ${
      listItem.checked ? (checked = "checked") : ""
    } type="checkbox" id="${idx}" name="${
      listItem.name
    }" onclick="itemChecked(this, ${listIndex}, ${idx})">${listItem.name}</span>
  <span class="delete" onclick="deleteItem(${listIndex}, ${idx})"><i class="fa-regular fa-trash-can"></i></span></li>`;
  });
  listString += `</ul>
 <div class="addItemInput">
    <div class="add-input">
        <input id="addItem" type="text">
        <button onclick="addItem(${listIndex})" class="add">Add Item</button>
        <button onclick="loadMainLists()" class="back-btn">Go Back</button>
    </div>
 </div>
 `;
  $("#app").html(listString);
}

function loadMainLists() {
  let listString = `<h1>List Manager</h1><ul>`;
  $.each(CATEGORIES, function (idx, mainList, listItem) {
    listString += `<li id="${idx}" onclick="loadListItems(${idx})">${mainList.name}
    <span class="right">Items: ${mainList.listItems.length}</span></li>`;
  });
  listString += "</ul>";
  $("#app").html(listString);
}

function initFirebase() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("auth change Logged In");
      if (user.displayName) {
        $(".name").html(user.displayName);
      }
      $(".load").prop("disabled", false);
      userExists = true;
    } else {
      console.log("auth change Logged Out");
      $(".name").html("");
      $(".load").attr("disabled", true);
      userExists = false;
      userFullName = "";
    }
  });
}

function signOut() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("Signed out");
      $("h1").hide();
      $("ul").hide();
    })
    .catch((error) => {
      console.log("Error signing out " + errorMessage);
    });
}

function login() {
  let email = $("#login-email").val();
  let password = $("#login-password").val();
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("Logged In");
      $("#login-email").val("");
      $("#login-password").val("");
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("Login Error " + errorMessage);
    });
}

function createAccount() {
  let fName = $("#fName").val();
  let lName = $("#lName").val();
  let email = $("#email").val();
  let password = $("#password").val();
  let fullName = fName + " " + lName;
  $(".name").html(fullName);
  console.log(
    "Account Details: " + fName + " " + lName + " " + email + " " + password
  );

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("created");
      firebase.auth().currentUser.updateProfile({
        displayName: fullName,
      });
      userFullName = fullName;
      $(".name").html(userFullName);
      $("#fName").val("");
      $("#lName").val("");
      $("#email").val("");
      $("#password").val("");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("create error " + errorMessage);
    });
}

function signIn() {
  firebase
    .auth()
    .signInAnonymously()
    .then(() => {
      console.log("Signed in");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("Error signing in " + errorMessage);
    });
}

$(document).ready(function () {
  try {
    let app = firebase.app();
    initFirebase();
    // signInAnon();
    initListeners();
    // loadMainLists();
  } catch (error) {
    console.log("error " + error);
  }
});
