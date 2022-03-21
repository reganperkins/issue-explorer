# QnA

### Planning

> What do you think are the greatest areas of risk in completing the project?
- I don't see it as a risk per say but I can see that the title being variable lengths will be tricky
- the time factor of approximately 4 hours
- potential data issue with the github API

> What changes/additions would you make to the design?
- links to the issues
- options to search without the full URL

> List a two or three features that you would consider implementing in the future that would add significant value to the project.
- more filtering options
- issue viewer
- routing
- infinite scroll

---

### Looking Back

> Describe the major design/build decisions and why you made them.
- I added the views folder with the idea that down the line we may want to add routing and treat the components as their own pages. To do this however would involve changing the current data flow. Right now the fastest way to implement this well still creating an easy to maintain architecture was to have the Issue Explorer maintain the search and issues list and pass that data through to dumb components.

> How long did the assignment take (in hours)? Please break down your answer into buckets (e.g. "Learning Framework", "Coding", "Debugging").
  - 30 min with Github API docs (I struggled to find the correct param for filtering PRs)
  - 45 minutes architecture planing and reorganizing
  - 3 hours coding
  - 1 hour styling
  -

> If you could go back and give yourself advice at the beginning of the project, what would it be?
-

> Did you learn anything new?
- Yes, its been years since I worked with React (I know I had the option to work with anything but I wanted to give it a go). Most things I seemed to remember but did have to verify a few things an I think it slowed me down a bit

> Do you feel that this assignment allowed you to showcase your abilities effectively?
- yes, but I think with a few more hours to add tests, add proptypes, cleanup styles, adding infinite scroll it would be a better representation.

> Are there any significant web development-related skills that you possess that were not demonstrated in this exercise? If so, what are they?
- I have done a lot of work with performance optimizations that I did not utilize here. I also do work with and like css a lot but spent too much time on the guts of the application and did not do much in the way of styling and adding my own flare.
-
