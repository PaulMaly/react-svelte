function get(url) {
    return fetch(url).then((res) => {
        if (res.ok) {
            return res.json();
        } else {
            let error = new Error(res.statusText);
            error.response = res;
            throw error;
        }
    });
}

export function getUserCard(username) {
	return get(`https://api.github.com/users/${username}`);
}

export function getRepoCard(username) {
	return get(`https://api.github.com/repos/${username}`);
}