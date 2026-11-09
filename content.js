// Edit the schedule, RSVP deadline, announcements, and form link here.
const rsvpDeadline = "2026-11-15";

const invitationContent = {
  days: {
    wednesday: [
      {
        title: "Jingle Blades",
        displayTitle: { before: "Jingle", crossedOut: "Bells", after: "Blades" },
        time: "4:30–5:30 PM",
        dateTime: "2026-11-25T16:30:00-05:00",
        venue: "Craft Axe Throwing",
        address: "101 E. Main St, Lexington, SC 29072",
        description: "Aim for the bullseye and let an axe fly.\nWe’ll cover the cost. Come give it a try!",
        rsvp: true,
        limitedSpace: true,
        showContributionNote: true,
      },
      {
        title: "’Twas the Night Before Thanksgiving",
        time: "6:30 PM",
        dateTime: "2026-11-25T18:30:00-05:00",
        venue: "Beverly’s house",
        description: "Breakfast for dinner, then game night begins.\nCome hungry, get cozy, and see who wins.",
        rsvp: true,
      },
    ],
    thursday: [
      {
        title: "Thanks, Giving & Gravy",
        time: "1:00 PM",
        dateTime: "2026-11-26T13:00:00-05:00",
        venue: "Angie’s house",
        description: "Come hungry for gravy and ready for Taboo.\nWe’ll give thanks, fill our plates, and share a laugh or two.",
        rsvp: true,
      },
    ],
  },
  rsvpDeadline,
  announcements: [],
  rsvpUrl: "https://tally.so/r/VpjABl",
};
