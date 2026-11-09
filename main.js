function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function timeElement(text, dateTime) {
  const time = element("time", text);
  time.dateTime = dateTime;
  return time;
}

for (const [day, events] of Object.entries(invitationContent.days)) {
  const schedule = document.getElementById(`${day}-events`);
  for (const event of events) {
    const article = element("article", "", "event");
    const eventTime = element("p", "", "event-time");
    eventTime.append(timeElement(event.time, event.dateTime));
    article.append(
      eventTime,
      element("h3", event.title),
      element("p", event.venue, "venue"),
    );
    if (event.address) article.append(element("p", event.address, "address"));
    article.append(element("p", event.description, "event-copy"));
    if (event.rsvp) {
      const rsvpLink = element("a", "RSVP", "rsvp-link");
      rsvpLink.href = "#rsvp";
      rsvpLink.dataset.rsvp = "";
      rsvpLink.setAttribute("aria-label", `RSVP for ${event.title}`);
      article.append(rsvpLink);
    }
    schedule.append(article);
  }
}

const { date, dateTime } = invitationContent.rsvpDeadline;
const giftDeadline = document.getElementById("gift-deadline");
giftDeadline.append(element("strong", "Sign up by"), " ", timeElement(date, dateTime));
giftDeadline.hidden = false;

const navDeadline = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "numeric",
  day: "numeric",
  timeZone: "UTC",
}).format(new Date(dateTime));
document.getElementById("nav-rsvp").textContent = `RSVP by ${navDeadline}`;

const announcements = document.getElementById("announcements");
const announcementDate = new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeZone: "UTC" });
const newestFirst = [...invitationContent.announcements].sort((first, second) => second.date.localeCompare(first.date));
document.getElementById("updates-notice").hidden = newestFirst.length === 0;
document.getElementById("updates-section").hidden = newestFirst.length === 0;
for (const { date, items } of newestFirst) {
  const heading = element("h3", "", "announcement-date");
  heading.append(timeElement(announcementDate.format(new Date(date)), date));
  const list = element("ul");
  for (const message of items) {
    list.append(element("li", message));
  }
  announcements.append(heading, list);
}

for (const shortcut of document.querySelectorAll("[data-rsvp]")) {
  shortcut.href = invitationContent.rsvpUrl;
}
