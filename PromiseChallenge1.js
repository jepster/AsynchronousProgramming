// In this challenge, the promise will resolve with a given data set.
// Create a promise chain of four steps to do the following

// Step 1: Return only the unread alerts, if there are none, trigger an error that says there are no unread alerts
// Step 2: If the alert is a system alert, call the printSystemAlert function on it and remove it from the list
// Step 3: Create a console.error message for the critical alerts that prints the alert message, if there are no ciritical alerts, do nothing and proceed to step 4
// Step 4: Console log all other types of alerts with the message, severity, and type properties

const alerts = [
    {
        type: "system",
        severity: "critical",
        timestamp: "",
        message: "System has experienced an error and must be restarted",
        user_id: null,
        short_code: "VDN877",
        readStatus: true
    },
    {
        type: "users",
        severity: "critical",
        timestamp: "",
        message: "Unauthorized access to the system has been logged",
        user_id: null,
        short_code: "VDN077",
        readStatus: false
    },
    {
        type: "system",
        severity: "informational",
        timestamp: "",
        message: "There are new updates available",
        user_id: null,
        short_code: "VDN827",
        readStatus: false
    },
    {
        type: "users",
        severity: "warning",
        timestamp: "",
        message: "Some users on this system have not updated their passwords",
        user_id: null,
        short_code: "HDN877",
        readStatus: false
    }
]

const printSystemAlert = (alert) => {
    console.info(alert, `This is a ${alert.severity} system wide alert: ${alert.message}`)
}

new Promise((resolve, reject) => {
    const unreadAlerts = alerts.filter(item => {
        if (item.readStatus === false) {
            return item;
        }
    });

    if (unreadAlerts.length === 0) {
        throw new Error('There are no unread alerts.');
    }

    resolve(unreadAlerts);

    // return unreadAlerts;
}).then(alerts => {
    const notSystemAlert = alerts.filter(item => {
        if (item.type === 'system') {
            printSystemAlert(item);
        } else {
            return item;
        }
    });

    return notSystemAlert;
}).then(alerts => {
    const notCriticalAlert = alerts.filter(item => {
        if (item.severity === 'critical') {
            console.error(item,  `Critical alert found: This is a ${item.severity} system wide alert: ${item.message}`);
        } else {
            return item;
        }
    });

    return notCriticalAlert;
}).then(alerts => {
    console.log(alerts);
})