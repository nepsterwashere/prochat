const { CronJob } = require('cron');
const { deleteExpiredMessages } = require('../services/message.service');

const deleteJob = new CronJob('0 6 * * *', () => {
  deleteExpiredMessages()
}, null, true, 'Europe/Berlin');

module.exports = {
  deleteJob
}