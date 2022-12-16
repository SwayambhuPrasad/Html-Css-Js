const GITHUBAPI = "https://api.github.com/users/"

const form = document.getElementById("form")
const search = document.getElementById("search")
const main = document.getElementById("main")

async function getUser(username) {
    try {
        const { data } = await axios(GITHUBAPI + username)
        createUserCard(data);
    }
    catch (error) {

    }
}
function createUserCard(data) {
    displayName = data.login;
    displayAvatar = data.avatar_url;
    card = `<div class="card">
    <div >
        <img class="avatar" src=${displayAvatar}  alt=${displayName}>
    </div>
    <div class="details">
    <h2>${displayName}</h2>
    <ul>
    <li >${data.public_repos} Repos</li>
    <li >${data.followers} Followers</li>
    <li >${data.following} Following</li>
    </ul>
</div>
</div>`
    main.innerHTML = card;
}
form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (!search.value) return;
    getUser(search.value);
    console.log("submitted")
})
