// Refactor this code

function getURL(dev = false, tasks = {}) {
    if (tasks.prevTask) return '/tasks?hasPrev=true';
    let url = '/tasks'
    url += dev ? `?status=ACTIVE&dev=true&size=20` : ""
    if (tasks.nextTask) return { url: url + '?hasNext=true' }
    return { url }
}
