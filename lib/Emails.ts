import dbConnect from './db/db';
import Email from './db/email.model';
import Tag from './db/tag.model';

export async function getEmails() {
  await dbConnect();
  try {
    const response = await fetch('http://localhost:3000/api/emails/getEmails');
    const emails = await response.json();

    return emails.map((email: any) => ({
      ...emails,
      id: email._id.toString(),
      subject: email.subject,
      isChecked: email.isChecked,
      receivedAt: new Date(email.receivedAt).toLocaleString('ko-KR', {
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      }),
    }));
  } catch (error) {
    console.error('Failed to fetch emails:', error);
    throw error;
  }
}

export async function fetchEmails() {
  console.log('Fetching emails...');
  try {
    const response = await fetch(
      'http://localhost:3000/api/emails/fetchEmails'
    );

    if (!response.ok) {
      console.log('Failed to fetch emails');
      throw new Error('Failed to fetch emails');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch emails:', error);
    throw error;
  }
}

export async function checkedEmails(
  emailId: string,
  isChecked: boolean
): Promise<void> {
  try {
    const response = await fetch(
      `http://localhost:3000/api/emails/${emailId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isChecked }),
      }
    );
    console.log('Checked email:', response);
    if (!response.ok) {
      console.log('Failed to check email');
      throw new Error('Failed to check email');
    }
  } catch (error) {
    console.error('Failed to check email:', error);
    throw error;
  }
}

export async function getFilteredEmails() {
  await dbConnect();

  console.log('Fetching emails with tags...', Tag);

  try {
    const emails = await Email.find({}).sort({ receivedAt: -1 });
    const tags = await Tag.find({});

    console.log(tags);

    if (tags.length === 0) {
      console.log('No tags found');

      return emails.map((email) => ({
        id: email._id.toString(),
        subject: email.subject,
      }));
    }

    const tagList = tags.map((tag) => tag.name);

    const filteredEmails = emails.filter((email) =>
      tagList.some((tag) => email.subject.includes(tag))
    );

    return filteredEmails.map((email) => ({
      id: email._id.toString(),
      subject: email.subject,
    }));
  } catch (error) {
    console.error('Failed to fetch filtered emails:', error);
    throw error;
  }
}
