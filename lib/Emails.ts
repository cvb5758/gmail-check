import dbConnect from './db/db';
import Email from './db/email.model';

export async function getEmails() {
  await dbConnect();
  try {
    const emails = await Email.find({});
    return emails.map((email) => ({
      id: email._id.toString(),
      subject: email.subject,
    }));
  } catch (error) {
    console.error('Failed to fetch emails:', error);
    throw error;
  }
}

export async function fetchEmails() {
  try {
    const response = await fetch('/api/emails');
    if (!response.ok) {
      throw new Error('Failed to fetch emails');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch emails:', error);
    throw error;
  }
}
