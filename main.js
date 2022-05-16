const userLinks = {
  github: 'Mihgueu',
  youtube: 'UCLO49OijuxplwDRJGs42CLQ',
  instagram: 'Mihgueu',
  facebook: 'facebook',
  twitter: 'Mihgueu'
}

function changeUserLinks() {
  //const geted = document.getElementById('nameTitleUser')
  //geted.textContent = 'Miguelitos'
  //nameTitleUser.textContent = "Mihg" tbm pd ser usado
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    if (social == 'youtube') {
      li.children[0].href = `https://${social}.com/channel/${userLinks[social]}`
    } else {
      li.children[0].href = `https://${social}.com/${userLinks[social]}`
    }
  }
}
changeUserLinks()

function getApiGitHubProfile() {

    const url = `https://api.github.com/users/${userLinks.github}`
    fetch(url).then(response => response.json()).then(data =>{
      nameTitleUser.textContent = data.name
      bioTitleUser.textContent = data.bio
      linkGitHub.href = data.html_url
      linkGitHub.src = data.avatar_url
      userLoginGithubTitleUser.textContent = data.login
    })

}
getApiGitHubProfile()
