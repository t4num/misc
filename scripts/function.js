let request = require('request'), config = require('./config.json');

exports.handler = (event, context) => {
    // TODO implement
    var text;
    let githubEvent = event.headers["X-GitHub-Event"];
    switch (githubEvent) {
        case "pull_request":
            let action = event.payload.action;
            switch (action) {
                case "edited":
                    let state = event.payload.review.state;
                    if (state == "approved") {
                        let login = event.payload.review.user.login;
                    }
                    break;
                case "labeled":
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }

    if (!text) {
        context.done();
        return;
    }

    request({
        url: config.slack_web_hook_url,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        json: { text: text, link_names: 1 }
    }, () => {
        context.done();
    });
};
