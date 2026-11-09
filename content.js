// Edit the schedule, RSVP deadline, announcements, and form link here.
const rsvpDeadline = { date: "November 15, 2026", dateTime: "2026-11-15" };

const invitationContent = {
  days: {
    wednesday: [
      {
        title: "Jingle Blades",
        time: "4:30–5:30 PM",
        dateTime: "2026-11-25T16:30:00-05:00",
        venue: "Craft Axe Throwing",
        address: "101 E. Main St, Lexington, SC 29072",
        description: "An optional round of axe throwing before we gather for the evening. Everyone’s welcome to give it a try. RSVP if you’re joining us.",
        rsvp: true,
      },
      {
        title: "’Twas the Night Before Thanksgiving",
        time: "6:30 PM",
        dateTime: "2026-11-25T18:30:00-05:00",
        venue: "Beverly’s house",
        description: "Breakfast for dinner, a little Christmas cheer, and a chance to catch up before turkey day.",
      },
    ],
    thursday: [
      {
        title: "Thanks, Giving & Gravy",
        time: "1:00 PM",
        dateTime: "2026-11-26T13:00:00-05:00",
        venue: "Angie’s house",
        description: "Come hungry for gravy and ready for Taboo. We’ll give thanks, fill our plates, and share a laugh or two.",
      },
    ],
  },
  rsvpDeadline,
  announcements: [],
  rsvpUrl: "https://tally.so/r/VpjABl",
};
