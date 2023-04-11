"use strict";

function dateOfLastCommit(username) {
   return fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': GITHUB_TOKEN}}).then(resp => {
        resp.json().then(data => {
            let commit = data.filter(event => event.type === "PushEvent");
            // console.log(commit);
            return commit[0].created_at
        })
    })
}

dateOfLastCommit("AlexPerez711").then(data => console.log(new Date(data).toDateString()));