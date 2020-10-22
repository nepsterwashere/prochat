import { CronJob } from 'cron'
import { deleteExpiredMessages } from '../services/message.service.js'

const deleteJob = new CronJob('0 6 * * *', () => {
  deleteExpiredMessages()
}, null, true, 'Europe/Berlin');

export { deleteJob }