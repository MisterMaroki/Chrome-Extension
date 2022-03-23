let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-dash");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn");

if (leadsFromLocalStorage) {
	myLeads = leadsFromLocalStorage;
	render(myLeads);
}

tabBtn.addEventListener("click", function () {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		myLeads.push(tabs[0].url);
		localStorage.setItem("myLeads", JSON.stringify(myLeads));
		render(myLeads);
	});
});

function render(leads) {
	let listItems = "";
	for (let i = 0; i < leads.length; i++) {
		listItems += `
					<li>
							<a target='_blank' href='${leads[i]}'>
							 		${leads[i]}
							</a>
					</li>
			`;
	}
	ulEl.innerHTML = listItems;
}
// function activateDeleteBtn() {
// 	// deleteBtn.classList = "active";
// 	deleteBtn.innerText = "Are you sure?";
// }
deleteBtn.addEventListener("click", function () {
	deleteBtn.innerText = "X";
	deleteBtn.style.background = "#222";
	deleteBtn.addEventListener("click", function () {
		localStorage.clear();
		myLeads = [];
		render(myLeads);
		deleteBtn.innerText = "delete all save links ";
		deleteBtn.style.background = "#fff";
	});
	setTimeout(() => {
		deleteBtn.innerText = "delete all save links ";
		deleteBtn.style.background = "#fff";
	}, 2000);
});
document.getElementsByClassName("rest").addEventListener("click", function () {
	deleteBtn.innerText = "delete all save links ";
});

inputBtn.addEventListener("click", function () {
	myLeads.push(inputEl.value);
	inputEl.value = "";
	localStorage.setItem("myLeads", JSON.stringify(myLeads));
	render(myLeads);
});
