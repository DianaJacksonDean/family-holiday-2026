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
    const heading = element("h3", event.title);
    if (event.displayTitle) {
      const { before, crossedOut, after } = event.displayTitle;
      const crossedOutWord = element("s", crossedOut);
      crossedOutWord.setAttribute("aria-hidden", "true");
      heading.replaceChildren(`${before} `, crossedOutWord, ` ${after}`);
    }
    article.append(
      eventTime,
      heading,
      element("p", event.venue, "venue"),
    );
    if (event.address) article.append(element("p", event.address, "address"));
    article.append(element("p", event.description, "event-copy"));
    if (event.rsvp) {
      const spaceNote = event.limitedSpace ? " (Limited Space Available)" : "";
      const rsvpLink = element("a", `RSVP Required${spaceNote}`, "rsvp-link");
      rsvpLink.href = "#rsvp";
      rsvpLink.dataset.rsvp = "";
      rsvpLink.setAttribute("aria-label", `RSVP Required${spaceNote} for ${event.title}`);
      article.append(rsvpLink);
    }
    if (event.showContributionNote) {
      const note = element("p", "", "event-copy");
      const noteText = element("small");
      const star = element("span", "✦");
      star.setAttribute("aria-hidden", "true");
      const contributionLink = element("a", "chip in and put a little in the pot");
      contributionLink.href = "#contributions";
      noteText.append(star, " We’re covering the venue fee. If you’d like to ", contributionLink, ", any amount is welcome.");
      note.append(noteText);
      article.append(note);
    }
    schedule.append(article);
  }
}

const navDeadline = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "numeric",
  day: "numeric",
  timeZone: "UTC",
}).format(new Date(invitationContent.rsvpDeadline));
document.getElementById("nav-rsvp").textContent = `RSVP by ${navDeadline}`;
const calloutDeadline = document.getElementById("callout-rsvp-deadline");
if (calloutDeadline) {
  calloutDeadline.textContent = `THIS ${navDeadline.toUpperCase()}`;
  calloutDeadline.dateTime = invitationContent.rsvpDeadline;
}

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
