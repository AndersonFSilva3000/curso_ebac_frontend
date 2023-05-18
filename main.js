document.addEventListener('DOMContentLoaded', () => {
  const avatar = document.querySelector('#avatar')
  const nameElement = document.querySelector('#name')
  const userName = document.querySelector('#username')
  const response = document.querySelector('#repos')
  const followers = document.querySelector('#followers')
  const followings = document.querySelector('#followings')
  const link = document.querySelector('#link')

  fetch('https://api.github.com/users/AndersonFSilva3000')
    .then(function (res) {
      return res.json()
    })
    .then(function (json) {
      avatar.src = json.avatar_url
      nameElement.innerText = json.name
      userName.innerText = json.login
      response.innerText = json.public_repos
      followers.innerText = json.followers
      followings.innerText = json.following
      link.href = json.html_url
    })
})
