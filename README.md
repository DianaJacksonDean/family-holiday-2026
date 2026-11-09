# Family Holiday Celebration 2026

A single-page invitation for November 25–26, 2026. The site uses plain HTML, CSS, and JavaScript and runs without package installation or a build step.

## Preview locally

Open `index.html` in a browser. To preview over HTTP, run `python3 -m http.server 8000 --bind 127.0.0.1` from this directory and open [the local preview](http://127.0.0.1:8000/). Stop the server with Ctrl+C when finished. The disposable design mockup lives under the ignored `tmp/` folder.

## Update the invitation

- Edit `content.js` to change event names, times, venues, descriptions, deadlines, and announcements. Update both the visible time and its `dateTime` value. Lexington event times are Eastern.
- When plans change, add an announcement with the posting date in `YYYY-MM-DD` format and the changes in its `items` list. Updates display newest first. The updates section and banner appear only when there is an announcement. Keep home addresses private and confirm permission to publish Vicki’s Zelle number before making the site public.
- Edit the welcome, gift message, or contribution copy in `index.html`. The ornament lives in `assets/holiday-ornament.svg`.
- Edit `rsvpUrl` in `content.js` to update the RSVP links. The nav link also has a fallback URL in `index.html`. The collaborative YouTube Music link is in the Family Holiday Playlist section of `index.html`.

## RSVP and family input

- The RSVP links open the same Tally form directly. It collects one response per person with their name, Jingle Blades interest, Wrapped with Reason signup, and optional song suggestions. Set `rsvp: true` on an event in `content.js` when its attendance is collected by the form.
- Use November 15 for both general RSVP and gift signup. Update the Tally form when the deadline changes.
- Wrapped with Reason runs with at least six confirmed individuals. Everyone gives and receives one gift, with a $20 maximum and no minimum. Send details privately to participants.
- Guests can suggest a song in the RSVP or join the collaborative YouTube Music playlist to add it directly.

## Publish with GitHub Pages

Place `index.html`, `styles.css`, `content.js`, `main.js`, `.nojekyll`, and `assets/` at the root of the publishing branch. In the public repository, open **Settings → Pages**, choose **Deploy from a branch**, and select that branch and **/ (root)**. Check the published page, jump links, RSVP, and playlist link.
