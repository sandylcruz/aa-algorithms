
# Context

Before this PR, the application only had a login form with basic authentication working.

# Description

This pull request adds the table implementation, searching and sorting the table, and adding/deleting bookmarked folders. Changes and additions to both the frontend and backend were needed.

On the backend:
- A conscious decision was made to only return a shallow materialization of the folder data for folder `GET` requests. This decision was made because directories themselves can be very significant in size, and returning only what is needed to view a single page reduces server overhead and latency significantly.
- The `GET /api/v1/folders` route was added. It only return top-level folders. For the time being, this returns mock data.
- The `GET /api/v1/folders/:folderId` route was added. This returns the data for a given directory and only the first layer of children (i.e. files and folders) that it has. For the time being, this returns mock data.
- The `GET /api/v1/bookmarks` route was added so that the client can request these things on boot to derive/compute whether or not a given folder is bookmarked.
-  The `POST /api/v1/folders/:folderId/bookmark` route was added to allow for bookmarking a given directory.
-  The `DELETE /api/v1/folders/:folderId/bookmark` route was added to allow for the un-bookmarking of a given directory.

On the frontend:
- Breadcrumbs were added at the top of the table. The breadcrumbs denote the path taken from root to get to the current folder. Users are able to travel up the directory by the breadcrumbs links.
- Basic CSS styling was added. If further time were available, more styling would be added.
- Tables are sortable ascending/descending by name, size, or file type.
- Filter implementation was created to allow users to search by input. After inputting the search term, the table updates to show only the files that match the given search criteria.
- Directory entries have a bookmark checkbox in the table. Interacting with the checkbox sends either a `POST` or `DELETE` request to `/api/v1/folders/:folderId/bookmark`.

# After
