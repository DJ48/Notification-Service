/**
 *  Controller for the notification request
 */

const Notification = require("../models/notification.model");

/**
 *  Accept a new Notification request
 *  and return the tracking id
 */

exports.acceptNotificationRequest = async (req, res)=>{

    const notificationObj = {
        subject : req.body.subject,
        content : req.body.content,
        recepientEmails : req.body.recepientEmails,
        requester : req.body.requester,
        ticketId : req.body.ticketId
    }

    try {
        const notification = await Notification.create(notificationObj);

        res.status(201).send({
            requestId : notification.ticketId,
            status : "Accepted request - It's in progress"
        });
    } catch (error) {
        console.log("Error while accepting a notification request: ",error);

        res.status(500).send({
            message : "Error while accepting a notification request"
        });
    }
}


/**
 *  Check the notification status (if 
 *  email was sent or not) using the 
 *  tracking id
 */