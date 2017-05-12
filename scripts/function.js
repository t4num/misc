exports.handler = (event, context, callback) => {
    // TODO implement
    let githubEvent = event.headers["X-GitHub-Event"];
    switch (githubEvent)
    {
        case "pull_request":
            let state = event.payload.review.state;
            let login = event.payload.review.user.login;
            if (state == "approved")
            {
                
            }
            break;
        case "pull_request_review":
            
            break;
    }
    callback(null, 'Hello from Lambda');
};